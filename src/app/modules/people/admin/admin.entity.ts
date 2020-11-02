import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TagEntity } from '../../tag/tag.entity';

@Entity('admin')
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  type: string;

  @OneToMany(type => TagEntity, tagEntity => tagEntity.admin, {
    cascade: true
  })
  tag: TagEntity[];
}
