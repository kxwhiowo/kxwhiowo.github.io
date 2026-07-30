# Terminal toy (webshell)

Standalone terminal portfolio sub-site, based on [nasan016/webshell](https://github.com/nasan016/webshell).

- **Live path:** `/term/` (built static files in repo root `term/`)
- **Edit content:** `config.json` (and optionally files under `src/commands/`)
- **Rebuild:**

```bash
cd toys/webshell
npm install
npm run build
```

That writes production assets to `../../term` with `base: /term/`.
