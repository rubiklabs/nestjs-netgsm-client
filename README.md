
<p  align="center"><img  src="https://avatars.githubusercontent.com/u/42046972?s=200&v=4"/></p>

<p  align="center">

</p>

<h1  align="center">Nestjs Netgsm Client</h1>

  

<p  align="center"><a  href="https://netgsm.com.tr">Netgsm</a> client for Netgsm.</p>

  

## Features

  

- Sending Sms via Netgsm

  

### Installation

  

**Yarn**

  

```bash

yarn add @rubiklabs/nestjs-netgsm-client

```

  

**NPM**

  

```bash

npm install @rubiklabs/nestjs-netgsm-client --save

```

  

### Getting Started

  

To use Netgsm client we need to register module for example in `app.module.ts`

  

```ts
import  {  Module  }  from  '@nestjs/common';
import  {  NetgsmModule  }  from  '@rubiklabs/nestjs-netgsm-client';

@Module({
	imports:  [
	NetgsmModule.register({
	username:  'username',
	password:  "password,
	header:  "header,
	})
})

export  class  AppModule  {}
```

  

If you are using the `@nestjs/config` package from nest, you can use the `ConfigModule` using the `registerAsync()` function to inject your environment variables like this in your custom module:

  

```ts
import  {  Module  }  from  '@nestjs/common';
import  {  NetgsmModule  }  from  '@rubiklabs/nestjs-netgsm-client';
import  {  ConfigModule,  ConfigService  }  from  '@nestjs/config';

@Module({
	imports:  [
		NetgsmModule.registerAsync({
			imports:  [ConfigModule],
			inject:  [ConfigService],
			useFactory(configService:  ConfigService)  {
				return  {
				isGlobal:  true,
				username: configService.get('netgsm_username'),
				password: configService.get('netgsm_password'),
				header: configService.get('netgsm_header'),
				}
			},
		})
	],
	providers:  [],
	exports:  [],
})
export  class  AppModule  {}
```

  

After registration netgsm connection should be complete and ready to use.

  

Example usage in service.

  

```ts
import { Injectable } from '@nestjs/common';
import { NetgsmModule } from 'nestjs-netgsm-client';

@Injectable()
export  class  ContentService  {
	constructor(private  readonly netgsmService: NetgsmService) {}
	
	async sendSms()  {
		return await this.netgsmService.sendSms('phone_number', 'Hello World!');
	}
}
```

  
  
  

### Roadmap

  

See the [open issues](https://github.com/rubiklabs/nestjs-netgsm-client/issues) for a list of proposed features (and known issues).

  

---

  

### Contributing

  

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### License

Distributed under the MIT License. See `LICENSE` for more information.

### Contact

Halil Safa SAĞLIK - [@_ogeday26_](https://twitter.com/_ogeday26_) - safa@rubiklabs.com
Project Link: [https://github.com/rubiklabs/nestjs-netgsm-client](https://github.com/rubiklabs/nestjs-netgsm-client)


[contributors-shield]: https://img.shields.io/github/contributors/rubiklabs/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/rubiklabs/nestjs-netgsm-client/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rubiklabs/nestjs-netgsm-client.svg?style=for-the-badge
[forks-url]: https://github.com/rubiklabs/nestjs-netgsm-client/network/members
[stars-shield]: https://img.shields.io/github/stars/rubiklabs/nestjs-netgsm-client.svg?style=for-the-badge
[stars-url]: https://github.com/rubiklabs/nestjs-netgsm-client/stargazers
[issues-shield]: https://img.shields.io/github/issues/rubiklabs/nestjs-netgsm-client.svg?style=for-the-badge
[issues-url]: https://github.com/rubiklabs/nestjs-netgsm-client/issues
[license-shield]: https://img.shields.io/github/license/rubiklabs/nestjs-netgsm-client.svg?style=for-the-badge
[license-url]: https://github.com/rubiklabs/nestjs-netgsm-client/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ogeday26

---
### To see all packages developed by Rubiklabs, you can check [here](https://github.com/rubiklabs)