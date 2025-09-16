import { UpdateComputerModelIn } from '../domain/models/in/update.computer.model.in';
import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionMessages } from 'src/Common/exceptions/exception.messages';

@Injectable()
export class UpdateComputerUsecase {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
  ) {}

  async execute(id: string, newData: UpdateComputerModelIn) {
    const oldComputer = await this.computerPersistenceAdapter.findById(id);

    if (!oldComputer) {
      throw new NotFoundException(ExceptionMessages.COMPUTER.NOT_FOUND);
    }

    oldComputer.name = newData.name || oldComputer.name;
    oldComputer.color = newData.color || oldComputer.color;
    oldComputer.fabricationDate =
      newData.fabricationDate || oldComputer.fabricationDate;

    return await this.computerPersistenceAdapter.update(id, oldComputer);
  }
}
