<!-- # About this private repo

This is the private repository for my project, refhired.com, with the MVP hosted on refhired.sayande.com via Vercel. I'm operating in Stealth Mode to safeguard the privacy of my ideas. However, I'm open to sharing the original repository with recruiters upon request. Presently, the MVP is deployed without backend functionality as I transition from Next.js 14's server actions to Express.js and GraphQL.

I'm capable of demonstrating the minimal viable product in development mode and plan to transition deployment from Vercel to AWS using the SST framework for serverless architecture. Progressed work can be observed in the code base above, particularly in the 'apps/api' folder containing backend code, and '/stacks' containing AWS CDK constructs made with the SST framework.

My goal is to complete this transition and fully deploy by May 1st, possibly even sooner. Currently, I'm seamlessly integrating GraphQL API with Prisma and delving into SST constructs for deployment purposes. The refhired.com domain is configured in AWS Route 53. Please note, I can showcase the minimal viable product in development mode. -->

<!-- # Things I am stuck with

Using the latest Next.js 14 -Using the latest Next.js 14 comes with a cost. Every library has some special and different configurations for the latest Next.js versions, especially versions above 13. I am currently stuck with a bug in next-intl which is breaking the parallel and intercepting route in productions, and another problem is with the Apollo Client. The bug is you have to encrypt and then pass cookies to the Apollo wrapper component and then decrypt and pass the cookies to the Apollo server.

Deploying with SST - I decided to transition the deployment platform from Vercel to AWS to gain more control over resources and reduce costs, with the assistance of the Serverless Stack (SST) framework. But here I got stuck! SST has no guide on how to deploy a turborepo ( I did it by tinkering ) and currently, I am stuck in using Prisma to create tables in AWS Aurora & then place them in the lambda layer.

Deployment Cost - AWS Aurora Database for 2 days cost me $0.35! with only 2 test users. It will become difficult for me to bear the cost of deployment. -->

<p align="center">
  <a href="https://github.com/sayandedotcom/refhired.com">
<!--    <img src="https://github.com/sayandedotcom/refhired.com/assets/107565578/8ac174c0-7abd-4305-a604-d32397988ed0" alt="Logo"> -->
<!--    <img src="https://github.com/sayandedotcom/refhired.com/assets/107565578/a1c556f2-550d-44e5-91cf-1eb89d7faa03" alt="Logo"> -->
    <img src="https://github.com/sayandedotcom/refhired.com/assets/107565578/748111d4-1f0a-42b3-a3a1-ad32bda2943c" height="120px" width="120px" alt="Logo">
  </a>
  <h3 align="center">Refhired.com</h3>

  <p align="center">
    Hire and apply only through referrals !
    <br />
    <a href="https://refhired.com/"><strong>Learn more »</strong></a>
    <br />
    <br />
<!--     <a href="https://go.cal.com/discord">Discord</a>
    · -->
    <a href="https://refhired.com/">Website</a>
    ·
    <a href="https://github.com/sayandedotcom/refhired.com/issues">Issues</a>
<!--     ·
    <a href="https://cal.com/roadmap">Roadmap</a> -->
  </p>
</p>

