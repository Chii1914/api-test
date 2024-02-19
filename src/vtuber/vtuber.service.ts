import { Injectable } from '@nestjs/common';
import { CreateVtuberDto } from './dto/create-vtuber.dto';
import { UpdateVtuberDto } from './dto/update-vtuber.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vtuber } from './entities/vtuber.entity';

@Injectable()
export class VtuberService {

  constructor(
    @InjectRepository(Vtuber)                   //Se accede a todos los métodos del repositorio
    private vtuberRepository: Repository<Vtuber>
  ) { }

  async create(createVtuberDto: CreateVtuberDto) {
    try{
      const vtuber = this.vtuberRepository.create(createVtuberDto);
      return await this.vtuberRepository.save(vtuber);  
    }catch(error){
      console.log(error);
    }
  }

  async findAll() {
    return await this.vtuberRepository.find();
  }

  async findOne(id: number) {
    return await this.vtuberRepository.findOneBy({id});
  }

  async update(id: number, updateVtuberDto: UpdateVtuberDto) {
    return `This action updates a #${id} vtuber`;
  }

  async remove(id: number) {
    return await this.vtuberRepository.softDelete({id}); //SE LE PASA EL ID Se va al elemento, y le pone una fecha al elemento, luego cuando listemos los datos, no se devuelven 
    //return await this.vtuberRepository.delete({id}); Se le pasa la instancia del objeto mwajaja
  }
}
