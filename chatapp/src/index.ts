import { server as WebSocketServer, connection } from "websocket";
import http from "http";
import {
  InitMessageType,
  SupportedMessage,
  IncomingMessage,
} from "./messages/incomingMessages";
import {
  OutgoingMessage,
  SupportedMessage as OutgoingSupportedMessage,
} from "./messages/outgoingMessages";
import { InMemoryStore } from "./InMemoryStore";
import { UserManager } from "./UserManager";

var server = http.createServer(function (request: any, response: any) {
  console.log(new Date() + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});

const userManager = new UserManager();
const store = new InMemoryStore();

server.listen(8080, function () {
  console.log(new Date() + " Server is listening on port 8080");
});

var wsServer = new WebSocketServer({
  httpServer: server,
  // You should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser.  You should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

function originIsAllowed(origin: string) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on("request", function (request: any) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    //   UserManager.addUser()
    return;
  }

  var connection = request.accept("echo-protocol", request.origin);
  console.log(new Date() + " Connection accepted.");
  connection.on("message", function (message: any) {
    if (message.type === "utf8") {
      // console.log('Received Message: ' + message.utf8Data);
      // connection.sendUTF(message.utf8Data);
      try {
        messageHandler(connection, JSON.parse(message.utf8Data));
      } catch (e) {}
    } else if (message.type === "binary") {
      console.log(
        "Received Binary Message of " + message.binaryData.length + " bytes"
      );
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on("close", function (reasonCode: any, description: any) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
  });
});

function messageHandler(ws: connection, message: IncomingMessage) {
  if (message.type == SupportedMessage.JoinRoom) {
    const payload = message.payload;
    userManager.addUser(payload.name, payload.userId, payload.roomId, ws);
  }
  if (message.type == SupportedMessage.SendMessage) {
    const payload = message.payload;
    const user = userManager.getUser(payload.roomId, payload.userId);
    if (!user) {
      console.error("User not found in db");
      return;
    }
    store.addChat(payload.userId, user.name, payload.roomId, payload.message);
    const outgoingPayload: OutgoingMessage = {
      type: OutgoingSupportedMessage.AddChat,
      payload: {
        roomId: payload.roomId,
        message: payload.message,
        name: user.name,
        upvotes: 5,
      },
    };
    userManager.broadcast(payload.roomId, payload.userId, outgoingPayload);
  }

  if (message.type == SupportedMessage.UpvoteMessage) {
    const payload = message.payload;
    store.upvote(payload.userId, payload.roomId, payload.chatId);
  }
}
