import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vtuber } from './entities/vtuber.entity';
import { MailerService } from '../mailer/mailer.service';
import { CreateVtuberDto } from './dto/create-vtuber.dto';
import { UpdateVtuberDto } from './dto/update-vtuber.dto';

@Injectable()
export class VtuberService {

  constructor(
    @InjectRepository(Vtuber) private vtuberRepository: Repository<Vtuber>,
    private mailerService: MailerService,
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
    return await this.vtuberRepository.update(id, updateVtuberDto);
  }

  async remove(id: number) {
    return await this.vtuberRepository.softDelete({id}); //SE LE PASA EL ID Se va al elemento, y le pone una fecha al elemento, luego cuando listemos los datos, no se devuelven 
    //return await this.vtuberRepository.delete({id}); Se le pasa la instancia del objeto mwajaja
  }

  async sendWelcomeEmail(email: string){
    await this.mailerService.sendMail(email, 'Bienvenido', 'Bienvenido a la plataforma');
  }
  
  
  //@Post()
  //async sendMail(@Body () emailDto: EmailDto) {
  //  await this.mailerService.sendMail(emailDto.to, emailDto.subject, emailDto.text, emailDto.html);
  //  return {message: 'Email enviado'};
  //}

  


}

