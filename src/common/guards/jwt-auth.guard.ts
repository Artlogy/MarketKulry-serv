import {
 ExecutionContext,
 Injectable,
 UnauthorizedException
} from '@nestjs/common'
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
    constructor(
        private readonly authService:AuthService,
        private readonly jwtService:JwtService,
        private readonly reflector:Reflector
    ){
        super()
    }
}