import { Injectable } from '@angular/core';

import { EnviromentSetting } from './EnviromentSetting.model';

@Injectable()
export class Settings {
	public env: any[] = [];
	constructor() { }

	static get(): EnviromentSetting {
		let prod = <EnviromentSetting>({
			baseUrl: 'http://mastersmx.com/api/',
			appKey: 'a29XbHNZZWdwTE9Jb0pwcGdwJTJCRHFaeHNoWjZiaUh1aGgyVjliNGFLaEdtQ25tYWhuR3lGbnB5ZmhLeWRkbjFyaG5sOG5JaGtnbSUyQkhvNktiazNpQW5wdDZsS1NDb0t1dGlKdWNiNEtsZFglMkJHWko1JTJGaTU2VXNZS2dxMnclM0Q=',
			appSecret: '16882099673915999329',
			appName: 'mastersmx',
			mixpanel_id: '',
			mixpanel_token: '',
			mixpannel_ApiSecret: ''
		});

		let dev = <EnviromentSetting>({
			//baseUrl: 'http://192.168.1.140/mastersmx/api/',
			//baseUrl: 'http://192.168.1.149/mastersmx/api/',
			baseUrl: 'http://192.168.1.128/mastersmx/api/',
			appKey: 'a29XbHNZZWdwTE9Jb0pwcGdwJTJCRHFaeHNoWjZiaUh1aGgyVjliNGFLaEdtQ25tYWhuR3lGbnB5ZmhLeWRkbjFyaG5sOG5JaGtnbSUyQkhvNktiazNpQW5wdDZsS1NDb0t1dGlKdWNiNEtsZFglMkJHWko1JTJGaTU2VXNZS2dxMnclM0Q=',
			appSecret: '16882099673915999329',
			appName: 'mastersmx',
			mixpanel_id: '',
			mixpanel_token: '',
			mixpannel_ApiSecret: ''
		});

		let env: any[] = [];

		//env['prod'] = prod;
		env['dev'] = dev;
		return env['prod'];
	}
}
