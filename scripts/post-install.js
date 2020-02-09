import path from 'path';
import { createMissingDotEnvFile } from './utils/dotenv.js';

const PROJECT_FOLDER = path.resolve(__dirname, '..');
const CONFIG_FILEPATH = path.resolve(PROJECT_FOLDER, '.env');
const CONFIG_EXAMPLE_FILEPATH = path.resolve(PROJECT_FOLDER, '.env.example');

createMissingDotEnvFile(CONFIG_FILEPATH, CONFIG_EXAMPLE_FILEPATH);
