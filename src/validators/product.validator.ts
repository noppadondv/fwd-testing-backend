import {
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export enum PlanCode {
  T11A20 = 'T11A20',
  T11A50 = 'T11A50',
  T11AM1 = 'T11AM1',
}

export enum PaymentFrequency {
  YEARLY = 'YEARLY',
  HALFYEARLY = 'HALFYEARLY',
  QUARTERLY = 'QUARTERLY',
  MONTHLY = 'MONTHLY',
}

export class GetProductValidator {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  genderCd: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  dob: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEnum(PlanCode)
  planCode: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumberString()
  premiumPerYear: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @IsEnum(PaymentFrequency)
  paymentFrequency: string;

  @IsOptional()
  @IsNumberString()
  saPerYear: string;
}
