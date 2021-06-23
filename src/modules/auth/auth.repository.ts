import { genSalt, hash } from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { SignupDto } from './dtos';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
    

    async signup(signupDto: SignupDto): Promise<void>{
        
        const {username, password } = signupDto;

        const salt = await genSalt(10);
        const hashPass = await hash(password, salt);

        const user = new User();
        user.username = username;
        user.password = hashPass;
        
        await user.save();
    }

   
}