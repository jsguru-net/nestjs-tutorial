import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Liquid } from 'liquidjs';

/* Express + EJS */
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  // serve static assets
  // node_modules\@nestjs\platform-express\interfaces\serve-static-options.interface.d.ts
  app.useStaticAssets(join(__dirname, '..', 'public'), {});
  // view engine
  app.engine('liquid', new Liquid().express());
  // view directory
  app.setBaseViewsDir(join(__dirname, '..', 'public', 'themes', 'default'));
  app.set('view engine', 'liquid');
  app.setLocal('ASSET_HOST', 'http://localhost:3000');

  // run app
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
