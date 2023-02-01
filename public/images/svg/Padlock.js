import React from "react";

const Padlock = () => {
  return (
    <svg
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      className="inline-block mr-2 relative -top-[3px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7035 16.9998H1.29653C0.578807 16.9998 0 16.4236 0 15.709V7.9178C0 7.20322 0.578807 6.62695 1.29653 6.62695H11.7035C12.4212 6.62695 13 7.20322 13 7.9178V15.709C13 16.4236 12.4212 16.9998 11.7035 16.9998Z"
        fill="#FF077F"
      />
      <path
        d="M9.97888 4.32188C9.97888 2.40866 8.42768 0.864258 6.50604 0.864258C4.58441 0.864258 3.0332 2.40866 3.0332 4.32188V6.62697V8.12527H9.97888V6.62697V4.32188Z"
        stroke="#FF077F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Padlock;
