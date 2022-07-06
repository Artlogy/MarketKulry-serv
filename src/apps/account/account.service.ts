import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { AccountRepo } from './repo/account.repo';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountRepo)
    private accountRepo:AccountRepo
  ){}
    
  async checkEmail(p_email:string) : Promise<boolean>{
    const checkedResult : Account[] = await this.accountRepo.find({where:{email:p_email}})
    return Boolean(checkedResult.length);
  }
}
