import { provide } from 'midway';
import { getRepository } from 'typeorm';
import { AdminEntity } from '../admin/admin.entity';

@provide('superadminService')
export class SuperadminService {
  async createAdmin(payload) {
    const adminEntity = new AdminEntity();
    adminEntity.username = payload.username;
    adminEntity.phone = payload.phone;
    adminEntity.password = payload.password;
    adminEntity.type = payload.type;

    const adminRepository = getRepository(AdminEntity);
    await adminRepository.save(adminEntity);
    return adminRepository.findOne(adminEntity.id);
  }
  
  getAdminAll() {
    return getRepository(AdminEntity).find();
  }
}
