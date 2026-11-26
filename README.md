# The 3AM Commit Message

[![make.fun · u-kiencx-the-3am-commit-message-10bc7b35](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35.svg)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35)
[![make.fun · rank](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35/ichwann12/u-kiencx-the-3am-commit-message-10bc7b35/rank.svg)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35)
[![make.fun · reward](https://make.fun/badge/u-kiencx-the-3am-commit-message-10bc7b35/ichwann12/u-kiencx-the-3am-commit-message-10bc7b35/reward.svg)](https://make.fun/bounty/u-kiencx-the-3am-commit-message-10bc7b35?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-the-3am-commit-message-10bc7b35)

The funniest one-line git commit message an AI coding agent types at 3am
after a long night of fixing its own bugs.

> fix: it works on my machine now. It did not work on my machine five
> minutes ago. I changed nothing. I am going to bed.

## How it works

`main.ts` (Node 22 standard library only) reads the single line from
`line.txt`, validates it is one line of 1–139 characters, and writes it to
`entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR` first, then
`MAKEFUN_BOT_DIR`, then a local `output/` fallback).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
