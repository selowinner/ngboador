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
import { FriendlyEntity } from './friendly.entity';
import { PublicationsEntity } from './publications.entity';

@Entity()
export class StateEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column()
  name: string;

  // for friendly
  @OneToMany(() => FriendlyEntity, (friendlyEntity) => friendlyEntity.state)
  stateFriendly: FriendlyEntity[];

  // for publication
  @OneToMany(() => PublicationsEntity, (publicationEntity) => publicationEntity.state)
  statePublications: PublicationsEntity[];

	@CreateDateColumn() create_at: Date;
	@UpdateDateColumn() updated_at: Date;
}

