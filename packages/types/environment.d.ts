declare global {
  namespace NodeJS {
    interface ProcessEnv {
      FRONTEND_DEV_URL: string;
      FRONTEND_PROD_URL: string;
      BACKEND_PROD_URL: string;
      BACKEND_DEV_URL: string;
      BACKEND_PORT: string;
      JWT_SECRET: string;
      REDIS_URL: string;

      NEXT_PUBLIC_APP_URL: string;

      NEXTAUTH_URL?: string;
      NEXTAUTH_SECRET: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      GITHUB_CLIENT_ID: string;
      GITHUB_CLIENT_SECRET: string;

      NEXT_PUBLIC_COUNTRY_STATE_CITY: string;
      COUNTRY_STATE_CITY: string;

      POSTGRES_DATABASE: string;
      POSTGRES_HOST: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_PRISMA_URL: string;
      POSTGRES_URL: string;
      POSTGRES_URL_NON_POOLING: string;
      POSTGRES_USER: string;
      VERCEL?: string;
      VERCEL_ENV: string;

      KV_URL: string;
      KV_REST_API_URL: string;
      KV_REST_API_TOKEN: string;
      KV_REST_API_READ_ONLY_TOKEN: string;

      EDGE_CONFIG: string;

      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;
      STRIPE_EXPERIENCED_PRICE_ID: string;
      STRIPE_JUNIOR_PRICE_ID: string;
      STRIPE_LAYOFFED_PRICE_ID: string;
      STRIPE_CUST0M_PRICE_ID: string;

      RESEND_API_KEY: string;

      UPLOADTHING_SECRET: string;
      UPLOADTHING_APP_ID: string;

      // NODE_ENV: "development" | "production";
    }
  }
}

export {};
