function getRequiredEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function buildDatabaseUrl() {
  const host = getRequiredEnv('DB_HOST');
  const port = process.env.DB_PORT || '3306';
  const database = getRequiredEnv('DB_NAME');
  const user = encodeURIComponent(getRequiredEnv('DB_USER'));
  const password = encodeURIComponent(getRequiredEnv('DB_PASSWORD'));

  return `mysql://${user}:${password}@${host}:${port}/${database}`;
}
