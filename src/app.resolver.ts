import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';

@Resolver(of=>String)
export class AppResolver {
    @Query(returns => String, {name:'initialized'})
    graphqlInit(){
        return 'GraphQL is connected.'
    }
}
