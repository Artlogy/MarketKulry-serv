import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppsMeta } from 'apps/app.meta';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'prod'
          ? '.production.env'
          : process.env.NODE_ENV === 'stage'
          ? '.stage.env'
          : '.dev.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || '',
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      logging: process.env.NODE_ENV !== 'production',
      maxQueryExecutionTime: Number(process.env.DB_QUERY_EXECUTION_TIME),
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
      entities: [...AppsMeta.entities],
    }),
    ...AppsMeta.module,
  ],
})
export class AppModule {}
