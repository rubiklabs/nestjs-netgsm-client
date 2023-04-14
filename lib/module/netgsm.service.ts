import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import {
  IResponseCode,
  MODULE_OPTIONS_TOKEN,
  NetgsmModuleOptions,
  responses,
} from '../utils';

@Injectable()
export class NetgsmService {
  private readonly url = 'https://api.netgsm.com.tr/sms/send/xml';

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN) private options: NetgsmModuleOptions,
    private readonly httpService: HttpService,
  ) { }

  public async sendSms(phoneNumber: string, message: string) {
    try {
      const { data }: { data: string } = await firstValueFrom(
        this.httpService.request({
          method: 'POST',
          url: this.options.url || this.url,
          headers: {
            'Content-Type': 'text/xml',
          },
          data: `<?xml version="1.0" encoding="UTF-8"?>
          <mainbody>
          <header>
          <company dil="TR">Netgsm</company>
          <usercode>${this.options.username}</usercode>
          <password>${this.options.password}</password>
          <type>1:n</type>
          <msgheader>${this.options.header}</msgheader>
          </header>
          <body>
          <msg>
          <![CDATA[${message}]]>
          </msg>
          <no>${phoneNumber}</no>
          </body>
          </mainbody>`,
        }),
      );

      const code: IResponseCode['data'] = data.toString().slice(
        0,
        2,
      ) as unknown as IResponseCode['data'];

      return {
        code: code,
        message:
          code === '00'
            ? responses[code] + ' Mesaj Gönderim Kodu: ' + data.toString().slice(3)
            : responses[code],
      };
    } catch (e: any) {
      return {
        code: '500',
        message: e || e.stack,
      };
    }
  }
}
