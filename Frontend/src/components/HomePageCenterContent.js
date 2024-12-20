import React from 'react';
function HomePageCenterContent() {
  const textShadow = {
    textShadow: "5px 5px 10px rgba(80, 80, 80, 0.75)",
  };

  return (
    <div className="text-xs sm:text-base">
      <div className="flex flex-wrap items-center p-2 sm:p-10">
        {/* Left Column: Halls Available for Booking */}
        <div className="sm:w-6/12 w-full px-5 sm:px-16 mt-5 sm:mt-0">
          <div
            className="text-3xl sm:text-5xl font-bold text-gray-700"
            style={textShadow}
          >
            HALL BOOKING
          </div>
          <div className="text-base sm:text-xl font-semibold text-gray-800 mt-5 sm:mt-8">
            HALLS AVAILABLE FOR BOOKING
          </div>
          <div className="mt-5">
            <a
              className="text-blue-600 hover:underline hover:cursor-pointer"
              href="/calendar"
            >
              click here
            </a>
            <span> to check availability of halls</span>
          </div>
          <ol className="list-decimal ml-5 mt-5">
            <li>A-Block Conference Hall (1st Floor)</li>
            <li>B-Block OAT (G Floor)</li>
            <li>B-Block Auditorium</li>
            <li>C-Block Fintan Hall (G Floor)</li>
            <li>C-Block Conference Hall</li>
            <li>Delany Hall</li>
            <li>BMS Hall</li>
            <li>Student Cafeteria</li>
            <li>Library Reference Hall</li>
            <li>Board Room</li>
            <li>Computer Lab</li>
          </ol>
        </div>

        {/* Right Column: Steps to Book a Hall */}
        <div className="sm:w-6/12 w-full p-5 sm:p-10">
          <div className="bg-sky-200 p-5 sm:p-10 border border-4 border-black">
            <div className="text-gray-800 font-bold text-xl">
              STEPS TO BOOK A HALL
            </div>
            <ul className="list-disc ml-5 mt-5">
              <li>
                <a
                  className="text-blue-600 hover:underline hover:cursor-pointer"
                  href="/login"
                >
                  click here
                </a>{" "}
                to login
              </li>
              <li>Check the calendar for availability of the halls on specific dates</li>
              <li>Click "Add new request" and fill in the form and submit</li>
              <li>
                You will receive an email upon submitting this form and an email after the request is approved
              </li>
              <li>
                Meanwhile, the status of your record can be tracked from your dashboard
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageCenterContent;
