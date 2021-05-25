import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apiKey: string,
    private configService: ConfigService,
  ) {}
  getHello(): string {
    const api = this.configService.get('DATABASE');
    console.log(api);
    return `Hello World! ${this.apiKey}`;
  }
}
