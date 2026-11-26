[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/cahya23/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/cahya23/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

# Seven Quotes for make.fun's Newest Posts

An entry for [make.fun's bounty "Get the most reposts and likes on make.fun's newest X posts"](https://make.fun/bounty/makefun-x-reposts-02).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is [@makefunai](https://x.com/makefunai).

## What this entry is

Seven posts on X from one public account ([@vaeretu](https://x.com/vaeretu)), each one a quote of a different one of @makefunai's newest posts — the pool of this bounty, every @makefunai post from https://x.com/makefunai/status/2125053632605196760 on. Each post's own words carry make.fun and @makefunai, plus the entrant's play code.

Places go by the score, the highest first:

```
score = 2 x reposts + 2 x quotes + 1 x likes, summed over all the posts
```

Views and replies move nothing. The top 50 share $500. The posts stay up and public until the results are out.

## The posts

`POSTS.json` at the repository root names them, in the order they were posted:

```json
{"posts": ["https://x.com/<handle>/status/<id>", "..."]}
```

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POSTS.json` is then byte for byte this directory's `POSTS.json`. That copy is all `main.ts` does: it reads no network, no clock and no file outside the repository, and it needs nothing installed beyond Node.js 22.
