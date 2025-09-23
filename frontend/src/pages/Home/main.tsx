import { Helmet } from 'react-helmet-async';

/**
 * @page Home
 * @summary The main landing page of the application.
 * @route /
 * @layout RootLayout
 * @type public-page
 * @category marketing
 */
export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Welcome - GuessNumber Game</title>
        <meta name="description" content="The exciting number guessing game." />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to GuessNumber!
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          This is a simple number guessing game. The system picks a random number,
          and your job is to guess it. Ready to test your luck and logic?
        </p>
        {/* A call to action to start the game will go here */}
      </div>
    </>
  );
};
