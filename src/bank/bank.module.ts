import { Module } from '@nestjs/common';
import { BankResolver } from './bank.resolver';
import { BankService } from './bank.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BankClass, BankSchema } from './schema/bank.schema';

@Module({
  providers: [BankResolver, BankService],
  imports:[
    MongooseModule.forFeature([{ name: BankClass.name, schema: BankSchema }])
  ]
})
export class BankModule {}
