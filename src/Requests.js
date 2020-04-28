import axios from 'axios';

class Requests {

 
  
  constructor(){
    //this.backEndURL = "http://localhost:8080/";
    this.backEndURL = "https://gcodeback.herokuapp.com/";
  }
  postPrettyPrint(svg) {

    const result = axios(this.backEndURL+"svgPrettyPrint", {
      method: "post",
      withCredentials: true,
      data:  svg
    })
      .then(svgPrettyText => {

        return svgPrettyText.data;
      });
    return result;
  }

  getSomething() {
    const result = axios({
      method: 'get',
      url: 'https://jm-button-game-server.herokuapp.com/hs',
      withCredentials: true,
      })
      .then(Json => {
        return Json.data;
      });

    return result;
  }

  uploadSVG(data) {
      return axios.post(this.backEndURL+"uploadSVG", data);
  }

}

export default new Requests();
