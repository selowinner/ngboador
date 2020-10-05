
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
import { StateEntity } from './state.entity';

@Entity()
export class FriendlyEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ type: 'int' })
	userAction_id: number;

	@Column({ type: 'int' })
	userReceive_id: number;

	@Column({ default: 1 })
  state_id: number;
  

  @ManyToOne(() => UsersEntity, (users) => users.myActionFriendly)
	@JoinColumn({ name: 'userAction_id' })
  userAction: UsersEntity;

  @ManyToOne(() => UsersEntity, (users) => users.receiveActionFriendly)
	@JoinColumn({ name: 'userReceive_id' })
  withoutUserAction: UsersEntity;

  @ManyToOne(() => StateEntity, (users) => users.stateFriendly)
	@JoinColumn({ name: 'state_id' })
  state: StateEntity;

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;
}
