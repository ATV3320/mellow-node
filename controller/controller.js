export async function adminController(req, res) {
    return this.res.send("hellooooo");
}

export async function aryan(req, res) {
    return this.res.send("mantis kya baate kar raha hai");
}

export async function hardkaur(req, res) {
    const number = parseInt(this.req.params.number);
    const double = number * 2;
    return this.res.send(double.toString());
}

export async function kuchikuchi(req, res) {
    const data = this.req.body;
    console.log(data);
    return this.res.status(200).send({
        data: {
            response: data,
        },
    });
}

export async function getCoinGechoPrices(req, res) {
    const data = this.req.body;
    console.log(data);
    return this.res.status(200).send({
        data: {
            response: data,
        },
    });
}

export async function getContractData(req, res) {

}

export async function spitPublicKey(req, res) {

}

export async function returnJsonResponse(req, res) {

}

export async function useDB(req, res) {

}

