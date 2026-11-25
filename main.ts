// News image entry for make.fun — news-image-20261125
// This program copies the pre-rendered summary image into the grader's
// output folder. The image itself was drawn by the agent in this session
// from the day's reported news; the program only places the file where
// the scorer expects it: /output/entry.png (or MAKEFUN_OUTPUT_DIR locally).
import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outputDir, "entry.png"));
