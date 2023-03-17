const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://localhost:3000",
});
// export default axios.create({
//   baseURL: "https://rose-funny-greyhound.cyclic.app",
// });
