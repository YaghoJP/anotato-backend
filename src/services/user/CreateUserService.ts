import { AppError } from "../../shared/errors/AppError";
import { CreateUserDTO } from "../../dtos/user/CreateUserDTO";
import { hash } from "bcrypt";
import prismaClient from "../../prisma";

class CreateUserService{

    async execute(dto: CreateUserDTO){
        
        const userExist = await prismaClient.user.findFirst({
            where:{
                email:dto.email
            }
        });

        console.log(["Teste:", dto.email,userExist]);

        if(userExist){
            throw new AppError("user already exists", 400)
        }

        const passwordHash = await hash(dto.password, 8);


        const newUser = await prismaClient.user.create({
            data:{
                name:dto.name,
                email:dto.email,
                password:passwordHash
            },
            select:{
                id:true,
                name:true,
                email:true,
                createdAt:true
            }
        });

        if(!newUser){
            throw new AppError("Error when registering a new user", 400)
        }

        return newUser;
    }
}

export { CreateUserService };