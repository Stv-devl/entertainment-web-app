import React from 'react';

const BookmarkedIc = () => {
  return (
    <div className="flex items-center justify-center absolute top-4 right-4 w-[32px] h-[32px] z-10 bg-[#161D2F] rounded-full transform rotate-2 opacity-50 cursor-pointer hover:bg-white hover:opacity-100 transition-colors duration-500 group">
      <svg
        width="12"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current text-white group-hover:text-black transition-colors duration-500"
      >
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BookmarkedIc;
