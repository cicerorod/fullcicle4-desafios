import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { categoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    categoriesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
