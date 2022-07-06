import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account } from './entities/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepo } from './repo/account.repo';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      AccountRepo
    ])
  ],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
export const AccountEntities = [
  Account
]
