class HttpRequest {
  async Get(urlApi, param = '') {
    try {
      let url = new URL(`http://desafioonline.webmotors.com.br/api/OnlineChallenge${urlApi}`)
      
      url.search = new URLSearchParams({
        ...param
      });

      const response = await fetch(url).then(response => response.json())
      .then(data => {
        return data
      });

      return response;
    } catch (error) {
      console.log('err', error)
    }
  }
}

var request = new HttpRequest();
export const Request = async (urlApi, param = {}) => {
    return await request.Get(urlApi, param);
};
