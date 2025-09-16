import { PeriphericPersistenceAdapter } from '../persistence/peripheric.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeletePeriphericUsecase {
  constructor(
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute(id: string) {
    return this.periphericPersistenceAdapter.delete(id);
  }
}
