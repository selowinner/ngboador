import { Controller, Get, Post, Request, Res, Logger, Body } from '@nestjs/common';
import { Response } from 'express';

// import { User } from './users/user.dto';
import * as session from 'express-session';
import { TimelinesService } from './client/timelines/timelines.service';
import { CreateUserDto, LoginUserDto } from './client/users/users.dto';
import { UsersService } from './client/users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private readonly timelinesService: TimelinesService,
  ) { }

  // GET METHOD
  @Get()
  async getTimelines(@Request() req, @Res() res: Response) {
    const user = await this.usersService.getUserByItem({ id: req.session.ngboador.id });
    const myListOfAllFriendly = await this.timelinesService.getFriendByUserForSearchPropose(req.session.ngboador.id);
    const myListFriend = await this.timelinesService.getFriendByUserForSearchPropose(req.session.ngboador.id, true);
    let query1 = "SELECT ref, profil, CONCAT(name, ' ', firstname) fullName WHERE (";
    myListOfAllFriendly.result.map((value, index) => {
      if (myListOfAllFriendly.result.length > 1) {
        if (index === myListOfAllFriendly.result.length - 1) {
          query1 += "id != ? AND ville LIKE ?) LIMIT 8";
        } else {
          query1 += "id != ? AND ";
        }
      } else {
        query1 += "id != ? AND ville LIKE ?) LIMIT 8";
      }
    })
    
    const params1 = [...myListOfAllFriendly.result, user.result.ville];
    const propositionsUser = await this.usersService.queryPrepareOfUser(query1, params1);
    console.log(query1, params1, propositionsUser);
    res.render('RS-Timeline', { propositionsUser: propositionsUser.result, user: user.result })
  }

  @Get('welcome')
  getCount(@Request() req, @Res() res: Response) {
    res.render('RS-Welcome')
  }

  @Get('login')
  getAssistance(@Request() req, @Res() res: Response) {
    if (req.session.ngboador) {
      res.redirect('/');
    } else {
      res.render('RS-Authentification');
    }
  }

  @Get('/logout')
	index(@Request() req, @Res() res: Response) {
    req.session.destroy()
    res.redirect('/');
  }



  // POST METHOD

  @Post('signup')
  async createUser(@Body() user: CreateUserDto, @Request() req, @Res() res: Response) {
    if (user.confirmPassword === user.password) {
      const { etat, result, error } = await this.usersService.createUser(user);
      if (etat) {
        req.session.ngboador = result;
        res.redirect('/welcome');
      } else {
        console.log(error)
        req.session.error = [];
        res.redirect('/login');
      }
    } else {
      req.session.error = [];
      res.redirect('/login')
    }
  }


  @Post('signin')
  async verifyUser(@Body() user: LoginUserDto, @Request() req, @Res() res: Response) {
    const { etat, result, error } = await this.usersService.verifyUser(user.email, user.password);
    if (etat) {
      req.session.ngboador = result;
      res.redirect('/');
    } else {
      console.log(error)
      req.session.error = [];
      res.redirect('/login');
    }
  }




}
