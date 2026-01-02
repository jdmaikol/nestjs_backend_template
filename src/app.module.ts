import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [],
      synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
      autoLoadEntities: Boolean(process.env.TYPEORM_AUTOLOADENTITIES),
      ssl: Boolean(process.env.TYPEORM_SSL),
    }),
    SeedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
