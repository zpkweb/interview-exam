import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('user_info')
export class UserInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sex: number;

  @Column()
  age: number;

  @OneToOne(type => UserEntity, user => user.userinfo, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  user: UserEntity;
}
