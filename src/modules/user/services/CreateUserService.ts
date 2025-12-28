import { AppError } from "../../../shared/errors/AppError";
import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from "bcrypt";

class CreateUserService{
    private userRepo: UserRepository
    constructor(){
        this.userRepo = new UserRepository()
    }

    async execute(dto: CreateUserDTO){
        
        const userExist = await this.userRepo.findFirst("", dto.email)

        if(userExist){
            throw new AppError("user already exists", 400)
        }

        const passwordHash = await hash(dto.password, 8);


        const newUser = await this.userRepo.create({
            name:dto.name,
            email:dto.email,
            password:passwordHash
        });

        if(!newUser){
            throw new AppError("Error when registering a new user", 400)
        }

        return newUser;
    }
}

export { CreateUserService };