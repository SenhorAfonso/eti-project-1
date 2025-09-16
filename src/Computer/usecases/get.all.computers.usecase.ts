import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllComputersUsecase {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
  ) {}

  async execute() {
    return await this.computerPersistenceAdapter.findAll();
  }
}
