export type UserId = string;
// export let globalChatId = 0;

export interface Chat{
    id: string;
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[];
}


export abstract class Store{
    constructor(){

    }
    initRoom(roomId: string){

    }
    getChats(room:string, limit: number, offset: number){

    }
    addChat(userId: UserId,name: string, roomId: string, message: string){

    }
    upvote(userId: UserId, room: string, chatId: string){

    }
}
//to be eventually replaced