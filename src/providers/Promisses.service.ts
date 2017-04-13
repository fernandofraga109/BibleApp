import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PromissesModel } from '../pages/promisses/promisses.model';
import { Settings } from '../app/Settings';
import { EnviromentSetting } from '../app/EnviromentSetting.model';

@Injectable()
export class PromessasService{
  //private url = 'http://172.20.10.3/clientes/fullpromo/api/vagas/todas';
  private url = 'versos/';
  private settings: EnviromentSetting;
  public vagas: PromissesModel[];
  constructor (private http: Http, public platform: Platform){
    this.settings = Settings.get();
    this.getRandom();
  }

  getRandom(){
    let headers_param = new Headers();
    headers_param.append('app-key', this.settings.appKey);
		headers_param.append('app-secret', this.settings.appSecret);
    let url = this.settings.baseUrl+this.url+"aleatorio/";
    //console.log("URL FINAL GETALL ", url);
    let options = new RequestOptions({ headers: headers_param });
    return this.http.get(url, options).map(PromessasService.mapVagas).catch(PromessasService.handleError);
  }

  static mapVagas(response: Response){
    let parse = response.json();
    console.log("PARSE NOVO PROMESSAS", parse.promessa);
    return parse.promessa;
  }
  //static mapVagas(response: Response): any[] { return response.json() }
  static toProm(r: any): any[]{
    let parse = r.vagas;
    //console.log("VAGA-toProm", parse);
    let listaProm: PromissesModel[] = [];
    for (let la of parse.promessa) {
      let prom = <PromissesModel>({
        prom_id: la.prom_id,
        prom_texto: la.prom_texto,
        prom_onde: la.prom_onde,
      });
      listaProm.push(prom);
    }
    return listaProm;
  }

  likeProm(_prom_id){
    let headers_param = new Headers();
    headers_param.append('app-key', this.settings.appKey);
		headers_param.append('app-secret', this.settings.appSecret);
    let url = this.settings.baseUrl+"versos/curtir";
    let options = new RequestOptions({ headers: headers_param });
    let body = { "id":_prom_id  };

  console.log("--------");
    console.log("VAGA para like", _prom_id);
    console.log("body para like", body);
    console.log("url para like", url);
  console.log("--------");

    return this.http.post(url, body, options).map(ret => {
      console.log("LIKE PROMESSA",ret);
      return ret;
    }).catch(PromessasService.handleError);
  }

  static handleError (error: any) {
    //let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //console.error("ERROOOW", errMsg);
    return Observable.throw(error);
  }
}
