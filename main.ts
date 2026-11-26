// main.ts — entrypoint for the makefun-x-reposts-02 entry.
//
// The entry itself is a list of X posts, kept in POSTS.json at the
// repository root. This program's only job is to carry that file,
// byte for byte, into the grader's output directory. It reads no
// network, no clock and no file outside the repository.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const source = join(botDir, "POSTS.json");

// Fail fast on a malformed list instead of shipping a bad copy: the
// file must parse as JSON and hold a "posts" array of X post addresses.
const parsed = JSON.parse(readFileSync(source, "utf8"));
if (!parsed || !Array.isArray(parsed.posts)) {
  throw new Error("POSTS.json must be an object with a posts array");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "POSTS.json"));
