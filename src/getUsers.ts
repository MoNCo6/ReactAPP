import axios from "axios";

export async function getUsers(page = 0){
    const options = {
        method: 'GET',
        url: 'https://dummyapi.io/data/v1/user?page=' + page,
        headers: {'app-id': '62d0263275bccd5e5bce88e8'}
      };
      return axios.request(options);
};

export async function getUser(id: string){
  const options = {
      method: 'GET',
      url: 'https://dummyapi.io/data/v1/user/' + id,
      headers: {'app-id': '62d0263275bccd5e5bce88e8'}
    };
    return axios.request(options);
};
