import React from "react";

const Send = () => {
  return (
    <div>
      {/* Filter Options: What to match, # of matches*/}
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Set filters htmlFor matching
      </h3>
      <div>
        <label
          htmlFor="num-matches"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Matches per person
        </label>
        <input
          type="number"
          id="num-matches"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
      </div>
      {/* Checkbox list htmlFor way to send: Email, Discord */}
      {/* <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        How would you like to send it?
      </h3> */}
      <label
        htmlFor="send-type"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Send via
      </label>
      <ul
        id="send-type"
        className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
          <div className="flex items-center pl-3">
            <input
              disabled
              id="react-checkbox-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              htmlFor="react-checkbox-list"
              className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Discord
            </label>
          </div>
        </li>
      </ul>
      {/* Create Button */}
      <button
        type="button"
        className="text-white bg-primary-500 hover:bg-primary-500 focus:ring-4 focus:ring-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-500 dark:hover:bg-primary-500 focus:outline-none dark:focus:ring-primary-500"
      >
        Send
      </button>
    </div>
  );
};

export default Send;
