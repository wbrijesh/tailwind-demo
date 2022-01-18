import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PostsFilter({
  postsCategory,
  sortPostsBy,
  setPostsCategory,
  setSortPostsBy,
}) {
  useEffect(() => {
    console.log("Category: ", postsCategory);
    console.log("Sort by: ", sortPostsBy);
  }, [postsCategory, sortPostsBy]);

  return (
    <div className="max-w-6xl mx-auto mt-4 flex pb-4 border-b border-gray-200">
      <Menu as="div" className="relative mr-4 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
            All posts
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <button
                  onClick={() => setPostsCategory("all")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  All posts
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setPostsCategory("published")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  Published
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setPostsCategory("draft")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  Drafts
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setPostsCategory("scheduled")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  Scheduled
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <Menu as="div" className="relative mr-4 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
            Sort by
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                <button
                  onClick={() => setSortPostsBy("newest")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  Newest
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setSortPostsBy("oldest")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  Oldest
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => setSortPostsBy("title")}
                  type="submit"
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm"
                >
                  Title
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
