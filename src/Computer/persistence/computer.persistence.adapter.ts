import { InjectModel } from '@nestjs/mongoose';
import { Computer, ComputerDocument } from './schemas/computer.schema';
import { Model } from 'mongoose';
import { CreateComputerModelIn } from '../domain/models/in/create.computer.model.in';
import { UpdateComputerModelIn } from '../domain/models/in/update.computer.model.in';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ComputerPersistenceAdapter {
  constructor(
    @InjectModel(Computer.name) private readonly computerModel: Model<Computer>,
  ) {}

  async create(computer: CreateComputerModelIn): Promise<ComputerDocument> {
    return await this.computerModel.create(computer);
  }

  async findAll(): Promise<ComputerDocument[]> {
    return await this.computerModel.find();
  }

  async findById(computerId: string): Promise<ComputerDocument | null> {
    return await this.computerModel.findById({ _id: computerId });
  }

  async update(
    computerId: string,
    newData: UpdateComputerModelIn,
  ): Promise<ComputerDocument | null> {
    return await this.computerModel.findByIdAndUpdate(computerId, newData, {
      new: true,
    });
  }

  async delete(computerId: string): Promise<void> {
    await this.computerModel.findByIdAndDelete({ _id: computerId });
  }
}
