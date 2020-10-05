
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
export class FilesPublicationEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column()
	name: string;

	@Column({ type: 'int' })
	publication_id: number;

/* ALL MANY TO ONE JOIN */

  // for publication
  @ManyToOne(() => PublicationsEntity, (publication) => publication.filesPublications)
	@JoinColumn({ name: 'publication_id' })
  publication: PublicationsEntity;
  

/* ALL ONE TO MANY JOIN */

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;
}
