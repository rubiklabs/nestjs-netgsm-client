import { HttpModule } from '@nestjs/axios';
import { Global, Module } from '@nestjs/common';

import { ConfigurableModuleClass } from '../utils';

import { NetgsmService } from './netgsm.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [NetgsmService],
  exports: [NetgsmService],
})
export class NetgsmModule extends ConfigurableModuleClass {}
