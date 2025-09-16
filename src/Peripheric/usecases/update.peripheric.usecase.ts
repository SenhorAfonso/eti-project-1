import { UpdatePeriphericModelIn } from '../domain/models/in/update.peripheric.model.in';
import { PeriphericPersistenceAdapter } from '../persistence/peripheric.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UpdatePeriphericUsecase {
  constructor(
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute(id: string, newData: UpdatePeriphericModelIn) {
    return await this.periphericPersistenceAdapter.update(id, newData);
  }
}
