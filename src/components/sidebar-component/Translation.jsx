import React from "react";

const Translation = ({ setActiveTab, setShowModal }) => {
  return (
    <div
      onClick={() => setActiveTab("translation")}
      className="flex flex-col items-center justify-center h-full gap-10 "
    >
      <div className="flex flex-col items-center justify-center gap-10 ">
        <p>Translation</p>
        <div>
          {" "}
          <svg
            width="57"
            height="58"
            viewBox="0 0 57 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.35135 6.27028C2.35135 4.10592 4.10592 2.35135 6.27027 2.35135H32.9189C35.0833 2.35135 36.8378 4.10591 36.8378 6.27027V16.9974C36.8378 18.0367 36.4249 19.0335 35.69 19.7685L21.336 34.1225C20.6011 34.8574 19.6043 35.2703 18.5649 35.2703H6.27027C4.10591 35.2703 2.35135 33.5157 2.35135 31.3514V6.27028Z"
              stroke="white"
              strokeWidth="4.7027"
            />
            <path
              d="M19.5948 37.8674C19.5948 36.8281 20.0076 35.8313 20.7426 35.0963L35.0966 20.7423C35.8315 20.0074 36.8283 19.5945 37.8677 19.5945H50.1623C52.3267 19.5945 54.0812 21.3491 54.0812 23.5134V51.7296C54.0812 53.894 52.3267 55.6486 50.1623 55.6486H23.5137C21.3493 55.6486 19.5948 53.894 19.5948 51.7297V37.8674Z"
              fill="white"
              fillOpacity="0.2"
              stroke="white"
              strokeWidth="4.7027"
            />
            <rect
              x="9.40527"
              y="12.5405"
              width="18.8108"
              height="2.35135"
              fill="white"
            />
            <rect
              x="17.2432"
              y="12.5405"
              width="4.7027"
              height="2.35135"
              transform="rotate(-90 17.2432 12.5405)"
              fill="white"
            />
            <path
              d="M10.189 24.2973C15.4142 24.0361 25.3944 21.6325 23.5133 14.1082"
              stroke="white"
              strokeWidth="2.35135"
            />
            <path
              d="M22.4973 25.865C17.2721 25.6038 13.0919 21.9461 12.5408 17.2434"
              stroke="white"
              strokeWidth="2.35135"
            />
            <path
              d="M41.8146 43.3273H36.1674L35.2622 46H31.404L36.8787 30.8691H41.1464L46.6211 46H42.7199L41.8146 43.3273ZM40.8662 40.4822L38.991 34.9428L37.1374 40.4822H40.8662Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <button
            onClick={() => setShowModal(true)}
            className="text-black rounded-full outline-none bg-lime lg:w-[391px] w-[250px] p-2 px-2 flex items-center justify-center gap-2"
          >
            Start Translation
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                x="-2.5"
                y="-3"
                width="24"
                height="24"
                fill="url(#pattern0)"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_125_556"
                    transform="scale(0.0111111)"
                  />
                </pattern>
                <image
                  id="image0_125_556"
                  width="90"
                  height="90"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO2cTagOURiAH+Fe7nWVsvBvT9lYEWUhpfz/XIossPGbspCFutmwI0XJjhAhkZ0t1/UTC1JIshFJ3HvRFY5OHTmNM98388184z2f96l3M3Nm5j3PnfvOzDkzHyiKoiiKoiiKoiiKoiiWNmAH0AsMAkZADAK3ge3AyFb4M00E7gsQa2rEPWACkZ/J0iUbF3djPrN3CBBocsQ2IuWOAHkmR9iaHSUDAuSZHNFPpKR1SAJGcG4t1RkjOLeW6owRnFtLdcYIzk1EZ/Z5IS23f0YzOmOasB8VHUBF15GiZ3QTUdFCRZsmRFm5iUZFV4SKroiq/j07vX0PCcutEqrqzDRv3x+E5VYJVXVmtrfvJ8Jyq4S8nfnqtRmf4zirve2uFcyt6ISvnezYDbQjWPRTr82iHMc56m13oGBuZcUjYApCRR/z2lzKeIzhwGtvu7kFcytbdrtE0TO9Nj+ABRmOscnb5hUwLMM2PRWJtrELgaIt1xPi7Hshadh1b732e5Al2biXhkSKngS899o+TZE9MVHTnwOjhUmubMK3EdGWJcA3r/0bYDF/mAe88NZ/c8ukSc7a38IUOfCKhGwbN1xp+ekt+w5sFCxZpOgRwDhgKjAHOFWnA1b4XvcILlWySNGm5M5IkByl6HfAl4z7lCJZrOhPTuhj4CZwwr18OMvdI3e4i6Vd3udu74YalPzJDUIlo7/VRZdBVsl2XGVsyj66EuMuKrpAuaj3iH9VRYfJW5PXUZsNKrq45M/AGGrTVePC+1/W6J4GOh4qG9MDy66o6GK3cN38PW5ynr9ZH4toiW/8fw48SW5xt3X2ydSno6TP9ZpOrwCxJhEXA3leduvmB9ZdikH0dgFiTSLWBj7R+/2AcijQh+4YRLe5jyWNkBh05cBnYWLqKUlnCeWjEia4jyWNgLgQyO9IYjQwNKF6IQbRuC9S7XjFrX98gVwdyO1Zos3WQJs1sYguE9NgDATKhi0LhxNhpSbpKHiCRIlpMM4VPK69z1bR1JewsqDoVSqaupL7M8yQ12OUG7/W0kG+sjEDOJkS+1Nkn1XR1DzTlgekHazRfihldM/uR89o8pWNB3Wk2emyJPY9uo9610FQ2JmUhyj/3ZBQHE8pH6dVNEFhywKyNmeQ9TJF9FIVTVDYx8Asd9aJ19AMuZYO5EaUmAgjSkyEESUmwogSE2FEyYAAcXnCjo9ESZ8AeeK+YWkGuwXIyxM7iZR2N4lqIoiHboI6WqZEINtKnkwL0O4+luwVdIEccD8kuzP2M1lRFEVRFEVRFEVRFIWS+AWp+GPF4K32oQAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          </button>
          <p className="p-2 text-sm text-center">Or drag here</p>
        </div>
      </div>
      <li className="text-sm">Audio and video file only</li>
    </div>
  );
};

export default Translation;
