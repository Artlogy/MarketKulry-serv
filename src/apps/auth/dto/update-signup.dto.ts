import { PartialType } from '@nestjs/mapped-types';
import { CreateSignUpDto } from './create-signup.dto';

export class UpdateSignUpDto extends PartialType(CreateSignUpDto) {}
