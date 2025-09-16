import { CreateComputerModelIn } from 'src/Computer/domain/models/in/create.computer.model.in';
import { CreateComputerRequest } from './create.computer.request';
import { UpdateComputerRequest } from './update.computer.request';
import { UpdateComputerModelIn } from 'src/Computer/domain/models/in/update.computer.model.in';

export class ComputerMapper {
  static createComputerRequestToModelIn(
    request: CreateComputerRequest,
  ): CreateComputerModelIn {
    return new CreateComputerModelIn(
      request.name,
      request.color,
      new Date(request.fabricationDate),
    );
  }

  static updateComputerRequestToUpdateComputerModelIn(
    request: UpdateComputerRequest,
  ): UpdateComputerModelIn {
    return new UpdateComputerModelIn(
      request.name,
      request.color,
      new Date(request.fabricationDate),
    );
  }
}
