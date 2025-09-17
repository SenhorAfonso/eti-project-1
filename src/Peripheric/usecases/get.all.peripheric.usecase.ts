import { PeriphericModelOut } from '../domain/models/out/peripheric.model.out';
import { PeriphericPersistenceAdapter } from '../persistence/peripheric.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllPeriphericsUsecase {
  constructor(
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute() {
    const peripherics = await this.periphericPersistenceAdapter.findAll();

    return peripherics.map((item) => {
      return new PeriphericModelOut(String(item.id), item.name);
    });
  }
}
