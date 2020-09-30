import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class VerifySession implements NestMiddleware {
    private logger: Logger = new Logger('VerifySessionMiddleware');
	constructor(/*private service: UsersService*/) {}
    async use(req: Request, res: Response, next: Function) {
        if(req.session.ngboador) {
            if(req.session.ngboador.isActive) {
              next();
            } else {
              res.redirect('/users/locked');
            }

        }
        else {
            res.redirect('/login')
        }

  }
}



/*if(req.session.ngboador.inscription === 1){
    if(Math.floor((new Date().getTime() - req.session.ngboador.endForfait.getTime())/ 1000) < 2592000) {
        next();
    } else {
        const lockedUser = await this.service.updateUserForExpiration(req.session.ngboador.id);
        res.redirect('/users/paycheck')
    }

} else {
    res.redirect('/users/paycheck')
}*/

