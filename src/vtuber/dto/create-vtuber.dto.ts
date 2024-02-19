import { IsOptional, IsString, MinLength, IsInt, IsPositive, IsDate, IsDateString } from "class-validator";

export class CreateVtuberDto {

    @IsString()
    //@MinLength(3) mínimo de caracteres
    name: string;

    @IsInt()
    @IsPositive()
    age: number;

    @IsDateString() //"2019-12-27"
    debut: Date;

    @IsString()
    @IsOptional()
    company: string;

}
