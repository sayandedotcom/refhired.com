declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;

      COUNTRY_STATE_CITY: string;

      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL: string;
      POSTGRES_URL_NON_POOLING: string;
      POSTGRES_USER: string;
      VERCEL: string;
      VERCEL_ENV: string;

      STRIPE_PUBLISHABLE_KEY: string;
      NEXT_PUBLIC_STRIPE_SECRECT_KEY: string;

      NODE_ENV: "development" | "production";
    }
  }
}

export {};
