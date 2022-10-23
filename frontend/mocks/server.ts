import { handlers } from './handlers';
import { setupServer } from "msw/node";

// handlers

export const server = setupServer(...handlers)