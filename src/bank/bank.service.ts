import { Injectable } from '@nestjs/common';
import { BankModel } from './entity/bank.entity';
import { InjectModel } from '@nestjs/mongoose';
import { BankClass } from './schema/bank.schema';
import { Model } from 'mongoose';
import { BankDTO } from './dto/bank.dto';

let banks:BankModel[]=[]


@Injectable()
export class BankService {

    constructor(@InjectModel(BankClass.name) private bank:Model<BankClass>){}

    async addBankDetails(bank:BankModel) : Promise<String>{
        const newBankDetails=new this.bank(bank)
        const save=await newBankDetails.save()
        if(save)
            return 'Document saved successfully.'
        else
            return 'Error while saving the Document.'
    }

    async updateBank(id:number, bankDetails:BankModel) : Promise<String>
    {
      const updateBankDetails=await this.bank.updateOne({"id":id}, {$set:{"name":bankDetails.name, "branch":bankDetails.branch}}).exec()

      if(updateBankDetails)
        return 'Document updated successfully.'
      else
        return 'Document failed to update.'
    }

    async deleteBankDetails(id:number) : Promise<String>{
      const deleteBankDetails=await this.bank.deleteOne({"id":id}).exec()

      if(deleteBankDetails)
        return 'Bank Details deleted successfully.'
      else 
        return 'Failed to delete bank details.'
    }   

    async findBankById(id:number) : Promise<BankDTO[]>{
       return await this.bank.find({'id':id}).exec()
    }

    async findAllBank() : Promise<BankDTO[]>
    {
        return await this.bank.find().exec()
    }
}
