import http from "../../utility_helper/HttpService";
import { config } from "../../utility_helper/HelperConstant";

const { API_BASE_URL } = config;

class AuthService {
  static login = credential => {
    return http.post(API_BASE_URL + "/Login/Login", credential);
  };

  static loginAsync = async credential => {
    try {
      const response = await http.post(
        API_BASE_URL + "/Login/Login",
        credential
      );
      //console.log(response);
      return response;
    } catch (error) {
      //console.log("catch", error.response);
      let err = error.response;
      throw err;
    }
  };

  static forgetPassword = user => {
    return http.post(API_BASE_URL + "/Login/ForgetPassword", user);
  };
}

export default AuthService;
