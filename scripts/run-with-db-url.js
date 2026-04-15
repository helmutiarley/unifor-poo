import 'dotenv/config';

import { spawn } from 'node:child_process';

import { buildDatabaseUrl } from '../src/config/database.js';

const [command, ...args] = process.argv.slice(2);

if (!command) {
  console.error('No command provided.');
  process.exit(1);
}

const child = spawn(command, args, {
  env: {
    ...process.env,
    DATABASE_URL: buildDatabaseUrl(),
  },
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code ?? 1);
});
