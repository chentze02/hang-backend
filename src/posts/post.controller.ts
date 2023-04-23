import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DestinationService } from './destination.service';
import { Destination } from './destination.entity';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  async findAll(): Promise<Destination[]> {
    return this.destinationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Destination> {
    return this.destinationService.findOne(id);
  }

  @Post()
  async create(@Body() destination: Destination): Promise<Destination> {
    return this.destinationService.create(destination);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() destination: Destination,
  ): Promise<Destination> {
    return this.destinationService.update(id, destination);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.destinationService.delete(id);
  }
}
