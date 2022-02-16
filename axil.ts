export class axil {
  baseURL: string;
  headers?: Headers;

  constructor(baseURL: string, headers?: Headers) {
    this.baseURL = baseURL;
    this.headers = headers;
  }

  async get(urlEndPoint: string) {
    const res = await fetch(this.baseURL + urlEndPoint, {
      method: "GET",
      headers: this.headers,
    });
    if(res.status >= 400){
      throw res;
    }
    return await res.json();
  }

  async post(urlEndPoint: string, body: unknown) {
    const res = await fetch(this.baseURL + urlEndPoint, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(body),
    });
    if(res.status >= 400){
      throw res;
    }
    return await res.json();
  }
}
