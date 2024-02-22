import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { VtuberModule } from './vtuber/vtuber.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
// Removed MailerService import since it's not needed here
import { MailerModule } from './mailer/mailer.module';
import { DockModule } from './dock/dock.module';

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
      autoLoadEntities: true, // Automatically loads entities
      synchronize: true, // BE CAREFUL WITH THIS IN PRODUCTION
    }),
    MailerModule, // MailerModule imported here is enough
    DockModule,
  ],
  controllers: [],
  providers: [], // Removed MailerService from here
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: '/a/vtuber', method: RequestMethod.GET });
  }
}
