import { PeriphericPersistenceAdapter } from 'src/Peripheric/persistence/peripheric.persistence.adapter';
import { ComputerPersistenceAdapter } from '../persistence/computer.persistence.adapter';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ExceptionMessages } from 'src/Common/exceptions/exception.messages';

@Injectable()
export class DeleteComputerUsecase {
  constructor(
    private readonly computerPersistenceAdapter: ComputerPersistenceAdapter,
    private readonly periphericPersistenceAdapter: PeriphericPersistenceAdapter,
  ) {}

  async execute(id: string) {
    const computer = await this.computerPersistenceAdapter.findById(id);

    if (!computer) {
      throw new NotFoundException(ExceptionMessages.COMPUTER.NOT_FOUND);
    }

    const { peripherics } = computer;

    if (peripherics.length !== 0) {
      await Promise.all(
        peripherics.map(async (periphericId) => {
          return await this.periphericPersistenceAdapter.delete(
            String(periphericId),
          );
        }),
      );
    }

    await this.computerPersistenceAdapter.delete(id);
  }
}
