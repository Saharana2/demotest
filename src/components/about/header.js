import React from "react";

const Header = () => {
  return (
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Oblivenigma</span>
    </a>
  );
};
