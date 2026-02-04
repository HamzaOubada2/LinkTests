import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateMonitorDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  url: string;

  @IsNumber()
  @IsOptional()
  @Min(10) // miniment 10s bach mayw9fch server
  frequency?: number;
}
