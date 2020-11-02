import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExamEntity } from '../exam/exam.entity';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany(type => ExamEntity, examEntity => examEntity.questions, {
    cascade: true
  })
  exams: ExamEntity[];
}