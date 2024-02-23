import { IsString } from "class-validator";

export class DockDto {

    @IsString()
    readonly name?: string;

}