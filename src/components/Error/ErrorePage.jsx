import React from 'react';
import { Link, useRouteError } from 'react-router-dom'
import errroPhot from '../../../public/89191-error-404'
const ErrorePage = () => {
    const { error, status } = useRouteError()
    return (
      <section className="flex items-center min-h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-3xl dark:text-gray-600">
              <span className="sr-only text-green-600">ErroR</span>!!!404!!!!😢
              <br />
              <i className="text-red-600">
                {error.statusText || error.message}
              </i>
            </h2>
            <img src={errroPhot} alt="Error Picture" />
            <p className="text-4xl font-semibold md:text-3xl">Oopsssss!</p>
            <p className="mt-4 mb-8 dark:text-gray-400">
              Sorry, an unexpected error has occurred.
            </p>
            <button>
              <Link
                to="/"
                className="px-8 py-3 ml-10 font-semibold rounded bg-cyan-200 text-gray-900"
              >
                Back to homepage
              </Link>
            </button>
          </div>
        </div>
      </section>
    );
};

export default ErrorePage;