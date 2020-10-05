import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { compare, hash } from 'bcrypt';
import { generateRecovery, generateRef } from 'src/common/function/helper';
import { ResponseProvider } from 'src/common/interface/Global.interface';
import { Not, Repository } from 'typeorm';
import { CommentPublicationStandardsEntity } from './comment-publication-standards.entity';
import { FilesPublicationEntity } from './files.publication.entity';
import { PublicationsEntity } from './publications.entity';
import { FriendlyEntity } from './friendly.entity';
import { ReactionEntity } from './reaction.entity';
import { StateEntity } from './state.entity';

@Injectable()
export class TimelinesService {

  constructor(
    @InjectRepository(CommentPublicationStandardsEntity) private commentPublicationsRepository: Repository<CommentPublicationStandardsEntity>,
    @InjectRepository(FilesPublicationEntity) private filesPublicationRepository: Repository<FilesPublicationEntity>,
    @InjectRepository(PublicationsEntity) private publicationsRepository: Repository<PublicationsEntity>,
    @InjectRepository(FriendlyEntity) private friendlyRepository: Repository<FriendlyEntity>,
    @InjectRepository(ReactionEntity) private reactionRepository: Repository<ReactionEntity>,
    @InjectRepository(StateEntity) private stateRepository: Repository<StateEntity>,
  ) {}



	async getFriendByUserForSearchPropose(id: number, filter: boolean = false): Promise<ResponseProvider> {
		return new Promise(async (next) => {
			await this.friendlyRepository
        .find({
          where : [
						{userAction_id: id},
						{userReceive_id: id},
						]
        })
				.then((result) => {
          const res = filter ? result.filter(value => value.state_id === 3).map(value => {return value.userAction_id === id ? value.userReceive_id : value.userAction_id}) : result.map(value => {return value.userAction_id === id ? value.userReceive_id : value.userAction_id});
          next({ etat: true, result: res });
				})
				.catch((error) => next({ etat: false, error }));
		});
	}

}
