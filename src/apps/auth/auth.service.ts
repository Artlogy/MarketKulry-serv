import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountDto } from 'apps/account/dto/create-account.dto';
import { AccountRepo } from 'apps/account/repo/account.repo';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AccountRepo)
    private accountRepo:AccountRepo,
    private jwtService:JwtService,
  ){}

  async createUser(dto: CreateAccountDto) {
    console.log(dto);
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }



  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
