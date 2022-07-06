import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { Public } from 'common/decorators/rbac.decorator';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Public()
  @ApiOperation({summary:'이메일 중복확인'})
  @Get('check-email')
  async checkEmail(@Query() p_email:string) : Promise<boolean>{
    return await this.accountService.checkEmail(p_email);
  }
}
