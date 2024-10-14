# vite-monorepo-sandbox

Vite pnpm monorepo sample which can be deployed as GitHub Pages.

## Usage

### Install dependencies

```sh
pnpm install
```

### Start development server

Run all apps
```sh
pnpm run dev
```

Run index app
```sh
pnpm run dev:index
```

Run specific app (`react`, `vanilla`)
```sh
pnpm run dev:app react
```

### Build and preview for production

```sh
pnpm run build
pnpm run preview:index
```

## Remarks

- Use `apps/index` as the entry point (`/`) and bind `/data` directory via symbolic link (`apps/index/public/data`) as a part of static assets directory.
- Use port 3000 - 300X for development mode and 4000 for preview mode.
- Control development mode proxy in `apps/index/vite.config.js` - `server.proxy` with each app's directory name.
- Need relative path with last slash (`./react/`, `../` (index)) for each app for navigation.
- Use root `.env.development` and `.env.production` for environment variables.
