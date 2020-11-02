import { provide } from 'midway';
import { getRepository } from 'typeorm';
import { QuestionEntity } from '../question/question.entity';
import { ExamEntity } from './exam.entity';
import { UserEntity } from '../people/user/user.entity';

@provide('examService')
export class ExamService {
  async createExam(options) {
    // 试题
    const question: any = await getRepository(QuestionEntity).find();
    console.log('----------------------')
    console.log(question)
    console.log('----------------------')
    
    // 试卷
    const examEntity = new ExamEntity();
    examEntity.title = options.title;
    examEntity.questions = question;
    
    // 用户
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne(options.id, {relations: ['exams']});
    user.exams.push(examEntity);

    await userRepository.save(user);
    return userRepository.findOne(options.id, {relations: ['exams']});
  }

  async getExamAll() {
    return getRepository(ExamEntity).find({relations: ['user', 'questions']});
  }

  async getExam(id: number) {
    return getRepository(ExamEntity).findOne(id, {relations: ['user', 'questions']});
  }

  async getUserExam(id: number) {
    return getRepository(UserEntity).findOne(id, {relations: ['exams']});
  }

  async updateExam(options) {
    const examEntity = getRepository(ExamEntity);
    const exam = await examEntity.findOne(options.id, {relations: ['user']});
    exam.title = options.title;
    await examEntity.save(exam);
    return examEntity.findOne(options.id, {relations: ['user']});
  }
}
