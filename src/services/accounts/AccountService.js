import http from "../../utility_helper/HttpService";
import { config, getHeaders } from "../../utility_helper/HelperConstant";

const { API_BASE_URL } = config;

class AccountService {
  static getTransactionPagination = async (
    pageNumber,
    pageSize,
    searchObject
  ) => {
    const {
      fromDate,
      toDate,
      transactionType,
      PropertyName,
      Desc
    } = searchObject;

    try {
      const response = await http.get(
        API_BASE_URL + "/AccountTransactions/GetWithPagination",
        {
          headers: getHeaders(),
          params: {
            pageNumber,
            pageSize,
            fromDate,
            toDate,
            transactionType,
            PropertyName,
            Desc
          }
        }
      );
      //console.log(response);
      return response;
    } catch (error) {
      //console.log("catch", error.response);
      let err = error.response;
      throw err;
    }
  };

  static getAccountBalance = async () => {
    try {
      const response = await http.get(
        API_BASE_URL + "/AccountTransactions/GetAccountBalance",
        {
          headers: getHeaders()
        }
      );
      //console.log(response);
      return response;
    } catch (error) {
      //console.log("catch", error.response);
      let err = error.response;
      throw err;
    }
  };

  static postForDeposit = async deposit => {
    try {
      const response = await http.post(
        API_BASE_URL + "/AccountTransactions/PostForDeposit",
        deposit,
        {
          headers: getHeaders()
        }
      );
      return response;
    } catch (error) {
      let err = error.response;
      throw err;
    }
  };

  static postForWithdrawal = async withdrawal => {
    try {
      const response = await http.post(
        API_BASE_URL + "/AccountTransactions/PostForWithdrawal",
        withdrawal,
        {
          headers: getHeaders()
        }
      );
      return response;
    } catch (error) {
      let err = error.response;
      throw err;
    }
  };

  static postForTransfer = async transfer => {
    try {
      const response = await http.post(
        API_BASE_URL + "/AccountTransactions/PostForTransfer",
        transfer,
        {
          headers: getHeaders()
        }
      );
      return response;
    } catch (error) {
      let err = error.response;
      throw err;
    }
  };
}

export default AccountService;
