export default class BaseService {
    constructor(model) {
        this.model = model;
    }

    async getAll(){
        return await this.model.findMany();
    }

}