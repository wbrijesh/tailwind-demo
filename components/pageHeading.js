import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/solid";

export default function PageHeading() {
  return (
    <div className="max-w-6xl mx-auto mt-14">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Back
          </a>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-semibold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Posts
          </h2>
        </div>
        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-light text-white bg-gray-800 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <PlusIcon className="-ml-1 mr-1 h-4 w-4" aria-hidden="true" />
            New post
          </button>
        </div>
      </div>
    </div>
  );
}
