# Next ESLint glob dependency

`@next/eslint-plugin-next@16.4.2` uses `fast-glob` only to resolve the
`settings.next.rootDir` option for `no-html-link-for-pages`. That dependency
introduces `braces@3.0.3`, affected by
[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm),
with no patched release available on 20 October 2026.

The version-scoped pnpm override replaces that one dependency with
`glob@13.0.6`. The patch adapts the directory-only lookup, follows directory
symlinks, preserves absolute root paths, and converts bare `(a|b)` groups to
explicit `@(a|b)` extglobs. Ordinary files must not become application roots.
No audit advisories are ignored.

Keep this directory with `package.json` and `pnpm-lock.yaml` when packaging or
deploying the source. Install with `pnpm install --frozen-lockfile`; npm does not
apply these pnpm overrides or patches.

When upgrading the Next ESLint plugin, inspect its glob dependency and remove
the override and patch if upstream no longer needs them. Otherwise review the
new implementation before carrying the patch forward. Run `pnpm run
test:dependencies`, `pnpm run lint`, and `pnpm audit --audit-level=high`.
The integration tests exercise root lookup and internal-link diagnostics.
