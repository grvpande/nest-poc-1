import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const cookeSession = require('cookie-session');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(cookeSession({
        keys: ['nhaDJeyFED4fd']
    }));
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );
    await app.listen(9000);
}
bootstrap();
