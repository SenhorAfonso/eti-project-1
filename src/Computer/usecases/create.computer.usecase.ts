import { CreateComputerModelIn } from '../domain/models/in/create.computer.model.in';
import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateComputerUsecase {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
  ) {}

  async execute(newComputer: CreateComputerModelIn) {
    return await this.computerPersistenceAdapter.create(newComputer);
  }
}
