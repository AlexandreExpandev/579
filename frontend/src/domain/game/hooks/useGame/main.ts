import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { gameService } from '../../services';
import { useGameStore } from '../../stores';

/**
 * @hook useGame
 * @summary Manages game logic, state, and API interactions.
 * @domain game
 * @type domain-hook
 */
export const useGame = () => {
  const {
    status,
    attempts,
    history,
    feedbackMessage,
    startGame: startStoreGame,
    setGuessResult,
    setFeedbackMessage,
    resetGame,
  } = useGameStore();

  const startMutation = useMutation({
    mutationFn: gameService.startGame,
    onSuccess: () => {
      startStoreGame();
    },
    onError: (error) => {
      toast.error(`Error starting game: ${error.message}`);
      resetGame();
    },
  });

  const guessMutation = useMutation({
    mutationFn: (guess: number) => gameService.makeGuess(guess),
    onSuccess: (data) => {
      setGuessResult(data);
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
      setFeedbackMessage(error.message); // Also show in the feedback area
    },
  });

  return {
    // State
    status,
    attempts,
    history,
    feedbackMessage,

    // Mutations
    startGame: startMutation.mutate,
    makeGuess: guessMutation.mutate,

    // Loading States
    isStarting: startMutation.isPending,
    isGuessing: guessMutation.isPending,

    // Actions
    resetGame,
  };
};
