import React from "react";
import profile from "./profile.png";
import { sidebarlist } from "./Constraints";
function Sidebar() {
  return (
        
    <div className="w-64 hidden md:inline px-4 py-6 relative">
      <div className="flex gap-3 justify-center items-center ">
        <div>
          <img src={profile} />
        </div>

        <div>
          <p className=" text-xs font-light not-italic  font-roboto">
            Welcome back,
          </p>
          <h3 className=" text-xs   font-semibold text-[#404D61]">Drax</h3>
        </div>

        <div>
          <div className=" w-12 h-10  flex justify-center items-center flex-shrink-0    rounded-md border-[0.5px] border-solid bg-white  border-[#E0E0E0]">
            <svg
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.22 2.5H11.78C11.2496 2.5 10.7409 2.71071 10.3658 3.08579C9.99072 3.46086 9.78 3.96957 9.78 4.5V4.68C9.77964 5.03073 9.68706 5.37519 9.51154 5.67884C9.33602 5.98248 9.08374 6.23464 8.78 6.41L8.35 6.66C8.04596 6.83554 7.70108 6.92795 7.35 6.92795C6.99893 6.92795 6.65404 6.83554 6.35 6.66L6.2 6.58C5.74107 6.31526 5.19584 6.24344 4.684 6.38031C4.17217 6.51717 3.73555 6.85154 3.47 7.31L3.25 7.69C2.98526 8.14893 2.91345 8.69416 3.05031 9.206C3.18717 9.71783 3.52154 10.1544 3.98 10.42L4.13 10.52C4.43228 10.6945 4.68362 10.9451 4.85905 11.2468C5.03448 11.5486 5.1279 11.891 5.13 12.24V12.75C5.1314 13.1024 5.03965 13.449 4.86405 13.7545C4.68844 14.0601 4.43521 14.3138 4.13 14.49L3.98 14.58C3.52154 14.8456 3.18717 15.2822 3.05031 15.794C2.91345 16.3058 2.98526 16.8511 3.25 17.31L3.47 17.69C3.73555 18.1485 4.17217 18.4828 4.684 18.6197C5.19584 18.7566 5.74107 18.6847 6.2 18.42L6.35 18.34C6.65404 18.1645 6.99893 18.0721 7.35 18.0721C7.70108 18.0721 8.04596 18.1645 8.35 18.34L8.78 18.59C9.08374 18.7654 9.33602 19.0175 9.51154 19.3212C9.68706 19.6248 9.77964 19.9693 9.78 20.32V20.5C9.78 21.0304 9.99072 21.5391 10.3658 21.9142C10.7409 22.2893 11.2496 22.5 11.78 22.5H12.22C12.7504 22.5 13.2591 22.2893 13.6342 21.9142C14.0093 21.5391 14.22 21.0304 14.22 20.5V20.32C14.2204 19.9693 14.3129 19.6248 14.4885 19.3212C14.664 19.0175 14.9163 18.7654 15.22 18.59L15.65 18.34C15.954 18.1645 16.2989 18.0721 16.65 18.0721C17.0011 18.0721 17.346 18.1645 17.65 18.34L17.8 18.42C18.2589 18.6847 18.8042 18.7566 19.316 18.6197C19.8278 18.4828 20.2645 18.1485 20.53 17.69L20.75 17.3C21.0147 16.8411 21.0866 16.2958 20.9497 15.784C20.8128 15.2722 20.4785 14.8356 20.02 14.57L19.87 14.49C19.5648 14.3138 19.3116 14.0601 19.136 13.7545C18.9604 13.449 18.8686 13.1024 18.87 12.75V12.25C18.8686 11.8976 18.9604 11.551 19.136 11.2455C19.3116 10.9399 19.5648 10.6862 19.87 10.51L20.02 10.42C20.4785 10.1544 20.8128 9.71783 20.9497 9.206C21.0866 8.69416 21.0147 8.14893 20.75 7.69L20.53 7.31C20.2645 6.85154 19.8278 6.51717 19.316 6.38031C18.8042 6.24344 18.2589 6.31526 17.8 6.58L17.65 6.66C17.346 6.83554 17.0011 6.92795 16.65 6.92795C16.2989 6.92795 15.954 6.83554 15.65 6.66L15.22 6.41C14.9163 6.23464 14.664 5.98248 14.4885 5.67884C14.3129 5.37519 14.2204 5.03073 14.22 4.68V4.5C14.22 3.96957 14.0093 3.46086 13.6342 3.08579C13.2591 2.71071 12.7504 2.5 12.22 2.5V2.5Z"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ul class="list-none">
          {sidebarlist.map((item) => (
            <li className={`flex  justify-between p-4 ${item.name==="Search"?"rounded-[5px] border-solid bg-white":""} items-center cursor-pointer`}>
              <div className="flex   items-center justify-center gap-4">
                <div>{item.icon}</div>
                <div className="text-[#757D8A]  text-sm leading-5   font-normal">
                  {item.name}
                </div>
              </div>
              <div className="inset-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20"
                    stroke="#757D8A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6H20"
                    stroke="#757D8A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke="#757D8A"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Bottom div */}
      <div className=" absolute  bottom-0 left-0 pl-4">
        <div className="flex   items-center justify-start gap-4 p-4">
          <div>
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5.83334C9.10457 5.83334 10 4.93791 10 3.83334C10 2.72877 9.10457 1.83334 8 1.83334C6.89543 1.83334 6 2.72877 6 3.83334C6 4.93791 6.89543 5.83334 8 5.83334Z"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 15.1667V5.83334"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33337 8.5H1.33337C1.33337 10.2681 2.03575 11.9638 3.286 13.214C4.53624 14.4643 6.23193 15.1667 8.00004 15.1667C9.76815 15.1667 11.4638 14.4643 12.7141 13.214C13.9643 11.9638 14.6667 10.2681 14.6667 8.5H12.6667"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#757D8A]  text-sm leading-5   font-normal">
            Support
          </div>
        </div>
        <div className="flex   items-center justify-start gap-4  p-4">
          <div>
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.24 4.92667C13.079 5.76586 13.6502 6.83496 13.8816 7.99879C14.1129 9.16263 13.994 10.3689 13.5398 11.4652C13.0856 12.5614 12.3166 13.4984 11.3299 14.1576C10.3433 14.8168 9.18331 15.1686 7.99671 15.1686C6.8101 15.1686 5.65014 14.8168 4.66349 14.1576C3.67684 13.4984 2.9078 12.5614 2.45362 11.4652C1.99943 10.3689 1.8805 9.16263 2.11185 7.99879C2.3432 6.83496 2.91445 5.76586 3.75337 4.92667"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.83334V8.50001"
                stroke="#757D8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#757D8A]  text-sm leading-5   font-normal">
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
