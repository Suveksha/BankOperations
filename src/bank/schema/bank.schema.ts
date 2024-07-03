// import { Field, Int, ObjectType } from "@nestjs/graphql";
// @ObjectType()

// export class Bank{
//     @Field((type)=>Int)
//     id:number;

//     @Field({nullable:true})
//     name:string;

//     @Field({nullable:true})
//     branch:string;

// }



import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Int } from "type-graphql";

export type BankDocument=HydratedDocument<BankClass>

@Schema()
export class BankClass{
    @Prop(type=>String)
    name:string

    @Prop(type=>String)
    branch:string

    @Prop(type=>Int)
    id:number
}

export const BankSchema=SchemaFactory.createForClass(BankClass)