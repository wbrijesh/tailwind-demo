import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon, ChatIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#222222]">
      {({ open }) => (
        <>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                  <svg
                    className="block lg:block h-8 w-auto"
                    width="90px"
                    height="100%"
                    viewBox="0 0 105 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.85 28C34.63 28 34.45 27.93 34.31 27.79C34.17 27.65 34.1 27.47 34.1 27.25V7.75C34.1 7.53 34.17 7.35 34.31 7.21C34.47 7.07 34.65 7 34.85 7H38.72C38.94 7 39.12 7.07 39.26 7.21C39.42 7.35 39.5 7.53 39.5 7.75V14.98H46.88V7.75C46.88 7.53 46.95 7.35 47.09 7.21C47.23 7.07 47.41 7 47.63 7H51.5C51.72 7 51.9 7.07 52.04 7.21C52.18 7.35 52.25 7.53 52.25 7.75V27.25C52.25 27.47 52.18 27.65 52.04 27.79C51.9 27.93 51.72 28 51.5 28H47.63C47.41 28 47.23 27.93 47.09 27.79C46.95 27.65 46.88 27.47 46.88 27.25V19.78H39.5V27.25C39.5 27.47 39.42 27.65 39.26 27.79C39.12 27.93 38.94 28 38.72 28H34.85ZM63.5035 28.3C61.0235 28.3 59.1135 27.71 57.7735 26.53C56.4335 25.35 55.7035 23.69 55.5835 21.55C55.5635 21.29 55.5535 20.84 55.5535 20.2C55.5535 19.56 55.5635 19.11 55.5835 18.85C55.7035 16.73 56.4535 15.08 57.8335 13.9C59.2135 12.7 61.1035 12.1 63.5035 12.1C65.9235 12.1 67.8235 12.7 69.2035 13.9C70.5835 15.08 71.3335 16.73 71.4535 18.85C71.4735 19.11 71.4835 19.56 71.4835 20.2C71.4835 20.84 71.4735 21.29 71.4535 21.55C71.3335 23.69 70.6035 25.35 69.2635 26.53C67.9235 27.71 66.0035 28.3 63.5035 28.3ZM63.5035 24.64C64.3835 24.64 65.0335 24.38 65.4535 23.86C65.8735 23.32 66.1135 22.5 66.1735 21.4C66.1935 21.2 66.2035 20.8 66.2035 20.2C66.2035 19.6 66.1935 19.2 66.1735 19C66.1135 17.92 65.8635 17.11 65.4235 16.57C65.0035 16.03 64.3635 15.76 63.5035 15.76C61.8435 15.76 60.9635 16.84 60.8635 19L60.8335 20.2L60.8635 21.4C60.9035 22.5 61.1335 23.32 61.5535 23.86C61.9935 24.38 62.6435 24.64 63.5035 24.64ZM81.8434 28.3C79.3634 28.3 77.4534 27.71 76.1134 26.53C74.7734 25.35 74.0434 23.69 73.9234 21.55C73.9034 21.29 73.8934 20.84 73.8934 20.2C73.8934 19.56 73.9034 19.11 73.9234 18.85C74.0434 16.73 74.7934 15.08 76.1734 13.9C77.5534 12.7 79.4434 12.1 81.8434 12.1C84.2634 12.1 86.1634 12.7 87.5434 13.9C88.9234 15.08 89.6734 16.73 89.7934 18.85C89.8134 19.11 89.8234 19.56 89.8234 20.2C89.8234 20.84 89.8134 21.29 89.7934 21.55C89.6734 23.69 88.9434 25.35 87.6034 26.53C86.2634 27.71 84.3434 28.3 81.8434 28.3ZM81.8434 24.64C82.7234 24.64 83.3734 24.38 83.7934 23.86C84.2134 23.32 84.4534 22.5 84.5134 21.4C84.5334 21.2 84.5434 20.8 84.5434 20.2C84.5434 19.6 84.5334 19.2 84.5134 19C84.4534 17.92 84.2034 17.11 83.7634 16.57C83.3434 16.03 82.7034 15.76 81.8434 15.76C80.1834 15.76 79.3034 16.84 79.2034 19L79.1734 20.2L79.2034 21.4C79.2434 22.5 79.4734 23.32 79.8934 23.86C80.3334 24.38 80.9834 24.64 81.8434 24.64ZM100.725 28C96.5846 28 94.5146 26.03 94.5146 22.09V16.33H92.1746C91.9546 16.33 91.7646 16.26 91.6046 16.12C91.4646 15.98 91.3946 15.8 91.3946 15.58V13.15C91.3946 12.93 91.4646 12.75 91.6046 12.61C91.7646 12.47 91.9546 12.4 92.1746 12.4H94.5146V7.45C94.5146 7.23 94.5846 7.05 94.7246 6.91C94.8846 6.77 95.0646 6.7 95.2646 6.7H98.7446C98.9646 6.7 99.1446 6.77 99.2846 6.91C99.4246 7.05 99.4946 7.23 99.4946 7.45V12.4H103.245C103.465 12.4 103.645 12.47 103.785 12.61C103.945 12.75 104.025 12.93 104.025 13.15V15.58C104.025 15.8 103.945 15.98 103.785 16.12C103.645 16.26 103.465 16.33 103.245 16.33H99.4946V21.67C99.4946 23.15 100.065 23.89 101.205 23.89H103.515C103.735 23.89 103.915 23.96 104.055 24.1C104.195 24.24 104.265 24.42 104.265 24.64V27.25C104.265 27.45 104.195 27.63 104.055 27.79C103.915 27.93 103.735 28 103.515 28H100.725Z"
                      fill="white"
                    ></path>
                    <path
                      d="M5.24825 7C5.10421 7 4.9805 7.10237 4.95355 7.24387L1.06783 27.6439C1.03262 27.8287 1.17434 28 1.36254 28H9L13 7H5.24825Z"
                      fill="white"
                    ></path>
                    <path
                      d="M13 7H5.24825C5.10421 7 4.9805 7.10237 4.95355 7.24387L1.06783 27.6439C1.03262 27.8287 1.17434 28 1.36254 28H9M13 7L22.3168 23.1818C22.4115 23.3462 22.3317 23.5561 22.1517 23.6161L9 28M13 7L9 28"
                      stroke="white"
                      stroke-width="1.2"
                    ></path>
                  </svg>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a
                      href="#"
                      className="text-[#a4a4a4] hover:bg-[#333333] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="text-[#a4a4a4] hover:bg-[#333333] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Builder
                    </a>
                    <a
                      href="#"
                      className="text-[#a4a4a4] hover:bg-[#333333] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Links
                    </a>
                    <a
                      href="#"
                      className="text-gray-100 hover:bg-[#333333] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Posts
                    </a>
                    <a
                      href="#"
                      className="text-[#a4a4a4] hover:bg-[#333333] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Payments
                    </a>
                    <a
                      href="#"
                      className="text-[#a4a4a4] hover:bg-[#333333] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Audience
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="mr-2 p-1 rounded-full text-[#a4a4a4] hover:text-white hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <ChatIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="mr-2 p-1 rounded-full text-[#a4a4a4] hover:text-white hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
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
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
