import { DetailUserDTO } from "../../dtos/user/DetailUserDTO";
import prismaClient from "../../prisma";
import { AppError } from "../../shared/errors/AppError";

class DetailUserService{
    async execute({user_id}: DetailUserDTO){
        if(!user_id){
            throw new AppError("user_id is required");
        }

        const user = await prismaClient.user.findFirst({
            where:{
                id:user_id
            }
        })

        if(!user){
            throw new AppError("User not exists");
        }

        return{
            id:user.id,
            email:user.email,
            name:user.name,
            createdAt:user.createdAt
        };
    }
}

export { DetailUserService };