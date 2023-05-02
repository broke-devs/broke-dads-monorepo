# Broke Dads

Alpha social site for developers to create, assist, track and maintain projects.

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
