import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

const API_KEY = '12345';
const API_KEY_PROD = 'DERECK_12345';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'production' ? API_KEY : API_KEY_PROD,
    },
  ],
})
export class AppModule {}