This is a solo project by [Sayan De](https://github.com/sayandedotcom). Read more about the project in this [blog](https://blogs.sayande.com/refhiredcom-what-is-it-a-side-hustle-that-boosted-my-career-skills-confidence-knowledge-etc)

## Architecture

![image](https://github.com/sayandedotcom/refhired.com/assets/107565578/d1dd9292-9ec4-48c2-8a2b-dd2fb0a6d077)

<!--
## DevOps Workflow

![image](https://github.com/sayandedotcom/refhired.com/assets/107565578/dd61493e-a007-4988-9750-66b9f89cb321) -->

<!-- ## Deployement

![image](https://github.com/sayandedotcom/refhired.com/assets/107565578/18b3a2a9-139a-4a6b-9405-575aa23414da) -->

## Contributing

Guidelines for contributing can be found in [CONTRIBUTING.md](https://github.com/sayandedotcom/refhired.com/blob/main/CONTRIBUTING.md).

## Main domains

| Domain                    | Tech                | Version |
| ------------------------- | ------------------- | ------- |
| Repository Tool           | Turborepo           | 1.9     |
| Primary Language          | TypeScript          | 4.5     |
| Front-End                 | Next.js             | 14+     |
| Back-End                  | Node.js             | 20.9.0  |
| API                       | GraphQL with Apollo | -       |
| Authentication            | Next-Auth           | 4       |
| Styling                   | Tailwind CSS        | 3.3     |
| Database ORM              | Prisma              | 4.15    |
| Primary Database          | PostgreSQL          | 15.3    |
| Caching Database          | Redis               | -       |
| Unit Testing              | Vitest              | 0.33.0  |
| End to end Testing        | Playwright          | 1.36.2  |
| Containerization          | Docker              | -       |
| CI/CD                     | GitHub Actions      | -       |
| Deployment Franework      | SST                 | 2+      |
| Deployment                | AWS                 | -       |
| Front-End Deployment      | AWS Lambda & S3     | -       |
| Back-End Deployment       | AWS Lambda          | -       |
| Database Deployment       | AWS Aurora Postgres | -       |
| Cache Database Deployment | AWS ElastiCache     | -       |
| Static Assests            | AWS S3              | -       |
| CDN                       | AWS CloudFront      | -       |
| Routing                   | AWS Route 53        | -       |
| Version Control           | GitHub              | -       |
| Code Editor               | VS Code             | -       |

### Workspaces List

| Index No. | Workspace/Folder | Info.            | Name                 | Navigate     | Port |
| --------- | ---------------- | ---------------- | -------------------- | ------------ | ---- |
| apps /    |                  |                  |                      |              |      |
| 1         | api              | For API Server   | @refhiredcom/api     | yarn api     | 8000 |
| 2         | blogs            | For blogs        | @refhiredcom/blogs   | yarn blogs   | -    |
| 3         | desktop          | For desktop app  | @refhiredcom/desktop | yarn desktop | -    |
| 4         | docs             | For docs         | @refhiredcom/docs    | yarn docs    | -    |
| 5         | mobile           | For mobile app   | @refhiredcom/mobile  | yarn mobile  | -    |
| 6         | storybook        | For Storybook    | @referrer/storybook  | yarn story   | 6006 |
| 7         | swagger          | For desktop app  | @refhiredcom/desktop | yarn desktop | -    |
| 8         | web              | For main website | @refhiredcom/web     | yarn web     | 3000 |

## Things I am stuck with

Using the latest Next.js 14 -Using the latest Next.js 14 comes with a cost. Every library has some special and different configurations for the latest Next.js versions, especially versions above 13. I am currently stuck with a bug in next-intl which is breaking the parallel and intercepting route in productions, and another problem is with the Apollo Client. The bug is you have to encrypt and then pass cookies to the Apollo wrapper component and then decrypt and pass the cookies to the Apollo server.

Deploying with SST - I decided to transition the deployment platform from Vercel to AWS to gain more control over resources and reduce costs, with the assistance of the Serverless Stack (SST) framework. But here I got stuck! SST has no guide on how to deploy a turborepo ( I did it by tinkering ) and currently, I am stuck in using Prisma to create tables in AWS Aurora & then place them in the lambda layer.

Deployment Cost - AWS Aurora Database for 2 days cost me $0.35! with only 2 test users. It will become difficult for me to bear the cost of deployment.

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

1. Clone the repo into a public GitHub repository (or fork <https://github.com/sayandedotcom/refhired.com/fork>). If you plan to distribute the code, keep the source code public to comply with [AGPLv3](https://github.com/sayandedotcom/refhired.com/blob/main/LICENSE).

   ```sh
   git clone https://github.com/sayandedotcom/refhired.com
   ```

2. Go to the project folder

   ```sh
   cd refhired.com
   ```

3. Install packages with yarn

   ```sh
   yarn
   ```

4. Set up your `.env` file

   - Duplicate `.env.example` to `.env`
   - Use `openssl rand -base64 32` to generate a key and add it under `NEXTAUTH_SECRET` in the `.env` file.

5. Quick start with `yarn dx`
   This will run the docker compose file in the root directory from the docker image build from @refhired.com/web on `http://localhost:3000/` and docker image build from @refhired.com/prisma (database) on `http://localhost:5432/` and adminar on `http://localhost:8080/`

> - **Requires Docker and Docker Compose to be installed**

```sh
yarn dx
```

6. Once your server has started, go to this url `http://localhost:3000/` and you will see the website running on a Development Server.

### License

-[MIT license](LICENSE)

### Contact 📬

For any query, email <sayandeten@gmail.com>.

Thanks!
