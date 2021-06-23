import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from '../../../config/config.service';
import { IJwtPayload } from '../jwt-payload-interface';
import { InjectRepository } from "@nestjs/typeorm";
import { AuthRepository } from '../auth.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        private readonly _configService: ConfigService,
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: _configService.get('JWT_SECRET'),
        });
    }

    async validate(payload: IJwtPayload){
        const { username } = payload;

        const user = await this._authRepository.findOne({
            where: { username: username }
        })

        if(!user){
            throw new UnauthorizedException();
        }

        return payload;
    }
}