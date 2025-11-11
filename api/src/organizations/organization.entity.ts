import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Invitation } from '../invitations/invitation.entity';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  industry: string;

  @Column()
  size: string;

  @OneToMany(() => User, (user) => user.organization)
  users: User[];

  @OneToMany(() => Invitation, (invitation) => invitation.organization)
  invitations: Invitation[];
}
