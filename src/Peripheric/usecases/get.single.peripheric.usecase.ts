import { PeriphericPersistenceAdapter } from '../persistence/peripheric.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetSinglePeriphericUsecase {
  constructor(
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute(id: string) {
    return await this.periphericPersistenceAdapter.findById(id);
  }
}
