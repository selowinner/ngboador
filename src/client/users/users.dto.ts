import { IsEmail, IsNotEmpty } from 'class-validator';
import { SexeEnum } from 'src/common/enum/Global.enum';

export class CreateUserDto {  
  @IsNotEmpty()  name: string;
  @IsNotEmpty()  firstname: string;
  @IsNotEmpty() ville: string;
  @IsNotEmpty() subregion: string;
  @IsNotEmpty()  region: string;
  @IsNotEmpty()  prefix: string;
  @IsNotEmpty()  countrie: string;
  @IsNotEmpty()  jour: string;
  @IsNotEmpty()  mois: string;
  @IsNotEmpty()  annee: string;
  @IsNotEmpty() password: string;
  @IsNotEmpty() confirmPassword: string;
  @IsNotEmpty() sexe: SexeEnum.Homme | SexeEnum.Femme;
  @IsNotEmpty()  @IsEmail()  email: string;

}


export class LoginUserDto {  
  @IsNotEmpty() @IsEmail() readonly email: string;
  @IsNotEmpty()  readonly password: string;
}

export class UserDto {  
  @IsNotEmpty()  id: number;
  @IsNotEmpty()  nameEntreprise: string;
  @IsNotEmpty()  address: string;
  @IsNotEmpty()  @IsEmail()  email: string;
}