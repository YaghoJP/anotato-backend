export default class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async getAll(req, res){
        try {
            const listaDeRegistros = await this.entidadeService.getAll();
            return res.status(200).json(listaDeRegistros);
        }catch(error){
            
        }
    }
}