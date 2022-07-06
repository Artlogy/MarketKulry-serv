import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAccountDto } from 'apps/account/dto/create-account.dto';
import { Public } from 'common/decorators/rbac.decorator';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
@ApiBearerAuth('access-token')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @ApiOperation({summary:'회원가입'})
  @Post('createUser')
  async createUser(@Body() dto:CreateAccountDto) : Promise<string>{
    return this.authService.createUser(dto);
  }
}
