
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { VerifySession } from './verifysession.middleware';

@Module({
  imports: [
        // TypeOrmModule.forFeature([ UserEntity ]),
  ],
  //providers: [ UsersService ],
})
export class MiddlewareModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerifySession).forRoutes(
      // For Categorie
      { path: '/', method: RequestMethod.GET },
      { path: 'users/', method: RequestMethod.GET },
      { path: 'users/matrix', method: RequestMethod.GET },
      { path: 'users/reclamations', method: RequestMethod.GET },
      { path: 'users/createDemande', method: RequestMethod.GET },
      { path: 'users/confirmation', method: RequestMethod.GET },
      { path: 'users/suivie', method: RequestMethod.GET },
      { path: 'users/settings', method: RequestMethod.GET },
      { path: 'users/view', method: RequestMethod.GET },
    );
  }
}

