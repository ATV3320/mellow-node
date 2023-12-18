class ApiController {
    // Define methods for each exported function, including constructor if needed

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    async adminController() {
        return this.res.send("hellooooo");
    }

    async aryan() {
        return this.res.send("mantis kya baate kar raha hai");
    }

    async hardkaur() {
        const number = parseInt(this.req.params.number);
        const double = number * 2;
        return this.res.send(double.toString());
    }

    async kuchikuchi() {
        const data = this.req.body;
        console.log(data);
        return this.res.status(200).send({
            data: {
                response: data,
            },
        });
    }

    async getCoinGechoPrices() {
        const data = this.req.body;
        console.log(data);
        return this.res.status(200).send({
            data: {
                response: data,
            },
        });
    }

    // async getContractData() {

    // }

    // async spitPublicKey() {

    // }

    // async returnJsonResponse() {

    // }

    // async useDB() {

    // }
}

export default ApiController;