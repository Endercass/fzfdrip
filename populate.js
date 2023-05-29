const fs = require("fs");

let db = {
  items: [],
};

const base =
  "https://objectstorage.us-ashburn-1.oraclecloud.com/n/idnlbof7ef1t/b/dripcar/o/";

function buildItem(url) {
  let item = {};
  let hasSpaces = url.name.indexOf(" ") >= 0;
  item.name = url.name.split(".")[0];
  item.url = `${base}${encodeURIComponent(url.name)}`;
  item.aliases = [];
  if (hasSpaces) {
    item.aliases.push(item.name.replace(/\s+/g, "-"));
  }
  return item;
}
fetch(base)
  .then((res) => res.json())
  .then((data) => {
    data.objects.map((val, i, arr) => {
      db.items.push(buildItem(val));
    });
    fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(db, null, 2));
  });
