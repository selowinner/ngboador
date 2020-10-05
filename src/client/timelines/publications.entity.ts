
import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	JoinColumn,
	ManyToOne,
	OneToMany
} from 'typeorm';
import { UsersEntity } from '../users/users.entity';
import { CommentPublicationStandardsEntity } from './comment-publication-standards.entity';
import { FilesPublicationEntity } from './files.publication.entity';
import { ReactionEntity } from './reaction.entity';
import { StateEntity } from './state.entity';

@Entity()
export class PublicationsEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column()
	content: string;

	@Column({ type: 'int' })
	user_id: number;

	@Column({ type: 'int', default: 3 })
  state_id: number;

  @Column({ type: 'int', default: 1 })
  level: number;

/* ALL MANY TO ONE JOIN */
  
  @ManyToOne(() => StateEntity, (users) => users.statePublications)
	@JoinColumn({ name: 'state_id' })
  state: StateEntity;
  

/* ALL ONE TO MANY JOIN */
  
  
  // for files publication
  @OneToMany(() => FilesPublicationEntity, (filePublications) => filePublications.publication)
  filesPublications: FilesPublicationEntity[];

  // for reaction : Like, Dislike
  @OneToMany(() => ReactionEntity, (reactionPublications) => reactionPublications.publication)
  reactionPublications: ReactionEntity[];

  // for comment
  @OneToMany(() => CommentPublicationStandardsEntity, (commentPublications) => commentPublications.publication)
  commentPublications: CommentPublicationStandardsEntity[];

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;
}
