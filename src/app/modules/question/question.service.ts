import { provide } from 'midway';
import { getRepository } from 'typeorm';
import { QuestionEntity } from './question.entity';

@provide('questionService')
export class QuestionService {
  async createQuestion(options) {
    const questionEntity = new QuestionEntity();
    questionEntity.title = options.title;
    
    const questionRepository = getRepository(QuestionEntity);
    await questionRepository.save(questionEntity);
    return questionRepository.findOne(questionEntity.id);
  }

  async getQuestionAll() {
    return getRepository(QuestionEntity).find({relations: ['exams']});
  }

  async getQuestion(id: number) {
    return getRepository(QuestionEntity).findOne(id, {relations: ['exams']});
  }

  async updateQuestion(options) {
    const questionEntity = getRepository(QuestionEntity);
    const question = await questionEntity.findOne(options.id, {relations: ['exams']});
    question.title = options.title;
    await questionEntity.save(question);
    return questionEntity.findOne(options.id, {relations: ['exams']});
  }

}