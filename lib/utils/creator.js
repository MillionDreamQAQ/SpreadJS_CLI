const downloadGitRepo = require("download-git-repo");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");
const { loading } = require("./loading");
const { getRepo, getTagsByRepo } = require("./api");

class Creator {
  constructor(projectName, targetDir) {
    this.projectName = projectName;
    this.targetDir = targetDir;
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  async create() {
    // const repoName = await this.getRepoInfo();
    const repoName = "SpreadJS_Templates";
    const tagInfo = await this.getTagInfo(repoName);
    if (!tagInfo) {
      console.log(
        `\r\nCreated project ${chalk.cyan(this.projectName)} failed.`
      );
      return;
    }
    await this.download(repoName, tagInfo);

    console.log(
      `\r\nSuccessfully created project ${chalk.cyan(this.projectName)}`
    );
    console.log(`\r\n  cd ${chalk.cyan(this.projectName)} \r\n`);
    console.log("  npm install\r\n");
    console.log("  npm run start\r\n");
  }

  // async getRepoInfo() {
  //   let repoList = await loading("Loading template list...", getRepo, null);
  //   if (!Array.isArray(repoList)) {
  //     repoList = [].concat(repoList);
  //   }
  //   const repos = repoList.map((item) => item.name);
  //   let { repo } = await new inquirer.prompt([
  //     {
  //       name: "repo",
  //       type: "list",
  //       message: "Please choose a template",
  //       choices: repos,
  //     },
  //   ]);
  //   return repo;
  // }

  async getTagInfo(repo) {
    // const tagList = await loading("Loading list...", getTagsByRepo, repo);
    // if (!tagList) {
    //   return null;
    // }
    // let tags = tagList.map((item) => item.name);
    // console.log("tags", tags);
    let tags = [
      "PureJS-with-Designer",
      "Vue3",
      "Vue3-with-Designer",
      "Vue2",
      "Vue2-with-Designer",
      "React",
      "React-with-Designer",
    ];
    let { tag } = await new inquirer.prompt([
      {
        name: "tag",
        type: "list",
        message: "Please choose which template for your first SpreadJS demo?",
        choices: tags,
      },
    ]);
    return tag;
  }

  async download(repo, tag) {
    const templateUrl = `MillionDreamQAQ/${repo}${tag ? "#" + tag : ""}`;
    await loading(
      "Downloading template, Please wait...",
      this.downloadGitRepo,
      templateUrl,
      path.resolve(process.cwd(), this.targetDir)
    );
  }
}

module.exports = Creator;
