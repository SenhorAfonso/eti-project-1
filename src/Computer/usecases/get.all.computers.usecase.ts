import { ComputerMapper } from '../controller/dto/computer.mapper';
import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllComputersUsecase {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
  ) {}

  async execute() {
    const computers = await this.computerPersistenceAdapter.findAll();

    const modelsOut =
      ComputerMapper.computerDocumentArrayToComputerModelOutArray(computers);
    return modelsOut;
  }
}
