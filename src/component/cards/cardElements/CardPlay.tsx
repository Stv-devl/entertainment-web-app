const CardPlay = () => {
  return (
    <div className="flex items-center justify-center gap-[19px] bg-slate-800 opacity-75 w-[90px] h-[35px] sm:w-[117px] sm:h-[48px] cursor-pointer rounded-full ">
      <svg
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 15C0 6.7125 6.7125 0 15 0C23.2875 0 30 6.7125 30 15C30 23.2875 23.2875 30 15 30C6.7125 30 0 23.2875 0 15ZM21 14.5L12 8V21L21 14.5Z"
          fill="white"
        />
      </svg>
      <p className="text-white text-lg ">Play</p>
    </div>
  );
};

export default CardPlay;
