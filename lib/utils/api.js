const axios = require("axios");

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

async function sendTemplateMsg(measurement_id, api_secret, tempName) {
  return axios.post(
    `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`,
    {
      events: [
        {
          name: tempName,
          params: {},
        },
      ],
    }
  );
}

module.exports = {
  getRepo,
  getTagsByRepo,
  sendTemplateMsg
};
