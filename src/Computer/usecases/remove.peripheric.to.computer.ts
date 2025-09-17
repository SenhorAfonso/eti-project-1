import { PeriphericPersistenceAdapter } from 'src/Peripheric/persistence/peripheric.persistence.adapter';
import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { BadRequestException } from '@nestjs/common';
import { ExceptionMessages } from 'src/Common/exceptions/exception.messages';
import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';

@Injectable()
export class RemovePeriphericToComputer {
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

    const newPeriphericList: Types.ObjectId[] = [];
    computer.peripherics.forEach((peripheric) => {
      if (String(peripheric) !== periphericId) {
        newPeriphericList.push(peripheric);
      }
    });

    computer.peripherics = newPeriphericList;
    await computer.save();
  }
}
