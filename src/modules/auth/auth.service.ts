import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SignupDto, SigninDto } from './dtos';
import { AuthRepository } from './auth.repository';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { IJwtPayload } from './jwt-payload-interface';
import { LoggedInDto } from './dtos/loggedin-dto';
import { plainToClass } from 'class-transformer';


@Injectable()
export class AuthService {
    
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
        private readonly _jwtService: JwtService
    ) {}

    async signup(signupDto: SignupDto){
        
        const { username } = signupDto;

        const userExists = await this._authRepository.findOne({
            where: {username: username}
        });

        if (userExists) {
            throw new ConflictException('User already exists');
        }


        return this._authRepository.signup(signupDto);
    }

    async signin(signinDto: SigninDto): Promise<LoggedInDto> {
        
        const { username, password } = signinDto;

        const user = await this._authRepository.findOne({
            where: { username: username }
        });

        if(!user) {
            throw new NotFoundException('User not found');
        }

        const isMatch = await compare(password, user.password);

        if(!isMatch) {
            throw new UnauthorizedException('invalid credentials');
        }

        const payload: IJwtPayload = {
            username: username
        }
        const token = this._jwtService.sign(payload)

        return plainToClass(LoggedInDto, { token, user })
    }
   
    
}
