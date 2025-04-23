import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",

});
api.interceptors.request.use((  config  ) => {
  // const token = localStorage.getItem("token")
   const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJib29rX2lkIjoxLCJtZW1iZXJfaWQiOjEsIm5hbWUiOiJwYXdhbiBtaXNocmEiLCJlbWFpbCI6InBhd2FuMTIyMkBnbWFpbC5jb20iLCJtb2JpbGUiOiI5ODE2NzEyMjI3OTkiLCJwYXNzd29yZCI6IiQyYiQxMCRyNklkQmxqbjhXZVdEQWZGb3RHajJ1d0NaQ09xVEpxREhqTUNCUEcvNFhVTy4uc2g4REZqZSIsImNyZWF0ZWRfYXQiOiIyMDI1LTA0LTE5VDA3OjQ2OjA2LjQ2NloiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wNC0xOVQwNzo0NjowNi40NjZaIiwiYm9va3MiOnsiaWQiOjEsInRpdGxlIjoiU29mdHdhcmUgZW5naW5lZXJpbmciLCJhdXRob3IiOiJNYW51IiwicHJpY2UiOjAsImF2YWlsYWJsZSI6ZmFsc2UsInB1Ymxpc2hlcl9pZCI6NCwiY3JlYXRlZF9hdCI6IjIwMjUtMDQtMTdUMDk6NDM6MjMuNTMyWiIsInVwZGF0ZWRfYXQiOiIyMDI1LTA0LTE3VDA5OjQzOjIzLjUzMloifX0sImlhdCI6MTc0NTM5Njg1MCwiZXhwIjoxNzQ2MDAxNjUwfQ.AfWPPgMdetszF-q8D7FPmxapKPleI4rLOGvzfYt5Bz4";
   config.headers.Authorization = `Bearer ${token}`;
   config.headers['content-Type'] =  'application/json'
   return config;
})

export {api};