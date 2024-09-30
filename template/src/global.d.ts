declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENV_KEY_DEMO?: string;
    }
  }
}

export {};
