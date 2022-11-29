export default class DataService {
  static async getData(url) {
    const headers = {
      'Content-type': 'application/json',
    };

    return fetch(url, {
      method: 'GET',
      headers,
    });
  }
}
