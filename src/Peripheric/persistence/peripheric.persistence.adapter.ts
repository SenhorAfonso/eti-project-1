import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePeriphericModelIn } from '../domain/models/in/create.peripheric.model.in';
import { UpdatePeriphericModelIn } from '../domain/models/in/update.peripheric.model.in';
import { Peripheric, PeriphericDocument } from './schemas/peripheric.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PeriphericPersistenceAdapter {
  constructor(
    @InjectModel(Peripheric.name)
    private readonly computerModel: Model<Peripheric>,
  ) {}

  async create(computer: CreatePeriphericModelIn): Promise<PeriphericDocument> {
    return await this.computerModel.create(computer);
  }

  async findAll(): Promise<PeriphericDocument[]> {
    return await this.computerModel.find();
  }

  async findById(id: string): Promise<PeriphericDocument | null> {
    return await this.computerModel.findById({ _id: id });
  }

  async update(
    id: string,
    newData: UpdatePeriphericModelIn,
  ): Promise<PeriphericDocument | null> {
    return await this.computerModel.findByIdAndUpdate(id, newData, {
      new: true,
    });
  }

  async delete(id: string): Promise<void> {
    await this.computerModel.findByIdAndDelete({ _id: id });
  }
}
