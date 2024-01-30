import React from "react";

const AddNew = ({ setActiveTab, setShowModal }) => {
  return (
    <div
      onClick={() => setActiveTab("add-new")}
      className="flex flex-col items-center justify-center h-full gap-20 "
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <p>Add New</p>
        <div>
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path opacity="0.2" d="M52 22H38V8L52 22Z" fill="#E0DDD6" />
            <path
              d="M53.415 20.585L39.415 6.585C39.2291 6.39933 39.0085 6.2521 38.7657 6.15173C38.5229 6.05135 38.2627 5.99979 38 6H14C12.9391 6 11.9217 6.42143 11.1716 7.17157C10.4214 7.92172 10 8.93913 10 10V54C10 55.0609 10.4214 56.0783 11.1716 56.8284C11.9217 57.5786 12.9391 58 14 58H50C51.0609 58 52.0783 57.5786 52.8284 56.8284C53.5786 56.0783 54 55.0609 54 54V22C54.0002 21.7373 53.9487 21.4771 53.8483 21.2343C53.7479 20.9915 53.6007 20.7709 53.415 20.585ZM40 12.8275L47.1725 20H40V12.8275ZM50 54H14V10H36V22C36 22.5304 36.2107 23.0391 36.5858 23.4142C36.9609 23.7893 37.4696 24 38 24H50V54ZM39.415 34.585C39.6008 34.7708 39.7482 34.9914 39.8488 35.2342C39.9494 35.477 40.0011 35.7372 40.0011 36C40.0011 36.2628 39.9494 36.523 39.8488 36.7658C39.7482 37.0086 39.6008 37.2292 39.415 37.415C39.2292 37.6008 39.0086 37.7482 38.7658 37.8488C38.523 37.9494 38.2628 38.0011 38 38.0011C37.7372 38.0011 37.477 37.9494 37.2342 37.8488C36.9914 37.7482 36.7708 37.6008 36.585 37.415L34 34.8275V46C34 46.5304 33.7893 47.0391 33.4142 47.4142C33.0391 47.7893 32.5304 48 32 48C31.4696 48 30.9609 47.7893 30.5858 47.4142C30.2107 47.0391 30 46.5304 30 46V34.8275L27.415 37.415C27.2292 37.6008 27.0086 37.7482 26.7658 37.8488C26.523 37.9494 26.2628 38.0011 26 38.0011C25.7372 38.0011 25.477 37.9494 25.2342 37.8488C24.9914 37.7482 24.7708 37.6008 24.585 37.415C24.3992 37.2292 24.2518 37.0086 24.1512 36.7658C24.0506 36.523 23.9989 36.2628 23.9989 36C23.9989 35.7372 24.0506 35.477 24.1512 35.2342C24.2518 34.9914 24.3992 34.7708 24.585 34.585L30.585 28.585C30.7707 28.399 30.9913 28.2515 31.2341 28.1509C31.4769 28.0502 31.7372 27.9984 32 27.9984C32.2628 27.9984 32.5231 28.0502 32.7659 28.1509C33.0087 28.2515 33.2293 28.399 33.415 28.585L39.415 34.585Z"
              fill="#E0DDD6"
            />
          </svg>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="text-black rounded-full outline-none bg-lime lg:w-[391px] w-[250px] p-2 px-2 flex items-center justify-center gap-2"
        >
          Upload the file
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.25 10.6875V14.625C16.25 14.9233 16.1315 15.2095 15.9205 15.4204C15.7095 15.6314 15.4234 15.75 15.125 15.75H3.875C3.57663 15.75 3.29048 15.6314 3.0795 15.4204C2.86853 15.2095 2.75 14.9233 2.75 14.625V10.6875C2.75 10.5383 2.80926 10.3952 2.91475 10.2897C3.02024 10.1842 3.16332 10.125 3.3125 10.125C3.46168 10.125 3.60476 10.1842 3.71025 10.2897C3.81574 10.3952 3.875 10.5383 3.875 10.6875V14.625H15.125V10.6875C15.125 10.5383 15.1843 10.3952 15.2898 10.2897C15.3952 10.1842 15.5383 10.125 15.6875 10.125C15.8367 10.125 15.9798 10.1842 16.0852 10.2897C16.1907 10.3952 16.25 10.5383 16.25 10.6875ZM6.6875 6.18745H8.9375V10.6875C8.9375 10.8366 8.99676 10.9797 9.10225 11.0852C9.20774 11.1907 9.35082 11.25 9.5 11.25C9.64918 11.25 9.79226 11.1907 9.89775 11.0852C10.0032 10.9797 10.0625 10.8366 10.0625 10.6875V6.18745H12.3125C12.4238 6.18754 12.5327 6.1546 12.6252 6.0928C12.7178 6.03099 12.79 5.94311 12.8326 5.84027C12.8752 5.73744 12.8864 5.62427 12.8646 5.51509C12.8429 5.40592 12.7892 5.30565 12.7105 5.22699L9.89797 2.41449C9.84573 2.36219 9.78369 2.3207 9.7154 2.29239C9.64712 2.26408 9.57392 2.24951 9.5 2.24951C9.42608 2.24951 9.35288 2.26408 9.2846 2.29239C9.21631 2.3207 9.15427 2.36219 9.10203 2.41449L6.28953 5.22699C6.21077 5.30565 6.15713 5.40592 6.13539 5.51509C6.11365 5.62427 6.12479 5.73744 6.1674 5.84027C6.21001 5.94311 6.28218 6.03099 6.37476 6.0928C6.46734 6.1546 6.57618 6.18754 6.6875 6.18745Z"
              fill="#111111"
            />
          </svg>
        </button>
      </div>
      <li className="text-sm">Audio and video file only</li>
    </div>
  );
};

export default AddNew;
