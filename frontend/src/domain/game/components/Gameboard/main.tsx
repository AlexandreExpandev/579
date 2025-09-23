import { useEffect } from 'react';
import { Button, LoadingSpinner } from '@/core/components';
import { useGame } from '../../hooks';
import { AttemptsHistory } from '../AttemptsHistory';
import { FeedbackDisplay } from '../FeedbackDisplay';
import { GuessForm } from '../GuessForm';
import { useGameStore } from '../../stores';
import { useGameConfig } from '@/domain/config';

/**
 * @component Gameboard
 * @summary The main UI component for the GuessNumber game.
 * @domain game
 */
export const Gameboard = () => {
  const { status, history, feedbackMessage, startGame, makeGuess, isGuessing, isStarting } = useGame();
  const { minRange, maxRange, setConfig } = useGameStore();

  const { data: gameConfig, isLoading: isConfigLoading } = useGameConfig();

  useEffect(() => {
    if (gameConfig) {
      setConfig(gameConfig);
    }
  }, [gameConfig, setConfig]);

  const isGameFinished = status === 'finished';
  const isGameIdle = status === 'idle';

  if (isConfigLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
        Adivinhe o Número!
      </h1>

      {(isGameIdle || isGameFinished) && (
        <Button onClick={() => startGame()} disabled={isStarting} size="lg">
          {isStarting ? 'Iniciando...' : isGameFinished ? 'Jogar Novamente' : 'Começar a Jogar'}
        </Button>
      )}

      {status !== 'idle' && (
        <>
          <FeedbackDisplay message={feedbackMessage} status={status} />
          <GuessForm
            onSubmit={makeGuess}
            isSubmitting={isGuessing}
            isDisabled={isGameFinished}
            minRange={minRange}
            maxRange={maxRange}
          />
          <AttemptsHistory history={history} />
        </> 
      )}
    </div>
  );
};
