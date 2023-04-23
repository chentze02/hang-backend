import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Destination } from './destination.entity';

@Injectable()
export class DestinationService {
  constructor(
    @InjectRepository(Destination)
    private readonly destinationRepository: Repository<Destination>,
  ) {}

  async findAll(): Promise<Destination[]> {
    return await this.destinationRepository.find();
  }

  async findOne(id: number): Promise<Destination> {
    return await this.destinationRepository.findOne(id);
  }

  async create(destination: Destination): Promise<Destination> {
    return await this.destinationRepository.save(destination);
  }

  async update(id: number, destination: Destination): Promise<Destination> {
    const updatedDestination = await this.destinationRepository.findOne(id);
    if (updatedDestination) {
      Object.assign(updatedDestination, destination);
      return await this.destinationRepository.save(updatedDestination);
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.destinationRepository.delete(id);
  }
}
