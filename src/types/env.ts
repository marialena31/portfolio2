export interface EnvConfig {
  GATSBY_API_URL: string;
  GATSBY_TO_EMAIL_ADDRESS: string;
}

export const validateEnv = (env: EnvConfig): boolean => {
  if (!env.GATSBY_API_URL) {
    return false;
  }

  if (!env.GATSBY_TO_EMAIL_ADDRESS || !env.GATSBY_TO_EMAIL_ADDRESS.includes('@')) {
    return false;
  }

  return true;
};
