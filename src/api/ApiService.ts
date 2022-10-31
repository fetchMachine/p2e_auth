import axios from "axios";

import { Feedback } from "../models/feedback";
import { UserLogInCredentials } from "../models/userLogInCredentials";
import { UserRegistrationCredentials } from "../models/userRegistrationCredentials";

export class ApiService {
  async userLogin(userCredentials: UserLogInCredentials) {
    return axios.post(`${process.env.REACT_APP_BASE_URL}api/login/`, userCredentials)
      .then(res => {

        const dataUser = res.data;

        return dataUser
      })
  }

  async userRegistration(userRegistrationCredentials: UserRegistrationCredentials) {
    axios.post(`${process.env.REACT_APP_BASE_URL}api/register/`, userRegistrationCredentials)
      .then(res => {
        console.log(res.data);
        const actionMessage = res.status===201
          ? "Регистрация прошла успешно"
          : "Во время регистрации произошла ошибка";

        alert(actionMessage);
      })
      
  }

  saveFeedback(feedBack: Feedback) {
    axios.post(`${process.env.REACT_APP_BASE_URL}api/feedback/`, feedBack)
      .then((res) => alert("Отзыв принят"));

  }

  getFeedbacks() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}api/feedback/`)
      .then((res) => { return res.data; });
  }
}