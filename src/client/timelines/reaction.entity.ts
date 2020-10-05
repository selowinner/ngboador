import { SexeEnum } from 'src/common/enum/Global.enum';
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
import { PublicationsEntity } from './publications.entity';
import { StateEntity } from './state.entity';

@Entity()
export class ReactionEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column()
	type: SexeEnum.Like | SexeEnum.Disklike;

	@Column({ type: 'int' })
  publication_id: number;
  
  @Column({ type: 'int' })
	user_id: number;

/* ALL MANY TO ONE JOIN */

  // for publication
  @ManyToOne(() => PublicationsEntity, (publication) => publication.reactionPublications)
	@JoinColumn({ name: 'publication_id' })
  publication: PublicationsEntity;

  // for publication
  @ManyToOne(() => UsersEntity, (user) => user.reactionUser)
	@JoinColumn({ name: 'user_id' })
  user: UsersEntity;
  

/* ALL ONE TO MANY JOIN */

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;
}
