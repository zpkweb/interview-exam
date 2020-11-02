import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { ExamEntity } from '../../exam/exam.entity';
import { UserInfoEntity } from './user-info.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  phone: string;

  @OneToOne(type => UserInfoEntity, userinfo => userinfo.user, {
    cascade: true
  })
  userinfo: UserInfoEntity;

  @OneToMany(type => ExamEntity, examEntity => examEntity.user, {
    cascade: true
  })
  exams: ExamEntity[];
}
