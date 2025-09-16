import { Module } from '@nestjs/common';
import { ComputerModule } from './Computer/computer.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PeriphericModule } from './Peripheric/peripheric.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cs: ConfigService) => ({
        uri: cs.get<string>('MONGODB_URI'),
      }),
    }),
    ComputerModule,
    PeriphericModule,
  ],
})
export class AppModule {}
