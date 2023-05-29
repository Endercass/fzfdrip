# FZFDrip

Cloudflare Worker that provides a fuzzy finder for drip car memes

## Authors

- [@Endercass](https://www.github.com/Endercass)

## API Reference

#### Search for video

```http
  GET /${search}
```

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| `search`  | `string` | **Required**. The video you want to find |

Responds with a webm video or an empty html file if nothing can be found

## Run Locally

Clone the project

```bash
  git clone https://github.com/Endercass/fzfdrip.git
```

Go to the project directory

```bash
  cd fzfdrip
```

Install dependencies

```bash
  npm install
```

Start the local wrangler server

```bash
  npx wrangler dev --local
```

## Deployment

To deploy this worker run

```bash
  # This assumes you already have wrangler set up with your credentials
  npx wrangler publish src/index.js --name fzfdrip
```

## Roadmap

- [ ] Add more drip car memes

- [ ] Add more aliases to ensure proper results

- [ ] Add homepage with example

## Appendix

- Videos are downloaded externally to reduce overhead
- Files are hosted on an Oracle Cloud Infrastructure object storage instance
