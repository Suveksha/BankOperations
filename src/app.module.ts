import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { BankModule } from './bank/bank.module';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver:ApolloDriver,
      playground:true,
      autoSchemaFile:join(process.cwd(), "src/schema.graphql"),
      definitions:{
        path:join(process.cwd(), "src/graphql.ts") //automatically creates an interface based on the graphql schema
      }
      // typePaths:["./**/*.graphql"] //Consider any files with .graphql as a GraphQL schema (Schema First Approach)
    }),
    MongooseModule.forRoot('mongodb+srv://suvekshachettri04:hasinam@cluster0.t3lvt.mongodb.net/Bank?retryWrites=true&w=majority'),
    BankModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
