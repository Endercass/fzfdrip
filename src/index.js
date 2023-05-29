/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
const Fuse = require("fuse.js");

const db = require("../db.json");

const fuse = new Fuse(db.items, {
  includedScore: true,
  keys: ["name", "aliases"],
});

const invalidSearch = `<html>
<head>
  <title>FZFDrip</title>
  <meta charset="utf-8">
  <meta name="robots" content="noindex">
  <meta name="theme-color" content="">
  <meta property="og:title" content="FZFShip">
  <meta property="og:description" content="Invalid search.">
</head>
</html>`;

export default {
  async fetch(request, env, ctx) {
    let search = decodeURIComponent(new URL(request.url).pathname.slice(1));
    switch (search) {
      case "gh":
      case "github":
        return Response.redirect("https://github.com/Endercass/fzfdrip", 301);
      case "db":
      case "db.json":
        return new Response(JSON.stringify(db), {
          headers: { "content-type": "application/json; charset=UTF-8" },
        });
      default:
        let items = fuse.search(search);
        if (items.length == 0) {
          return new Response(invalidSearch, {
            headers: {
              "content-type": "text/html; charset=UTF-8",
            },
          });
        }
        let item = items[0];
        return fetch(item.item.url);
    }
  },
};
