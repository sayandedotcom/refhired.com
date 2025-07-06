# Contributing to Referrer

👋 Hey, thanks for wanting to improve Referrer! Any contribution is welcome and appreciated!

Before contributing

- Before jumping into a PR be sure to search [existing PRs](https://github.com/sayande2002/referrer/pulls) or [issues](https://github.com/sayande2002/referrer/issues) for an open or closed item that relates to your submission.

The goal of Referrer is to simplify receiving and giving jobs referrals. I'm trying to make the UI more intuitive and easier to use in order to provide the best possible experience.

### Workspaces List

| Index No.  | Workspace            | Info.                    | Name                           | Navigate                  | Port |
| ---------- | -------------------- | ------------------------ | ------------------------------ | ------------------------- | ---- |
| apps /     |
| 1          | api                  | API Server               | @referrer/api                  | yarn api                  | 3001 |
| 2          | storybook            | Storybook                | @referrer/storybook            | yarn story                | 6006 |
| 3          | web                  | Main Website             | @refhiredcom/web               | yarn web                  | 3000 |
| 4          | mobile               | Mobile App               | @referrer/mobile               | yarn mobile               | -    |
| 5          | Desktop              | Desktop App              | @referrer/desktop              | yarn desktop              | -    |
| packages / |
| 4          | ui                   | Shared UI Components     | @referrer/ui                   | yarn ui                   | -    |
| 5          | prisma               | Prisma Database          | @referrer/prisma               | yarn prisma               | 5555 |
| 6          | lib                  | Shared Library Functions | @referrer/lib                  | yarn lib                  | -    |
| 7          | eslint-config-custom | Shared ESLint Config     | @referrer/eslint-config-custom | yarn eslint-config-custom | -    |
| 8          | prettier-config      | Shared Prettier Config   | @referrer/prettier-config      | yarn prettier-config      | -    |
| 9          | tailwind-config      | Shared Tailwind Config   | @referrer/tailwind-config      | yarn tailwind-config      | -    |
| 10         | tsconfig             | Shared Tsconfig          | @referrer/tsconfig             | yarn tsconfig             | -    |
| 11         | types                | Shared Types             | @referrer/types                | yarn types                | -    |

### Main domains

| Domain                  | Tech           | Version |
| ----------------------- | -------------- | ------- |
| Repository              | Turborepo      | 1.9     |
| Language                | TypeScript     | 4.5     |
| Client & Server         | Next.js        | 13.4    |
| Mobile App              | React Native   | 0.72    |
| Desktop App             | Tauri          | 1.4     |
| Styling                 | Tailwind CSS   | 3.3     |
| Database ORM            | Prisma         | 4.15    |
| Database                | PostgreSQL     | -       |
| Api                     | tRPC           | -       |
| Version Control         | GitHub         | -       |
| Code Editor             | VS Code        | -       |
| Containerization        | Docker         | -       |
| Container Orchestration | Kubernetes     | -       |
| Continuous Integration  | GitHub Actions | -       |
| Continuous Delivery     | Argo CD        | -       |
| Deployments             | AWS            | -       |
| Infrastructure as code  | Terraform      | -       |

### Main libraries

| Domain            | Libraries                                      | Version |
| ----------------- | ---------------------------------------------- | ------- |
| Authentication    | Next-Auth                                      | 4       |
| State Management  | Redux Toolkit                                  |         |
| UI Components     | shadcn.ui                                      |         |
| UI Documentation  | Storybook                                      | 7       |
| Icons             | Lucid React, React Icons, Redix UI React Icons |         |
| Thenming          | Next Themes                                    |         |
| Schema Validation | Zod                                            |         |
| Form Validation   | React Hook Form                                |         |
| Font              | Cal Sans                                       |         |
| Linter Tasks      | Lint Staged                                    |         |
| Git Hook          | Husky                                          |         |
| Code Formatter    | Prettier                                       |         |
| Code Analysis     | Eslint                                         |         |
| Code Coverage     | Jest                                           |         |
| Code Testing      | Jest                                           |         |

## Getting Started

To get a local copy up and running, please follow these simple steps.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Here is what you need to be able to run Cal.com.

- Node.js (Version: >=18.x)
- Git
- Docker and Docker Compose
- Yarn _(recommended)_

## Development

### Setup

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.

2. Clone the repo into a public GitHub repository (or fork <https://github.com/sayande2002/referrer/fork>). If you plan to distribute the code, keep the source code public to comply with [AGPLv3](https://github.com/sayande2002/referrer/blob/main/LICENSE).

   ```sh
   git clone https://github.com/sayande2002/referrer
   ```

3. Go to the project folder

   ```sh
   cd referrer
   ```

4. Install packages with yarn

   ```sh
   yarn
   ```

5. Create a new branch:

   ```sh
   git checkout -b MY_BRANCH_NAME
   ```

6. Set up your `.env` file

   - Duplicate `.env.example` to `.env`
   - Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.

7. Quick start with `yarn dx`

> - **Requires Docker and Docker Compose to be installed**

```sh
yarn dx
```

6. Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server.
