import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { mkdtemp, mkdir, rm, symlink, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { ESLint } from "eslint";

const require = createRequire(import.meta.url);
const configRequire = createRequire(require.resolve("eslint-config-next"));
const pluginRequire = createRequire(
  configRequire.resolve("@next/eslint-plugin-next"),
);
const nextPlugin = pluginRequire("./index.js");
const { getRootDirs } = pluginRequire("./utils/get-root-dirs.js");

let fixture;
let first;
let second;
let linked;

before(async () => {
  fixture = await mkdtemp(path.join(tmpdir(), "ast-eslint-roots-"));
  first = path.join(fixture, "apps", "first");
  second = path.join(fixture, "apps", "second");
  linked = path.join(fixture, "links", "first");
  for (const directory of [first, second]) {
    await mkdir(path.join(directory, "pages"), { recursive: true });
    await writeFile(path.join(directory, "pages", "about.js"), "");
  }
  await writeFile(path.join(fixture, "apps", "ordinary-file.txt"), "");
  await mkdir(path.dirname(linked));
  await symlink(first, linked, "junction");
  await mkdir(path.join(fixture, "literal", "(first)"), { recursive: true });
});

after(async () => {
  await rm(fixture, { recursive: true, force: true });
});

const roots = (rootDir) =>
  getRootDirs({ cwd: first, settings: { next: { rootDir } } })
    .map((directory) => path.resolve(directory))
    .sort();

test("Next's root discovery keeps default, literal, absolute and glob roots", () => {
  const relative = path.relative(process.cwd(), first);
  assert.deepEqual(roots(undefined), [first]);
  assert.deepEqual(roots(relative), [first]);
  assert.deepEqual(roots(relative.replaceAll(path.sep, "\\")), [first]);
  assert.deepEqual(roots(first), [first]);
  assert.deepEqual(roots(`${first}/`), [first]);
  assert.deepEqual(roots(path.join(fixture, "apps", "*")), [first, second]);
  assert.deepEqual(roots(path.join(fixture, "apps", "{first,second}")), [
    first,
    second,
  ]);
  for (const pattern of [
    "(first|second)",
    "((first|missing)|second)",
    "@(first|second)",
  ]) {
    assert.deepEqual(roots(path.join(fixture, "apps", pattern)), [first, second]);
  }
  assert.deepEqual(roots(path.join(fixture, "literal", "[(]first[)]")), [
    path.join(fixture, "literal", "(first)"),
  ]);
  assert.deepEqual(roots([first, second, null]), [first, second]);
  assert.deepEqual(roots(path.join(fixture, "missing")), []);
  assert.deepEqual(roots(linked), [linked]);
  assert.deepEqual(roots(path.join(fixture, "links", "*")), [linked]);
  // A literal app root must not recursively include its pages directory.
  assert.ok(!roots(first).includes(path.join(first, "pages")));
});

test("Next's internal-link rule still runs with each supported root configuration", async () => {
  for (const rootDir of [
    undefined,
    first,
    path.relative(process.cwd(), first),
    path.join(fixture, "apps", "*"),
    path.join(fixture, "apps", "(first|second)"),
    path.join(fixture, "apps", "((first|missing)|second)"),
    linked,
    path.join(fixture, "links", "*"),
    [first, second],
  ]) {
    const eslint = new ESLint({
      cwd: first,
      overrideConfigFile: true,
      overrideConfig: {
        files: ["**/*.jsx"],
        languageOptions: {
          parserOptions: { ecmaFeatures: { jsx: true } },
        },
        plugins: { "@next/next": nextPlugin },
        settings: { next: { rootDir } },
        rules: { "@next/next/no-html-link-for-pages": "error" },
      },
    });
    const [invalid] = await eslint.lintText(
      'export default () => <a href="/about">About</a>;',
      { filePath: "sample.jsx" },
    );
    assert.equal(invalid.errorCount, 1, JSON.stringify(rootDir));
    assert.equal(
      invalid.messages[0].ruleId,
      "@next/next/no-html-link-for-pages",
    );
    const [valid] = await eslint.lintText(
      'import Link from "next/link"; export default () => <><Link href="/about">About</Link><a href="https://example.com">External</a></>;',
      { filePath: "sample.jsx" },
    );
    assert.equal(valid.errorCount, 0, JSON.stringify(rootDir));
  }
});

test("deeply nested root patterns do not exhaust the matcher stack", () => {
  for (const depth of [3500, 4500]) {
    const pattern =
      "{".repeat(depth) + "no-such-root" + "}".repeat(depth);
    assert.deepEqual(roots(pattern), []);
  }
});
