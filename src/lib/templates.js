const fs = require("fs");
const nj = require("nunjucks");

function populateTemplateFiles(
  documentTitle,
  templateVersion,
  objs,
  templateDir
) {
  const templateFiles = fs.readdirSync(`${templateDir}/${templateVersion}`);
  const filesToWrite = templateFiles.map((file) => {
    const contents = fs
      .readFileSync(`${templateDir}/${templateVersion}/${file}`)
      .toString();
    const objKey = file.replace(".", "").toLowerCase();
    const newContents = nj.renderString(contents, {
      documentTitle,
      objs,
    });
    return { [objKey]: newContents };
  });

  return Object.assign({}, ...filesToWrite);
}

module.exports = { populateTemplateFiles };
