import { CreatePeriphericRequest } from './create.peripheric.request';
import { UpdatePeriphericRequest } from './update.peripheric.request';
import { CreatePeriphericModelIn } from 'src/Peripheric/domain/models/in/create.peripheric.model.in';
import { UpdatePeriphericModelIn } from 'src/Peripheric/domain/models/in/update.peripheric.model.in';

export class PeriphericMapper {
  static createPeriphericRequestToModelIn(
    request: CreatePeriphericRequest,
  ): CreatePeriphericModelIn {
    return new CreatePeriphericModelIn(request.name);
  }

  static updatePeriphericRequestToUpdatePeriphericModelIn(
    request: UpdatePeriphericRequest,
  ): UpdatePeriphericModelIn {
    return new UpdatePeriphericModelIn(request.name);
  }
}
