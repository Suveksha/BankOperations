import { Injectable } from '@nestjs/common';
import { BankModel } from './entity/bank.entity';

let banks:BankModel[]=[]


@Injectable()
export class BankService {

    addBankDetails(bank:BankModel){
        banks.push(bank)
        return "Bank details added."
    }

    updateBank(id:number, bankDetails:BankModel)
    {
       for(let index=0; index<=banks.length; index++)
        {
            if(banks[index].id==id)
               {
                banks[index]=bankDetails
                return `Bank Details updated for ${id}.`
               }
        }

        return `No Bank detail found for ${id} id.`
    }

    deleteBankDetails(id:number){
       banks=banks.filter((bank:BankModel)=>bank.id!==id)
       return `Bank Detail for bankId ${id} deleted successfully.`
    }   

    findBankById(id:number){
       let bankDetails=banks.filter((bank:BankModel)=>bank.id==id)

       if(bankDetails.length)
        return bankDetails[0]
       
       return `No Bank detail found for ${id} id.`
    }

    findAllBank()
    {
        return banks;
    }
}
