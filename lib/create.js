const path = require("path");
const fs = require("fs-extra");
const Inquirer = require("inquirer");
const Creator = require("./utils/creator");
const { loading } = require("./utils/loading");

module.exports = async function (projectName, options) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, projectName);
  if (fs.existsSync(targetDir)) {
    if (options.force) {
      await fs.remove(targetDir);
    } else {
      let { action } = await Inquirer.prompt([
        {
          name: "action",
          type: "list",
          message: "Target directory already exists Pick an action:",
          choices: [
            { name: "Overwrite", value: "overwrite" },
            { name: "Cancel", value: false },
          ],
        },
      ]);
      if (!action) {
        return;
      } else if (action === "overwrite") {
        await loading(
          `Removing ${projectName}, please wait a minute`,
          fs.remove,
          targetDir
        );
      }
    }
  }
  const creator = new Creator(projectName, targetDir);
  creator.create();
};
