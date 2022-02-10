// const devBaseURL = "http://101.132.147.164:3000/";
// const devBaseURL = "http://localhost:4003/";
const devBaseURL = "http://localhost:6002/";
const proBaseURL = "http://101.132.147.164:3000/";

export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;
