// eslint-disable-next-line @typescript-eslint/no-var-requires
const { config } = require('dotenv');

const REQUIRED_ENV_VARS = [
  'GATSBY_GA_TRACKING_ID',
  'GATSBY_SITE_URL',
  // Add more required environment variables here
];

function checkEnvVariables(): void {
  // Load .env file
  config();

  const missingVars: string[] = [];

  // Check for required variables
  REQUIRED_ENV_VARS.forEach(envVar => {
    if (!process.env[envVar]) {
      missingVars.push(envVar);
    }
  });

  if (missingVars.length > 0) {
    console.error('Error: Missing required environment variables:');
    missingVars.forEach(variable => {
      console.error(`- ${variable}`);
    });
    process.exit(1);
  }

  console.log('✅ All required environment variables are present.');
}

checkEnvVariables();
