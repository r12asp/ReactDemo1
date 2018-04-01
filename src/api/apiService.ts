import {INameValue, IConfig} from './../models/';
import axios from 'axios';
import * as _config from './../config/appUrlConfig'
import { resolve } from 'path';



export class ApiService {

	constructor() {
		;
	}

    get(apiRoute: string, params?: INameValue[]): Promise<{}>{
        let urlParams = this.getUrlParams(params);
		let url = this.getFullUrl(_config.WebServiceUrl, apiRoute) + urlParams;


        return new Promise((resolve, reject) => {

            axios.get(url)
            .then(response => resolve(response.data) )
            .catch((error) => {
                console.log('ApiService.Get Error', error);
            });
        });    

    }

    getFullUrl(apiUrl, apiRoute) : string {
		return apiUrl + apiRoute;
	}

	getUrlParams(params: INameValue[] = []): string {
		let urlParams = "";
		params.forEach(element => {
			if (urlParams !== "") {
				urlParams += "&";
			}
			else {
				urlParams += "?";
			}

			urlParams += element.name + "=" + element.value;
		});
		return urlParams;
	}
}