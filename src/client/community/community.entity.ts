
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
import { CommentPublicationStandardsEntity } from '../timelines/comment-publication-standards.entity';
import { FriendlyEntity } from '../timelines/friendly.entity';
import { ReactionEntity } from '../timelines/reaction.entity';

@Entity()
export class CommunityEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	name: string;

	@Column({ length: 255 })
	descryption: string;

	@Column({ length: 50 })
	ref: string;

	@Column({ length: 50, default: '' })
	profil: string;

	

	@Column({ type: 'int' })
	recovery: number;

  // type 1 is for public communauty
  // type 0 is for private communauty
	@Column({ default: 1 })
	type: number;

	// @ManyToOne(() => RoleEntity, (role) => role.users)
	// @JoinColumn({ name: 'roleid' })
	// role: RoleEntity;

	// @ManyToOne(() => ForfaitEntity, (forfait) => forfait.users)
	// @JoinColumn({ name: 'forfaitid' })
	// forfait: ForfaitEntity;

	// @OneToMany(() => DemandeEntity, (demandes) => demandes.userid)
	// demandes: DemandeEntity[];

	// @OneToMany(() => NotificationEntity, (notifications) => notifications.userid)
	// notifications: NotificationEntity[];

	// @OneToMany(() => SerialAdminEntity, (notifications) => notifications.userid)
	// messagesByAdmin: SerialAdminEntity[];

	// @OneToMany(() => ReceptionEntity, (receptions) => receptions.userid)
	// receptions: ReceptionEntity[];

	// @OneToMany(() => TraitementEntity, (traitements) => traitements.userreceptionid)
	// traitements: TraitementEntity[];

	// @OneToMany(() => ReservoireEntity, (reservoires) => reservoires.userid)
	// reservoires: ReservoireEntity[];

	// @OneToMany(() => SerialUserEntity, (newentries) => newentries.userid)
	// newentries: SerialUserEntity[];

	@Column({ default: true })
	isActive: boolean;

	@Column({default: false})
	isAssistant: boolean;

	@Column({default: false})
	isRecommande: boolean;

	@Column({default: 0})
	accord: number;

	@Column()
	bithDate: Date;

	@OneToMany(() => FriendlyEntity, (friendlyEntity) => friendlyEntity.userAction)
	myActionFriendly: FriendlyEntity[];
	
	@OneToMany(() => FriendlyEntity, (friendlyEntity) => friendlyEntity.withoutUserAction)
	receiveActionFriendly: FriendlyEntity[];
	
	@OneToMany(() => ReactionEntity, (reactionEntity) => reactionEntity.user)
	reactionUser: ReactionEntity[];
	
	@OneToMany(() => CommentPublicationStandardsEntity, (commentUser) => commentUser.user)
  commentUser: CommentPublicationStandardsEntity[];

	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;
}
