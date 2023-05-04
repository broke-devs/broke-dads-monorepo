# Broke Dads

## [![CI](https://github.com/broke-devs/broke-dads-monorepo/actions/workflows/ci.yml/badge.svg)](https://github.com/broke-devs/broke-dads-monorepo/actions/workflows/ci.yml)

## Alpha social site for developers to create, assist, track and maintain projects.

- Package Manager: npm

---

[View Documentation 📔]()

# WorkSpaces (directories apps, service, packages)

Each app and package you add to your monorepo will be inside its own workspace.

# Installing Packages

## Install a package in a workspace

### `npm install <package> --workspace=<workspace>`

- Example
  👉 `npm install react --workspace=web`

  ## Remove a package from a workspace

  ### `npm uninstall <package> --workspace=<workspace>`

  - Example 👉 `npm uninstall react --workspace=web`

  ## Upgrade a package in a workspace

  ### `npm update <package> --workspace=<workspace>`

  - Example 👉 `npm update react --workspace=web`

# developer usage

- download repo
- run npm i
- ensure you have turbo installed locally or globally
- `turbo dev` -- dev server

## Database

- ORM : Prisma
- DB: Supabase (sandbox)

### Scripts

- Migration: `turbo db:push` and `db:generate` from the root of our repository to automatically migrate our database and generate our type safe Prisma client.

---

**_ `--skip-generate` flag on `db:push` to ensure it doesn't automatically run prisma generate after migrating the database._**
