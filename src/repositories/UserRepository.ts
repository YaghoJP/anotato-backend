import prismaClient from "../../../prisma";

interface CreateUserRepositoryProps{
    name:string,
    email:string,
    password?:string,
    google_id?:string,
    avatar_url?:string
}

class UserRepository{
    async create(data:CreateUserRepositoryProps){
        return(
            await prismaClient.user.create({
                data:data,
                select:{
                    id:true,
                    name:true,
                    email:true,
                    google_id:true,
                    createdAt:true
                }
            })
        );
    }

    async findFirst(id:string = "", email:string = ""){
        return(
            await prismaClient.user.findFirst({
                where:{
                    id,
                    email
                },
                select:{
                    id:true,
                    name:true,
                    email:true,
                    google_id:true,
                    createdAt:true
                }
            })
        );
    }
}

export {UserRepository};