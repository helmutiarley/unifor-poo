import 'dotenv/config';

import { buildDatabaseUrl } from './src/config/database.js';

process.env.DATABASE_URL = buildDatabaseUrl();

const { default: app } = await import('./src/app.js');

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
