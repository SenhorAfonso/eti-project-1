import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetSingleComputerUsecase {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
  ) {}

  async execute(id: string) {
    return await this.computerPersistenceAdapter.findById(id);
  }
}
