import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/users.controller';
import { CustomerController } from './controllers/customer.controller';
import { CustomersService } from './services/customer.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [UserService, CustomersService],
  controllers: [UsersController, CustomerController],
})
export class UsersModule {}
