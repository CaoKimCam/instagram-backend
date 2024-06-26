import { IsNotEmpty, IsNumber, Min, MinLength } from "class-validator";
import { ObjectId } from "typeorm";

export class ProductDto{
    // @IsNotEmpty()
    categoryId?: number;

    // ít nhất 5 ký tự
    @MinLength(5,{message: "This field must be than 5 character Nine Dev"})
    name?: string;

    // @IsNumber()
    price?: number;
}