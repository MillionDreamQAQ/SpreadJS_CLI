const axios = require("axios");
const { v4: uuid_v4 } = require("uuid");

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
  const sessionID = uuid_v4().replace(/-/g, "");
  return axios.post(
    `https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`,
    {
      client_id: "x",
      events: [
        {
          name: "SpreadJS_CLI_" + tempName,
          params: {
            engagement_time_msec: "100",
            session_id: sessionID,
          },
        },
      ],
    }
  );
}

module.exports = {
  getRepo,
  getTagsByRepo,
  sendTemplateMsg,
};
