import { IsString } from "class-validator"

export class CreateCarDto {

    @IsString({message:'El id debe ser un string'})
    public id:string

    @IsString({message:'El brand debe ser un string'})
    readonly brand:string
    
    @IsString({message:'Modelo debe ser un string'})
    readonly model:string
}