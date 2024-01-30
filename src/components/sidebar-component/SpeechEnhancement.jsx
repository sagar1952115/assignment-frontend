import React from "react";

const SpeechEnhancement = ({ setActiveTab, setShowModal }) => {
  return (
    <div
      onClick={() => setActiveTab("speech-enhancement")}
      className="flex flex-col items-center justify-center h-full gap-10 "
    >
      <div className="flex flex-col items-center justify-center gap-10 ">
        <p>Speech Enhancement</p>
        <div>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.765 32.1525C24.3996 32.0009 23.9974 31.9611 23.6094 32.0381C23.2214 32.115 22.8649 32.3054 22.585 32.585L17.1725 38H12C11.4696 38 10.9609 38.2107 10.5858 38.5858C10.2107 38.9609 10 39.4696 10 40V50C10 50.5304 10.2107 51.0391 10.5858 51.4142C10.9609 51.7893 11.4696 52 12 52H17.1725L22.585 57.415C22.8647 57.695 23.2212 57.8858 23.6094 57.9631C23.9976 58.0404 24.3999 58.0007 24.7656 57.8492C25.1312 57.6977 25.4437 57.4412 25.6634 57.112C25.8832 56.7828 26.0003 56.3958 26 56V34C25.9999 33.6044 25.8825 33.2178 25.6627 32.8889C25.4429 32.5601 25.1305 32.3038 24.765 32.1525ZM22 51.1725L19.415 48.585C19.2291 48.3993 19.0085 48.2521 18.7657 48.1517C18.5229 48.0513 18.2627 47.9998 18 48H14V42H18C18.2627 42.0002 18.5229 41.9487 18.7657 41.8483C19.0085 41.7479 19.2291 41.6007 19.415 41.415L22 38.8275V51.1725ZM38 45C37.9979 46.764 37.5356 48.497 36.6587 50.0276C35.7818 51.5582 34.5207 52.8335 33 53.7275C32.5446 53.9542 32.0199 53.9989 31.5328 53.8525C31.0456 53.706 30.6325 53.3794 30.3777 52.9391C30.1228 52.4988 30.0453 51.978 30.1609 51.4826C30.2765 50.9872 30.5766 50.5545 31 50.2725C31.9169 49.7313 32.6768 48.9603 33.2047 48.0357C33.7326 47.111 34.0103 46.0647 34.0103 45C34.0103 43.9353 33.7326 42.889 33.2047 41.9643C32.6768 41.0397 31.9169 40.2687 31 39.7275C30.5766 39.4455 30.2765 39.0128 30.1609 38.5174C30.0453 38.022 30.1228 37.5012 30.3777 37.0609C30.6325 36.6206 31.0456 36.294 31.5328 36.1475C32.0199 36.0011 32.5446 36.0458 33 36.2725C34.5207 37.1665 35.7818 38.4418 36.6587 39.9724C37.5356 41.503 37.9979 43.236 38 45ZM53.415 20.585L39.415 6.585C39.2291 6.39933 39.0085 6.2521 38.7657 6.15173C38.5229 6.05135 38.2627 5.99979 38 6H14C12.9391 6 11.9217 6.42143 11.1716 7.17157C10.4214 7.92172 10 8.93913 10 10V30C10 30.5304 10.2107 31.0391 10.5858 31.4142C10.9609 31.7893 11.4696 32 12 32C12.5304 32 13.0391 31.7893 13.4142 31.4142C13.7893 31.0391 14 30.5304 14 30V10H36V22C36 22.5304 36.2107 23.0391 36.5858 23.4142C36.9609 23.7893 37.4696 24 38 24H50V54H42C41.4696 54 40.9609 54.2107 40.5858 54.5858C40.2107 54.9609 40 55.4696 40 56C40 56.5304 40.2107 57.0391 40.5858 57.4142C40.9609 57.7893 41.4696 58 42 58H50C51.0609 58 52.0783 57.5786 52.8284 56.8284C53.5786 56.0783 54 55.0609 54 54V22C54.0002 21.7373 53.9487 21.4771 53.8483 21.2343C53.7479 20.9915 53.6007 20.7709 53.415 20.585ZM40 12.8275L47.1725 20H40V12.8275Z"
              fill="#F4F4F4"
            />
          </svg>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="text-black rounded-full outline-none bg-lime lg:w-[391px] w-[250px] p-2 px-2 flex items-center justify-center gap-2"
          >
            Start Speech Enahancement
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.87456 4.5C3.87456 4.35082 3.93382 4.20774 4.03931 4.10225C4.1448 3.99676 4.28787 3.9375 4.43706 3.9375H5.56206V2.8125C5.56206 2.66332 5.62132 2.52024 5.72681 2.41475C5.8323 2.30926 5.97537 2.25 6.12456 2.25C6.27374 2.25 6.41681 2.30926 6.5223 2.41475C6.62779 2.52024 6.68706 2.66332 6.68706 2.8125V3.9375H7.81206C7.96124 3.9375 8.10431 3.99676 8.2098 4.10225C8.31529 4.20774 8.37456 4.35082 8.37456 4.5C8.37456 4.64918 8.31529 4.79226 8.2098 4.89775C8.10431 5.00324 7.96124 5.0625 7.81206 5.0625H6.68706V6.1875C6.68706 6.33668 6.62779 6.47976 6.5223 6.58525C6.41681 6.69074 6.27374 6.75 6.12456 6.75C5.97537 6.75 5.8323 6.69074 5.72681 6.58525C5.62132 6.47976 5.56206 6.33668 5.56206 6.1875V5.0625H4.43706C4.28787 5.0625 4.1448 5.00324 4.03931 4.89775C3.93382 4.79226 3.87456 4.64918 3.87456 4.5ZM13.4371 13.5H12.8746V12.9375C12.8746 12.7883 12.8153 12.6452 12.7098 12.5398C12.6043 12.4343 12.4612 12.375 12.3121 12.375C12.1629 12.375 12.0198 12.4343 11.9143 12.5398C11.8088 12.6452 11.7496 12.7883 11.7496 12.9375V13.5H11.1871C11.0379 13.5 10.8948 13.5593 10.7893 13.6648C10.6838 13.7702 10.6246 13.9133 10.6246 14.0625C10.6246 14.2117 10.6838 14.3548 10.7893 14.4602C10.8948 14.5657 11.0379 14.625 11.1871 14.625H11.7496V15.1875C11.7496 15.3367 11.8088 15.4798 11.9143 15.5852C12.0198 15.6907 12.1629 15.75 12.3121 15.75C12.4612 15.75 12.6043 15.6907 12.7098 15.5852C12.8153 15.4798 12.8746 15.3367 12.8746 15.1875V14.625H13.4371C13.5862 14.625 13.7293 14.5657 13.8348 14.4602C13.9403 14.3548 13.9996 14.2117 13.9996 14.0625C13.9996 13.9133 13.9403 13.7702 13.8348 13.6648C13.7293 13.5593 13.5862 13.5 13.4371 13.5ZM17.3746 10.125H16.2496V9C16.2496 8.85082 16.1903 8.70774 16.0848 8.60225C15.9793 8.49676 15.8362 8.4375 15.6871 8.4375C15.5379 8.4375 15.3948 8.49676 15.2893 8.60225C15.1838 8.70774 15.1246 8.85082 15.1246 9V10.125H13.9996C13.8504 10.125 13.7073 10.1843 13.6018 10.2898C13.4963 10.3952 13.4371 10.5383 13.4371 10.6875C13.4371 10.8367 13.4963 10.9798 13.6018 11.0852C13.7073 11.1907 13.8504 11.25 13.9996 11.25H15.1246V12.375C15.1246 12.5242 15.1838 12.6673 15.2893 12.7727C15.3948 12.8782 15.5379 12.9375 15.6871 12.9375C15.8362 12.9375 15.9793 12.8782 16.0848 12.7727C16.1903 12.6673 16.2496 12.5242 16.2496 12.375V11.25H17.3746C17.5237 11.25 17.6668 11.1907 17.7723 11.0852C17.8778 10.9798 17.9371 10.8367 17.9371 10.6875C17.9371 10.5383 17.8778 10.3952 17.7723 10.2898C17.6668 10.1843 17.5237 10.125 17.3746 10.125ZM15.9198 5.625L6.12456 15.4202C5.9136 15.6311 5.62756 15.7495 5.32932 15.7495C5.03108 15.7495 4.74505 15.6311 4.53409 15.4202L3.07862 13.9662C2.97413 13.8617 2.89124 13.7377 2.83468 13.6012C2.77813 13.4647 2.74902 13.3183 2.74902 13.1706C2.74902 13.0228 2.77813 12.8765 2.83468 12.74C2.89124 12.6035 2.97413 12.4795 3.07862 12.375L12.8746 2.57977C12.979 2.47527 13.1031 2.39238 13.2396 2.33583C13.3761 2.27928 13.5224 2.25017 13.6701 2.25017C13.8179 2.25017 13.9642 2.27928 14.1007 2.33583C14.2372 2.39238 14.3613 2.47527 14.4657 2.57977L15.9198 4.03383C16.0243 4.1383 16.1072 4.26233 16.1637 4.39884C16.2203 4.53534 16.2494 4.68166 16.2494 4.82941C16.2494 4.97717 16.2203 5.12348 16.1637 5.25999C16.1072 5.3965 16.0243 5.52053 15.9198 5.625ZM12.0786 7.875L10.6246 6.42023L3.87456 13.1702L5.32862 14.625L12.0786 7.875ZM15.1246 4.82977L13.6698 3.375L11.4198 5.625L12.8746 7.07977L15.1246 4.82977Z"
                fill="#111111"
              />
            </svg>
          </button>
          <p className="p-2 text-sm text-center">Or drag here</p>
        </div>
      </div>
      <li className="text-sm">Audio and video file only</li>
      <p className="underline">View Recently speech enhancement files</p>
    </div>
  );
};

export default SpeechEnhancement;
