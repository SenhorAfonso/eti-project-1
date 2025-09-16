import { PeriphericPersistenceAdapter } from 'src/Peripheric/persistence/peripheric.persistence.adapter';
import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { BadRequestException } from '@nestjs/common';
import { ExceptionMessages } from 'src/Common/exceptions/exception.messages';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddPeriphericToComputer {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute(computerId: string, periphericId: string) {
    const [computer, peripheric] = [
      await this.computerPersistenceAdapter.findById(computerId),
      await this.periphericPersistenceAdapter.findById(periphericId),
    ];

    if (!computer) {
      throw new BadRequestException(ExceptionMessages.COMPUTER.NOT_FOUND);
    }

    if (!peripheric) {
      throw new BadRequestException(ExceptionMessages.COMPUTER.NOT_FOUND);
    }

    if (peripheric.inUse) {
      throw new BadRequestException(ExceptionMessages.PERIPHERIC.IN_USE);
    }

    computer.peripherics.push(peripheric._id);
    peripheric.inUse = true;

    await this.computerPersistenceAdapter.update(computerId, computer);
    await peripheric.save();
  }
}
