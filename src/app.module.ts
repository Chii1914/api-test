import { Module } from '@nestjs/common';
import { VtuberModule } from './vtuber/vtuber.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    VtuberModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'vtuber',
      autoLoadEntities: true, //Carga las entidades de forma automática
      synchronize: true, //CUIDADO CON ESTO EN PRODUCCIÓN
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
