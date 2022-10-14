import axios, { Axios, Method, AxiosError } from "axios";

class ButterCMSApi {
  requestInstance: Axios;
  ApiUrl: string;
  token: string;

  constructor(){
    this.requestInstance = axios.create()
  }

  setApiUrl(ApiUrl: string, token: string){
    this.ApiUrl = ApiUrl;
    this.token = token;
    this.requestInstance.defaults.baseURL = this.ApiUrl;
  }

  async _request(url: string, method:string, data?: Record<string, any>){

    let _url: any;

    _url = url + `?auth_token=${this.token}`;

    try {
      const res = await this.requestInstance.request({
        url: _url,
        method,
        data
      })

      if (res.data) {
        return res.data;
      }
      return Promise.reject(res.data);
    } catch(err: any){
      if (err.response) {
        return Promise.reject(err.response.data);
      }
      return Promise.reject(err);
    }
  }


  getPosts(){
    return this._request('/', 'get');
  }

  getPost(postUrl: string){
    return this._request(`/${postUrl}`, 'get');
  }
}

export default new ButterCMSApi();