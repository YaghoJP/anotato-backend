export default class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async getAll(req, res){
        try {
            const listaDeRegistros = await this.entidadeService.getAll();
            return res.status(200).json(listaDeRegistros);
        }catch(error){
            return res.status(500).json({
                error: error.message
            });
        }
    }

    async create(req, res){
        try{
            console.log(req.body);
            const data = req.body;
            const createRegister = await this.entidadeService.create(data);
            return res.status(200).json(createRegister);
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async update(req, res){
        try{
           const {id} = req.params;
           console.log(id);
           const data = req.body;
           const updateRegister = await this.entidadeService.update(id, data)
           return res.status(200).json(updateRegister)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }

    async delete(req, res){
        try{
           const {id} = req.params;
           const data = req.body;
           const deleteRegister = await this.entidadeService.delete(id, data)
           return res.status(200).json(deleteRegister)
        }catch(error){
            return res.status(400).json({
                error: error.message
            })
        }
    }
}