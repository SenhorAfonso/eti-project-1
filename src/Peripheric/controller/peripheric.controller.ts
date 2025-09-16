import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePeriphericUsecase } from '../usecases/create.peripheric.usecase';
import { DeletePeriphericUsecase } from '../usecases/delete.peripheric.usecase';
import { GetAllPeriphericsUsecase } from '../usecases/get.all.peripheric.usecase';
import { GetSinglePeriphericUsecase } from '../usecases/get.single.peripheric.usecase';
import { UpdatePeriphericUsecase } from '../usecases/update.peripheric.usecase';
import { CreatePeriphericRequest } from './dto/create.peripheric.request';
import { UpdatePeriphericRequest } from './dto/update.peripheric.request';
import { PeriphericMapper } from './dto/peripheric.mapper';

@Controller('peripheric')
export class PeriphericController {
  constructor(
    private readonly createPeriphericUsecase: CreatePeriphericUsecase,
    private readonly getAllPeriphericsUsecase: GetAllPeriphericsUsecase,
    private readonly getSinglePeriphericUsecase: GetSinglePeriphericUsecase,
    private readonly updatePeriphericUsecase: UpdatePeriphericUsecase,
    private readonly deletePeriphericUsecase: DeletePeriphericUsecase,
  ) {}

  @Post()
  async createPeripheric(
    @Body() createPeriphericRequest: CreatePeriphericRequest,
  ) {
    const modelIn = PeriphericMapper.createPeriphericRequestToModelIn(
      createPeriphericRequest,
    );

    return await this.createPeriphericUsecase.execute(modelIn);
  }

  @Get()
  async getAllPeripherics() {
    return this.getAllPeriphericsUsecase.execute();
  }

  @Get('/:id')
  async getSinglePeripheric(@Param('id') id: string) {
    return this.getSinglePeriphericUsecase.execute(id);
  }

  @Patch('/:id')
  async updatePeripheric(
    @Param('id') id: string,
    @Body() updatePeriphericRequest: UpdatePeriphericRequest,
  ) {
    const modelIn =
      PeriphericMapper.updatePeriphericRequestToUpdatePeriphericModelIn(
        updatePeriphericRequest,
      );

    return this.updatePeriphericUsecase.execute(id, modelIn);
  }

  @Delete('/:id')
  async deletePeripheric(@Param('id') id: string) {
    return this.deletePeriphericUsecase.execute(id);
  }
}
