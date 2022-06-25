import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swagger_config = new DocumentBuilder()
    .setTitle('Artlogy MaketKurly API Server')
    .setDescription(
      '장현욱(아트로지)의 개인 포트폴리오 서버 API입니다.\n 마켓컬리를 모작합니다.\n',
    )
    .setVersion('1.0')
    .addTag('[Artlogy]MaketKurly')
    .build();

  const swagger_document = SwaggerModule.createDocument(app, swagger_config);
  SwaggerModule.setup('/swagger/api', app, swagger_document);
  app.useGlobalPipes(new ValidationPipe({ whitelist: false }));

  await app.listen(process.env.PORT);
}
bootstrap();
