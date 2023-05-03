import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
      <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="">
            <img
              src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
              alt=""
              className="rounded-full"
            />
          </div>

          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
            <p className="text-2xl font-semibold md:text-3xl mb-8">
              {error?.message}
            </p>
            <Link to="/" className="bg-emerald-500 px-3 py-2 rounded-lg">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
