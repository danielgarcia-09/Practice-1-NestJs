import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dtos/signup.dto';
import { LoggedInDto } from './dtos/loggedin-dto';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly _authService: AuthService) {}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body() newUser: SignupDto ): Promise<void> {
        return this._authService.signup(newUser);
    }

    @Post('/signin')
    signIn(@Body() user: SignupDto ): Promise<LoggedInDto> {
        return this._authService.signin(user);
    }

}
