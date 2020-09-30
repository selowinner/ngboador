import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';
import flash = require('connect-flash');
import { join } from 'path';
import helmet = require('helmet');
import * as ejs from 'ejs';
import * as passport from 'passport';

import { Logger, ValidationPipe } from '@nestjs/common';
import 'dotenv/config';
import { AuthExceptionFilter } from './common/filters/exception.filter';


async function bootstrap() {
  const logger: Logger = new Logger('Main App center');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..','..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..','..', 'views'));


	// chose engine template
	// ejs.registerPartials(join(__dirname, '..', 'views', 'partials'));
  app.setViewEngine('ejs');
  
  app.use(helmet());
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new AuthExceptionFilter());
	app.enableCors();

	// Session initialise

	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false
		})
	);
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());
  // app.setViewEngine('html');
  await app.listen(process.env.APP_PORT, ()=> logger.debug(`Run on https://localhost:${process.env.APP_PORT}`));
}
bootstrap();
