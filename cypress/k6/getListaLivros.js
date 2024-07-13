import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: "20s", target: 1 }, 
    { duration: "30s", target: 5 }, 
    { duration: "40s", target: 15 }, 
    { duration: "20s", target: 0 }, 
  ]
}

export default function () {
  // const accessToken = "849a82aceb0ddc650f09750c0bef73ede57464655e48d58828e1faa53a3f6ad6"; 
  http.get('https://simple-books-api.glitch.me/books/', {
    
      'Authorization': `Bearer 849a82aceb0ddc650f09750c0bef73ede57464655e48d58828e1faa53a3f6ad6`,
      'Content-Type': 'application/json',
      });
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

//60 usuários - 892 falhas

