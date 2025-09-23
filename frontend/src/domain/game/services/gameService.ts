import { api } from '@/core/lib/api';
import { GuessResult } from '../types';

/**
 * @service gameService
 * @summary Provides methods for interacting with the game API endpoints.
 * @domain game
 * @type api-service
 */

/**
 * @summary Starts a new game session on the server.
 * @returns {Promise<{ message: string }>}
 */
const startGame = async (): Promise<{ message: string }> => {
  return api.post('/internal/game/start');
};

/**
 * @summary Submits a user's guess to the server.
 * @param {number} guess The number guessed by the user.
 * @returns {Promise<GuessResult>} The result of the guess.
 */
const makeGuess = async (guess: number): Promise<GuessResult> => {
  return api.post('/internal/game/guess', { guess });
};

export const gameService = {
  startGame,
  makeGuess,
};
