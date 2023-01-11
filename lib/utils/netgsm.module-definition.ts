import { ConfigurableModuleBuilder } from '@nestjs/common';
import { NetgsmModuleOptions } from './netgsm.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<NetgsmModuleOptions>().build();
