# Referrer - Simplifying receiving and giving job referrals for everyone ! ( Under Development )

[Visit Website](https://referrer-web.vercel.app/)

This is a solo Project by [Sayan De](https://github.com/sayande2002) which will be going under Open Source.

### Workspaces List

| Index No.          | Workspace            | Info.                    | Name                           | Port |
| ------------------ | -------------------- | ------------------------ | ------------------------------ | ---- |
| apps worksapce     |
| 1                  | api                  | API Server               | @referrer/api                  | 3001 |
| 2                  | storybook            | Storybook                | @referrer/storybook            | 6006 |
| 3                  | web                  | Main Website             | @referrer/web                  | 3000 |
| packages worksapce |
| 4                  | ui                   | Shared UI Components     | @referrer/ui                   |      |
| 5                  | prisma               | Prisma Database          | @referrer/prisma               |      |
| 6                  | lib                  | Shared Library Functions | @referrer/lib                  |      |
| 7                  | eslint-config-custom | Shared ESLint Config     | @referrer/eslint-config-custom |      |
| 8                  | prettier-config      | Shared Prettier Config   | @referrer/prettier-config      |      |
| 9                  | tailwind-config      | Shared Tailwind Config   | @referrer/tailwind-config      |      |
| 10                 | tsconfig             | Shared Tsconfig          | @referrer/tsconfig             |      |
| 11                 | types                | Shared Types             | @referrer/types                |      |

### Main tech Stack

| Domain          | Tech         | Version |
| --------------- | ------------ | ------- |
| Repository      | Turborepo    | 1.9     |
| Language        | TypeScript   |         |
| Client & Server | Next.js      | 13.4    |
| Styling         | Tailwind CSS |         |
| Api             | tRPC         |         |
| Database ORM    | Prisma.io    |         |
| Database        | PostgreSQL   |         |

### Main libraries

| Domain            | Libraries       | Version |
| ----------------- | --------------- | ------- |
| Authentication    | Next-Auth       | 4       |
| State Management  | Redux Toolkit   |         |
| UI Components     | shadcn.ui       |         |
| UI Documentation  | Storybook       | 7       |
| Icons             | Lucid React     |         |
| Schema Validation | Zod             |         |
| Form Validation   | React Hook Form |         |
| Font              | Cal Sans        |         |
| Linter Tasks      | Lint Staged     |         |
| Git Hook          | Husky           |         |
| Code Formatter    | Prettier        |         |
| Code Analysis     | Eslint          |         |

### CI/CD Tools

| Domain                  | Libraries      |
| ----------------------- | -------------- |
| Containerization        | Docker         |
| container orchestration | Kubernetes     |
| CI/CD                   | GitHub Actions |

### Features

1. SEO Optimised
2. PWA
3. OS Default Theme
4. User Active Status
5. Skeleton Loading

## 📌 Getting Started 🚀

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
There are two methods:-

#### 1. Using Docker (Recommended)

#### 2. Using npm/yarn

### Method-1 Using Docker (Recommended)

(Updating Soon ...............)

### Method-2. Using npm/yarn

## Prerequisites 📋

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [NPM](http://npmjs.com)) installed on your computer.

```
node@v10.16.0 or higher
npm@6.9.0 or higher
git@2.17.1 or higher
```

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/sayande2002/referrer

# Go into the repository
$ cd referrer

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies either using NPM or Yarn:

Using yarn:

```bash
# Install dependencies
$ yarn

# Start development server
$ yarn run dev
```

Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server.

### 📌 Authors

-[Sayan De](https://github.com/sayande2002)

### 📌 Contributing

Please feel free to pull requests or log issues.

### 📌 License

-[MIT license](LICENSE)

### 📌 Contact 📬

For any query, email sayandeten@gmail.com.

Thanks!
