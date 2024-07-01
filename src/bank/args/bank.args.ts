import { Field, InputType, Int } from "@nestjs/graphql";

@InputType() //to provide multiple arguments to a resolver
export class BankDetailsArgs{
    @Field((type)=>Int)
    id:number;

    @Field((type)=>String)
    name:string;

    @Field((type)=>String)
    branch:string
}