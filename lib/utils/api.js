const axios = require("axios");

axios.defaults.headers.common["Authorization"] =
  "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";

axios.interceptors.response.use((res) => {
  return res.data;
});

async function getRepo() {
  return axios.get(
    "https://api.github.com/repos/MillionDreamQAQ/SpreadJS_Templates"
  );
}

async function getTagsByRepo(repo) {
  return axios.get(`https://api.github.com/repos/MillionDreamQAQ/${repo}/tags`);
}

module.exports = {
  getRepo,
  getTagsByRepo,
};
