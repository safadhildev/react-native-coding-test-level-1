export default class DataService {
  static DOMAIN = 'https://pokeapi.co/api/v2/';

  static async getData(url, params, body) {
    const config = {
      headers: {
        Authorization: `Bearer ${await getUserToken()}`,
      },
      params,
      data: body,
    };

    const _url = this.DOMAIN + url;
    return fetch(_url, {
      method: 'GET',
      ...config,
    });
  }

  static async postData(url, data, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${await getUserToken()}`,
      },
      params,
    };
    const _url = this.DOMAIN + url;
    return Instance.post(_url, data, config);
  }

  static async updateData(url, data) {
    console.log(url, data);
    const headers = {
      'Content-type': 'application/json',
      Authorization: `Bearer ${await getUserToken()}`,
    };
    const _url = this.DOMAIN + url;
    return fetch(_url, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers,
    });
  }

  static async deleteData(url) {
    const headers = {
      'Content-type': 'application/json',
      Authorization: `Bearer ${await getUserToken()}`,
    };
    const _url = this.DOMAIN + url;
    return fetch(_url, {
      method: 'DELETE',
      headers,
    });
  }
}
