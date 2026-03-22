export default class BaseService {
    constructor(model) {
        this.model = model;
    }

    async getAll(){
        return this.model.findMany();
    }

}