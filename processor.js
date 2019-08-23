const fs = require("fs");

const args = process.argv.slice(2);

const file = args[0];

const out = args[1];

if (!fs.existsSync(file)) {
  console.error("File not found!");
  return;
}

const icons = require(file);

const processed_icons = Object.keys(icons).map(key => {
  let icon = icons[key];

  icon.class = key;

  delete icon.changes;

  delete icon.ligatures;

  delete icon.voted;

  delete icon.svg;

  return icon;
});

fs.writeFileSync(out, JSON.stringify(processed_icons), "utf8");
