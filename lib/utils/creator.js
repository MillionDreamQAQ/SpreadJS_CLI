const downloadGitRepo = require("download-git-repo");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");
const { loading } = require("./loading");
const { getRepo, getTagsByRepo } = require("./api");

class Creator {
  constructor(projectName, targetDir) {
    this.projectName = projectName;
    this.targetDir = targetDir;
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  async create() {
    const repoName = await this.getRepoInfo();
    const tagInfo = await this.getTagInfo(repoName);
    await this.download(repoName, tagInfo);
  }

  async getRepoInfo() {
    let repoList = await loading("Loading template list...", getRepo, null);
    if (!Array.isArray(repoList)) {
      repoList = [].concat(repoList);
    }
    const repos = repoList.map((item) => item.name);
    let { repo } = await new inquirer.prompt([
      {
        name: "repo",
        type: "list",
        message: "Please choose a template",
        choices: repos,
      },
    ]);
    return repo;
  }

  async getTagInfo(repo) {
    const tagList = await loading("Loading tag list...", getTagsByRepo, repo);
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
    console.log(templateUrl);
    await loading(
      "Downloading template, Please wait...",
      this.downloadGitRepo,
      templateUrl,
      path.resolve(process.cwd(), this.targetDir)
    );
  }
}

module.exports = Creator;