
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

@Entity()
export class UsersEntity extends BaseEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 25 })
	name: string;

	@Column({ length: 110 })
	firstname: string;

	// @Column({ length: 50 })
	// pseudo: string;

	@Column({ length: 50 })
	ref: string;

	@Column({ length: 50 })
	email: string;

	@Column({ length: 50, default: '' })
	number: string;

	@Column({ length: 50 })
	prefix: string;

	@Column({ length: 50 })
	countrie: string;

	@Column({ length: 50 })
	subregion: string;

	@Column({ length: 50 })
	region: string;

	@Column({ length: 50, default: SexeEnum.Femme})
	sexe: SexeEnum.Homme | SexeEnum.Femme;

	@Column({ length: 255 })
	password: string;

	@Column({ length: 255, default: '' })
	motif: string;

	@Column({ type: 'int' })
	recovery: number;

	@Column({ default: 1 })
	roleid: number;

	@Column({default: true})
	isConnect: boolean;

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


	@CreateDateColumn() create_at: Date;

	@UpdateDateColumn() updated_at: Date;
}
