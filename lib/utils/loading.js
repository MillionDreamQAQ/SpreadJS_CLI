const ora = require("ora");

function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n);
  });
}

async function loading(message, fn, ...args) {
  const spinner = ora(message);
  spinner.start();
  try {
    let executeRes = await fn(...args);
    spinner.succeed();
    return executeRes;
  } catch (error) {
    console.log(error);
    if (error.response.data.message.includes("API rate limit exceeded")) {
      spinner.fail("API rate limit exceeded, Please try again later.");
      return null;
    } else {
      spinner.fail("Request fail, Retrying");
      await sleep(5000);
      return loading(message, fn, ...args);
    }
  }
}

module.exports = {
  loading,
};
