import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class BankDTO{
    @Field(type=>Int)
    id:number

    @Field(type=>String)
    name:string

    @Field(type=>String)
    branch:string
}