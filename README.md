# FZFDrip

Cloudflare Worker that provides a fuzzy finder for drip car memes

## Authors

- [@Endercass](https://www.github.com/Endercass)

## File sources

- [@desp](https://github.com/desplmfao) (Provided a large amount of drip cars via [gdrive](https://drive.google.com/drive/folders/1RS08NzZ6_OgLJxvqArKk0-DMjGRQRzcd?usp=sharing))

- [Titanium Network](https://discord.gg/unblock) (Community provided many drip cars)

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

- [x] Add more drip car memes

- [ ] Add more aliases to ensure proper results

- [ ] Add homepage with example

## Appendix

- Videos are downloaded externally to reduce overhead
- Files are hosted on an Oracle Cloud Infrastructure object storage instance
