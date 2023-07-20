## Referrer - Simplifying receiving and giving job referrals for everyone ! ( Under Development )

[Visit Website](https://referrer-web.vercel.app/)

This is a solo Project by [Sayan De](https://github.com/sayande2002).

## Contributing

Guidelines for contributing can be found in [CONTRIBUTING.md](https://github.com/sayande2002/referrer/blob/main/CONTRIBUTING.md).

## Main domains

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
| Testing                 | Vitest         | -       |
| Version Control         | GitHub         | -       |
| Code Editor             | VS Code        | -       |
| Containerization        | Docker         | -       |
| Container Orchestration | Kubernetes     | -       |
| Continuous Integration  | GitHub Actions | -       |
| Continuous Delivery     | Argo CD        | -       |
| Infrastructure as code  | Terraform      | -       |
| Deployment              | AWS            | -       |

## Features

1. Job referrals to top companies
2. Manage referrals requests
3. Easy apply to jobs referrals
4. Desktop App
5. Mobile App

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

1. Clone the repo into a public GitHub repository (or fork https://github.com/sayande2002/referrer/fork). If you plan to distribute the code, keep the source code public to comply with [AGPLv3](https://github.com/sayande2002/referrer/blob/main/LICENSE).

   ```sh
   git clone https://github.com/sayande2002/referrer
   ```

2. Go to the project folder

   ```sh
   cd referrer
   ```

3. Install packages with yarn

   ```sh
   yarn
   ```

4. Set up your `.env` file

   - Duplicate `.env.example` to `.env`
   - Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.

5. Quick start with `yarn dx`

> - **Requires Docker and Docker Compose to be installed**

```sh
yarn dx
```

6. Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server.

### Authors

-[Sayan De](https://github.com/sayande2002)

### Contributing

Please feel free to pull requests or log issues.

### License

-[MIT license](LICENSE)

### Contact 📬

For any query, email sayandeten@gmail.com.

Thanks!
