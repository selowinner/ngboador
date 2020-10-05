import { TimelinesService } from './timelines.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentPublicationStandardsEntity } from './comment-publication-standards.entity';
import { FilesPublicationEntity } from './files.publication.entity';
import { PublicationsEntity } from './publications.entity';
import { FriendlyEntity } from './friendly.entity';
import { ReactionEntity } from './reaction.entity';
import { StateEntity } from './state.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ CommentPublicationStandardsEntity ]),
    TypeOrmModule.forFeature([ FilesPublicationEntity ]),
    TypeOrmModule.forFeature([ PublicationsEntity]),
    TypeOrmModule.forFeature([ FriendlyEntity ]),
    TypeOrmModule.forFeature([ ReactionEntity ]),
    TypeOrmModule.forFeature([ StateEntity ]),
  ],
  controllers: [],
  providers: [
        TimelinesService, ],
  exports: [TimelinesService]
})
export class TimelinesModule {}
