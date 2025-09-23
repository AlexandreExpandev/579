import { create } from 'zustand';
import { GameStore } from '../types';

const initialState = {
  status: 'idle' as const,
  attempts: 0,
  history: [],
  feedbackMessage: '',
  minRange: 1,
  maxRange: 100,
};

/**
 * @store useGameStore
 * @summary Zustand store for managing the client-side state of the game.
 * @domain game
 * @type domain-store
 * @stateManager zustand
 */
export const useGameStore = create<GameStore>((set) => ({
  ...initialState,

  startGame: () =>
    set((state) => ({
      status: 'active',
      attempts: 0,
      history: [],
      feedbackMessage: `Jogo iniciado! Adivinhe o número entre ${state.minRange} e ${state.maxRange}.`,
    })),

  setGuessResult: (result) =>
    set((state) => {
      let feedbackMessage = '';
      if (result.feedback === 'correct') {
        feedbackMessage = `Você acertou em ${result.attempts} tentativas!`;
      } else if (result.feedback === 'higher') {
        feedbackMessage = 'É maior!';
      } else {
        feedbackMessage = 'É menor!';
      }

      return {
        status: result.status,
        attempts: result.attempts,
        history: [...state.history, result.guess],
        feedbackMessage,
      };
    }),

  setFeedbackMessage: (message) => set({ feedbackMessage: message }),

  setConfig: (config) => set({ minRange: config.minRange, maxRange: config.maxRange }),

  resetGame: () => set((state) => ({ ...initialState, minRange: state.minRange, maxRange: state.maxRange })),
}));
