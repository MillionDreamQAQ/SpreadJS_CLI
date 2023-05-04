const axios = require("axios");

axios.interceptors.response.use((res) => {
  return res.data;
});

async function getRepo() {
  return axios.get(
    "https://api.github.com/repos/MillionDreamQAQ/SpreadJS_PureJS_Template"
  );
}

async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/MillionDreamQAQ/${repo}/tags`);
}

module.exports = {
  getRepo,
  getTagsByRepo,
};