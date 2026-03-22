export default class BaseService {
    constructor(model) {
        this.model = model;
    }

    async getAll(){
        return await this.model.findMany();
    }

    async create(data){
        return(
            await this.model.create({data})
        );
    }

    async update(id, data){
        console.log(id, data);
        return await this.model.update({
            where:{id: Number(id)},
            data
        })
    }

    async delete(id){
        return(
            await this.model.delete({
                where:{
                    id:Number(id)
                }
            })
        );
    }

}