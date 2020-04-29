import axios from 'axios';
/**
 *A class holding requests to the back end
 *
 * @class Requests
 */
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

  uploadSVG(data) {
      return axios.post(this.backEndURL+"uploadSVG", data);
  }

}

export default new Requests();
