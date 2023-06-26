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
    const tagList = await loading("Loading list...", getTagsByRepo, repo);
    if (!tagList) {
      return null;
    }
    const tags = tagList.map((item) => item.name);
    let { tag } = await new inquirer.prompt([
      {
        name: "tag",
        type: "list",
        message: "Please choose a version",
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
      path.resolve(process.cwd(), this.targetDir),
      { headers: { "PRIVATE-TOKEN": "token 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" } }
    );
  }
}

module.exports = Creator;
