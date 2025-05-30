export interface EnvConfig {
  GATSBY_API_URL: string;
  GATSBY_TO_EMAIL_ADDRESS: string;
}

export const validateEnv = (env: EnvConfig): boolean => {
  if (!env.GATSBY_API_URL) {
    console.error('⚠️ GATSBY_API_URL is not defined');
    return false;
  }

  if (!env.GATSBY_TO_EMAIL_ADDRESS || !env.GATSBY_TO_EMAIL_ADDRESS.includes('@')) {
    console.error('⚠️ GATSBY_TO_EMAIL_ADDRESS is not a valid email');
    return false;
  }

  return true;
};
