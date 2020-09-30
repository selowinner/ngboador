import { Controller, Get, Post, Request, Res, Logger, Body } from '@nestjs/common';
import { Response } from 'express';

// import { User } from './users/user.dto';
import * as session from 'express-session';
import { CreateUserDto, LoginUserDto } from './client/users/users.dto';
import { UsersService } from './client/users/users.service';

@Controller()
export class AppController {
  constructor(private readonly usersService: UsersService) {}

  // GET METHOD
  @Get()
  getHello(@Request() req, @Res() res: Response) {
    res.render('RS-Timeline')
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
