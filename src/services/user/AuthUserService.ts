import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";
import { AuthUserDTO } from "../../dtos/user/AuthUserDTO";
import { UserRepository } from "../../repositories/UserRepository";
import { AppError } from "../../shared/errors/AppError";


class AuthUserService{
    private userRepo: UserRepository
    constructor(){
        this.userRepo = new UserRepository()
    }

    async execute({email, senha}:AuthUserDTO){

        const userExist = await this.userRepo.findFirst("", email);

        if(!userExist){
            throw new AppError("User/Password incorret", 400);
        }
        const passwordHashCompare = compare(senha, userExist.password!);

        if(!passwordHashCompare){
            throw new AppError("User/Password incorret", 400);
        }

        const token = sign(
            {
                name: userExist.name,
                email: userExist.email
            },
            process.env.JWT_SECRET as string,
            
        );

    }
}

export { AuthUserService };