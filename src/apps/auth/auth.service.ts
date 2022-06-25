import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {CreateSignUpDto} from 'apps/auth/dto/create-signup.dto';
import {UpdateSignUpDto} from 'apps/auth/dto/update-signup.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService:JwtService,
  ){}

  signUp(createAuthDto: CreateSignUpDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateSignUpDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
