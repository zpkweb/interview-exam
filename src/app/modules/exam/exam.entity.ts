import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { UserEntity } from '../people/user/user.entity';
import { QuestionEntity } from '../question/question.entity';

@Entity('exam')
export class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => UserEntity, userEntity => userEntity.exams, {
    onDelete: 'CASCADE'
  })
  user: UserEntity;

  @ManyToMany(type => QuestionEntity, questionEntity => questionEntity.exams, {
    onDelete: 'CASCADE'
  })
  @JoinTable()
  questions: QuestionEntity[];
}