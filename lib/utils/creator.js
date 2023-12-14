const downloadGitRepo = require("download-git-repo");
const util = require("util");
const path = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");
const { loading } = require("./loading");
const { sendTemplateMsg } = require("./api");

class Creator {
  constructor(projectName, targetDir) {
    this.projectName = projectName;
    this.targetDir = targetDir;
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }

  async create() {
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

  async getTagInfo(repo) {
    const choices = [
      "基本电子表格（无表格编辑器）",
      "电子表格 + 表格编辑器",
      "电子表格 + 数据透视表",
      "电子表格 + 甘特图",
    ];

    let { language } = await new inquirer.prompt([
      {
        name: "language",
        type: "list",
        message: "Please choose which language for your SpreadJS demo?",
        choices: ["Vue3", "React", "JavaScript"],
      },
    ]);

    let { template } = await new inquirer.prompt([
      {
        name: "template",
        type: "list",
        message: "Please choose which template for your SpreadJS demo?",
        choices: choices,
      },
    ]);
    let index;
    switch (language) {
      case "JavaScript":
        switch (template) {
          case "基本电子表格（无表格编辑器）":
            index = 0;
            break;
          case "电子表格 + 表格编辑器":
            index = 1;
            break;
          case "电子表格 + 数据透视表":
            index = 2;
            break;
          case "电子表格 + 甘特图":
            index = 3;
            break;
          default:
            break;
        }
        break;
      case "Vue3":
        switch (template) {
          case "基本电子表格（无表格编辑器）":
            index = 4;
            break;
          case "电子表格 + 表格编辑器":
            index = 5;
            break;
          case "电子表格 + 数据透视表":
            index = 6;
            break;
          case "电子表格 + 甘特图":
            index = 7;
            break;
          default:
            break;
        }
        break;
      case "React":
        switch (template) {
          case "基本电子表格（无表格编辑器）":
            index = 8;
            break;
          case "电子表格 + 表格编辑器":
            index = 9;
            break;
          case "电子表格 + 数据透视表":
            index = 10;
            break;
          case "电子表格 + 甘特图":
            index = 11;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    const tags = [
      "JS",
      "JS-Designer",
      "JS-Pivot",
      "JS-Gantt",
      "Vue",
      "Vue-Designer",
      "Vue-Pivot",
      "Vue-Gantt",
      "React",
      "React-Designer",
      "React-Pivot",
      "React-Gantt",
    ];
    const tempName = tags[index];

    const measurement_id = `G-PDN15XBSZ0`;
    const api_secret = `5jxW7pkCRci7zPoKxPtBiA`;

    sendTemplateMsg(measurement_id, api_secret, tempName.replaceAll("-", "_"));

    return tempName.replaceAll("-", "_");
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
