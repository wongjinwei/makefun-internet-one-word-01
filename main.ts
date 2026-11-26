// The Internet in one word: Connect.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "Connect");
