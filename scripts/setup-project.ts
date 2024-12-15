import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

interface ProjectSetup {
  createDirectories: () => void;
  createEnvFile: () => void;
  setupGitHooks: () => void;
  installDependencies: () => void;
}

class ProjectSetupScript implements ProjectSetup {
  private readonly directories = [
    'src/images/icons',
    'src/images/projects',
    'src/images/blog',
    'src/components',
    'src/pages',
    'src/templates',
    'src/styles',
    'src/data',
    'static',
  ];

  private readonly envTemplate = `
# Site Configuration
GATSBY_SITE_URL=http://localhost:8000
GATSBY_SITE_TITLE=Portfolio
GATSBY_SITE_DESCRIPTION=My Professional Portfolio

# Analytics
GATSBY_GA_TRACKING_ID=

# API Keys (if needed)
GATSBY_API_KEY=
`;

  createDirectories(): void {
    console.log('📁 Creating project directories...');
    
    this.directories.forEach(dir => {
      const fullPath = path.join(process.cwd(), dir);
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`✓ Created ${dir}`);
      }
    });
  }

  createEnvFile(): void {
    console.log('\n📝 Setting up environment files...');
    
    const envPath = path.join(process.cwd(), '.env.development');
    if (!fs.existsSync(envPath)) {
      fs.writeFileSync(envPath, this.envTemplate.trim());
      console.log('✓ Created .env.development');
    }

    // Create .env.development.example
    fs.writeFileSync(
      path.join(process.cwd(), '.env.development.example'),
      this.envTemplate.trim()
    );
    console.log('✓ Created .env.development.example');
  }

  setupGitHooks(): void {
    console.log('\n🔧 Setting up Git hooks...');
    
    try {
      execSync('npx husky install', { stdio: 'inherit' });
      execSync('npx husky add .husky/pre-commit "npm run type-check && npm run lint"', {
        stdio: 'inherit',
      });
      console.log('✓ Git hooks installed');
    } catch (error) {
      console.error('Failed to setup Git hooks:', error);
    }
  }

  installDependencies(): void {
    console.log('\n📦 Installing dependencies...');
    
    try {
      execSync('npm install', { stdio: 'inherit' });
      console.log('✓ Dependencies installed');
    } catch (error) {
      console.error('Failed to install dependencies:', error);
    }
  }

  async run(): Promise<void> {
    console.log('🚀 Starting project setup...\n');

    this.createDirectories();
    this.createEnvFile();
    this.setupGitHooks();
    this.installDependencies();

    console.log('\n✨ Project setup complete! You can now start developing.');
    console.log('\nNext steps:');
    console.log('1. Update the environment variables in .env.development');
    console.log('2. Run npm run develop to start the development server');
  }
}

// Run setup
const setup = new ProjectSetupScript();
setup.run().catch(console.error);
