


export async function AdminController(req, res){
   res.send("hellooooo");
}

export async function Aryan(req, res){
    res.send("mantis kya baate kar raha hai");
}

export async function hardkaur(req, res){
    const number = req.params.number;
    const num1 = parseInt(number);
    let double = num1*2;
    const str = double.toString();
    res.send(str);
}

export async function kuchikuchi(req,res){
    const data = req.body;
    console.log(data);
    res.status(200).send({
        data:{
            response : data,
        }
    })

}