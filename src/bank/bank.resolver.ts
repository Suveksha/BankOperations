import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BankClass } from './schema/bank.schema';
import { BankModel } from './entity/bank.entity';
import { BankService } from './bank.service';
import { BankModule } from './bank.module';
import { BankDetailsArgs } from './args/bank.args';
import { BankDTO } from './dto/bank.dto';

interface BankType{
    id:number,
    name:string,
    branch:string
}

//Code First Approach
@Resolver(of=>BankDTO)
export class BankResolver{

    constructor(private bankService:BankService){}


    @Query(returns=>[BankDTO], {name:'banks'}) //name: changes the name of the query. By default the name of the query is same as the function name below
    getAllBanks() : Promise<BankDTO[]>
    {
        return this.bankService.findAllBank()
    }

    @Query(returns=>[BankDTO])
    getBankById(@Args({name:'bankId',type:()=>Int}) id : number) : Promise<BankDTO[]> {
        return this.bankService.findBankById(id)
    }
    
    @Mutation(returns=>String)
    deleteBankById(@Args({name:'bankId',type:()=>Int}) id:number) : Promise<String>{
        return this.bankService.deleteBankDetails(id)
    }

    @Mutation(returns=>String)
    addBankDetails(@Args("addBankArgs") addBankArgs : BankDetailsArgs) : Promise<String>
    {
        return this.bankService.addBankDetails(addBankArgs)
    }

    @Mutation(returns=>String)
    updateBankDetails(@Args({name:'bankId',type:()=>Int}) id : number, @Args("addBankArgs") bankArgs:BankDetailsArgs) : Promise<String>{
        return this.bankService.updateBank(id,bankArgs)
    }
}
