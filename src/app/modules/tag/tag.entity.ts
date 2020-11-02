import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AdminEntity } from '../people/admin/admin.entity';

@Entity('tag')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(type => AdminEntity, adminEntity => adminEntity.tag, {
    onDelete: 'CASCADE'
  })
  admin: AdminEntity;
}
