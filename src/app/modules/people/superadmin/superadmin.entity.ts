import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('super_admin')
export class SuperAdminEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;


}
