import { CreatePeriphericModelIn } from '../domain/models/in/create.peripheric.model.in';
import { PeriphericPersistenceAdapter } from '../persistence/peripheric.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePeriphericUsecase {
  constructor(
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute(newPeripheric: CreatePeriphericModelIn) {
    return await this.periphericPersistenceAdapter.create(newPeripheric);
  }
}
