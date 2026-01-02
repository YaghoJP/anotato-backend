import { DetailUserDTO } from "../../dtos/user/DetailUserDTO";
import { AppError } from "../../shared/errors/AppError";
import { UserRepository } from "../../repositories/UserRepository";

class DetailUserService{
    async execute({user_id}: DetailUserDTO){
        if(!user_id){
            throw new AppError("user_id is required");
        }

        const userRep = new UserRepository()

        const user = await userRep.findFirst(user_id, "");

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