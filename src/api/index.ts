import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",

});
api.interceptors.request.use((  config  ) => {
  // const token = localStorage.getItem("token")
   const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJib29rX2lkIjoyOSwibWVtYmVyX2lkIjoxLCJuYW1lIjoicGF3YW5fbWlzaHJhIiwiZW1haWwiOiJwYXdhbjEyMjJAZ21haWwuY29tIiwibW9iaWxlIjoiOTg0Nzc2NjI2MDAiLCJwYXNzd29yZCI6IiQyYiQxMCQzajRJblVOZGV4Q3lLN0pDTDNuNEllbzY5alYvMHV3MWNtNnZMWDM4UUJ6QThkaEVDQ2V1UyIsImNyZWF0ZWRfYXQiOiIyMDI1LTAyLTIwVDA3OjQxOjE0LjIxNloiLCJ1cGRhdGVkX2F0IjoiMjAyNS0wMi0yMFQwNzo0MToxNC4yMTZaIiwiYm9va3MiOnsiaWQiOjI5LCJ0aXRsZSI6ImNvbXB1dGVyIGFyY2hoaXRlY3R1cmUiLCJhdXRob3IiOiJva2F5eXkiLCJwcmljZSI6MCwiYXZhaWxhYmxlIjpmYWxzZSwicHVibGlzaGVyX2lkIjo0LCJjcmVhdGVkX2F0IjoiMjAyNS0wMi0xOVQxODo1Mjo0MS40ODFaIiwidXBkYXRlZF9hdCI6IjIwMjUtMDItMTlUMTg6NTI6NDEuNDgxWiJ9fSwiaWF0IjoxNzQxMDczNDQ2LCJleHAiOjE3NDE2NzgyNDZ9.PN-gWUZS3xwcAEfpAjGivM1gr5eM_w-RK3nB9cMWRMM";
   config.headers.Authorization = `Bearer ${token}`;
   config.headers['content-Type'] =  'application/json'
   return config;
})

export {api};