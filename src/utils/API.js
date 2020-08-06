import axios from "axios";

const results = 20;

export default {
  getUsers: function () {
    return axios.get(`https://randomuser.me/api/?results=${results}&nat=us`);
  },
};
