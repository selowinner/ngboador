import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { SexeEnum } from 'src/common/enum/Global.enum';
import { generateRecovery, generateRef } from 'src/common/function/helper';
import { ResponseProvider } from 'src/common/interface/Global.interface';
import { Not, Repository } from 'typeorm';
import { CreateUserDto } from './users.dto';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>,
  ) {}



  async createUser(user: CreateUserDto): Promise<ResponseProvider> {
		return new Promise(async (next) => {
			await this.usersRepository
				.findOne({
					where : [
						{email: user.email.trim()},
						]
				})
				.then(async (res) => {
					if (res) {
						next({ etat: false, error: Error('Cet email est déjà enregistré sous un autre compte') });
					} else {
						const { confirmPassword, jour, mois, annee, ...rest } = user;
						const ref = await generateRef(rest.email);
						const recovery = await generateRecovery();
						const password = await hash(rest.password.trim(), Number(process.env.CRYPTO_DIGEST));
            const bithDate = new Date(parseInt(annee, 10), parseInt(mois, 10), parseInt(jour, 10));
            await this.usersRepository
							.save({
                ...rest,
                ref,
                recovery,
								bithDate,
								profil: rest.sexe === SexeEnum.Homme ? 'user.jpg' : 'RS-user4.jpeg',
                ville: rest.ville.toLowerCase(),
                password
							})
							.then((result) => {
								next({ etat: true, result });
							})
							.catch((error) => next({ etat: false, error }));
					}
				})
				.catch((error) => next({ etat: false, error }));
		});
  }
  
  async verifyUser(email: string, password: string): Promise<ResponseProvider> {
		return new Promise(async (next) => {
			await this.usersRepository
				.findOne({ email })
				.then(async (result) => {
          if (result) {
            const state = await compare(password, result.password)
						if(state) {
              // eslint-disable-next-line @typescript-eslint/camelcase
							result.updated_at = new Date();
							result.isConnect = true;
              await result.save();
						next({ etat: true, result });
            } else {
              next({ etat: false, error: new Error('Verified your password') });
            }
					} else {
						next({ etat: false, error: new Error('Verified your username') });
					}
				})
				.catch((error) => next({ etat: false, error }));
		});
	}

	async getUserByItem(item): Promise<ResponseProvider> {
		return new Promise(async (next) => {
			await this.usersRepository
				.findOne(item)
				.then((result) => {
					if (result) {
						next({ etat: true, result });
					} else {
						next({ etat: false, error: new Error('Verifié vos coordonnés') });
					}
				})
				.catch((error) => next({ etat: false, error }));
		});
	}

	async queryPrepareOfUser(querie: string, params: any[]): Promise<ResponseProvider> {
		return new Promise(async (next) => {
			await this.usersRepository
			.query(querie, params)
				.then((result) => {
					next({ etat: true, result })
				})
				.catch((error) => next({ etat: false, error }));
		});
	}
}
