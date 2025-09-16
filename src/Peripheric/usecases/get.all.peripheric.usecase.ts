import { PeriphericPersistenceAdapter } from '../persistence/peripheric.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllPeriphericsUsecase {
  constructor(
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute() {
    return await this.periphericPersistenceAdapter.findAll();
  }
}
