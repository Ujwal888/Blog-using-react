import React from "react";

const navbar = () => {
  return (
    <div>
      <nav class="bg-black border-black px-2 sm:px-4 py-2.5 rounded dark:bg-black">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex float-left p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-white    focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-white dark:hover:bg-white dark:focus:white"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border border-black rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-black">
              <li>
                <a
                  href="/"
                  class="  block py-2 pl-3 pr-4 text-white bg-white rounded md:bg-transparent md:text-blue-200 md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  class="   block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="portfolio"
                  class="  block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="blog"
                  class="  block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="contact"
                  class="  block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-200 first-letter: md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
