import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Bank } from './schema/bank.schema';
import { Bank as BankModel } from 'src/graphql';
import { BankService } from './bank.service';
import { BankModule } from './bank.module';
import { BankDetailsArgs } from './args/bank.args';

interface BankType{
    id:number,
    name:string,
    branch:string
}

// const banks:BankModel[]=[
//     {
//         id:1,
//         name:"HDFC Bank",
//         branch:"Gurgaon"
//     },
//     {
//         id:2,
//         name:"IDFC Bank",
//         branch:"Noida"
//     },
//     {
//         id:1,
//         name:"Punjab National Bank",
//         branch:"Delhi"
//     }
// ]

//Schema First Approach
// @Resolver("Bank")
// export class BankResolver {

//     @Query('banks') //this indicates for which query this resolver will work
//     getAllBanks() //return all bank details
//     {
//         return banks
//     }
// }


//Code First Approach
@Resolver(of=>Bank)
export class BankResolver{

    constructor(private bankService:BankService){}


    @Query(returns=>[Bank], {name:'banks'}) //name: changes the name of the query. By default the name of the query is same as the function name below
    getAllBanks() : BankModel[]
    {
        return this.bankService.findAllBank()
    }

    @Query(returns=>Bank,{nullable:true})
    getBankById(@Args({name:'bankId',type:()=>Int}) id : number) : BankModel | string {
        return this.bankService.findBankById(id)
    }
    
    @Mutation(returns=>String)
    deleteBankById(@Args({name:'bankId',type:()=>Int}) id:number) : String{
        return this.bankService.deleteBankDetails(id)
    }

    @Mutation(returns=>String)
    addBankDetails(@Args("addBankArgs") addBankArgs : BankDetailsArgs) : String
    {
        return this.bankService.addBankDetails(addBankArgs)
    }

    @Mutation(returns=>String)
    updateBankDetails(@Args({name:'bankId',type:()=>Int}) id : number, @Args("addBankArgs") bankArgs:BankDetailsArgs) : String{
        return this.bankService.updateBank(id,bankArgs)
    }
}
