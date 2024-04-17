import React, { useState } from "react";

const Notifications = () => {
  const notificationData = [
    {
      active: true,
      name: "Joe Leather Jacket",
      text: "Pending Verification: Advertising documents were received.",
    },
    {
      active: true,
      name: "Reveal Nylon Jacket",
      text: "Successfully Verified!",
    },
    {
      active: false,
      name: "Reveal Nylon Jacket",
      text: "Pending Verification: All documents received",
    },
    {
      active: false,
      name: "Satin Jocky Jacket",
      text: "Successfully Verified!",
    },
    {
      active: false,
      name: "Retro Cruise Jacket",
      text: "Pending Verification: Missing records of design process.",
    },
  ];

  const [notifExpanded, setNotifExpanded] = useState(false);

  const toggleNotifExpand = () => {
    setNotifExpanded(!notifExpanded);
  };

  return (
    <div className="greyBox align-items-baseline">
      {notificationData
        .slice(0, notifExpanded ? notificationData.length : 3)
        .map((element, index) => (
          <div className="row notifRow" key={index}>
            <div className="col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                className="notificationIcon"
              >
                <ellipse
                  cx="5.13158"
                  cy="5"
                  rx="5.13158"
                  ry="5"
                  fill={element.active ? "#CA0CD0" : "#D9D9D9"} // Change color based on active attribute
                />
              </svg>
            </div>
            <div className="col-11">
              <h3>{element.name}</h3>
              <h4>{element.text}</h4>
            </div>
          </div>
        ))}
      {notificationData.length > 3 && (
        <div onClick={toggleNotifExpand} className="row arrowIconRow">
          {notifExpanded ? (
            //arrow up
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9.82488 6.01402L9.82488 6.01402C9.73913 5.92573 9.62272 5.875 9.5 5.875C9.37728 5.875 9.26087 5.92573 9.17512 6.01402L9.17512 6.01402L5.01595 10.2965C5.01578 10.2967 5.01562 10.2969 5.01545 10.297C4.97174 10.3412 4.93708 10.3937 4.91313 10.4513C4.88908 10.5092 4.87621 10.5712 4.87508 10.634C4.87395 10.6968 4.88458 10.7593 4.9065 10.818C4.92843 10.8767 4.9613 10.9306 5.00354 10.9766C5.0458 11.0225 5.09663 11.0596 5.15332 11.0852C5.21003 11.1108 5.27126 11.1244 5.3334 11.125C5.39555 11.1255 5.45701 11.113 5.51414 11.0884C5.57105 11.0638 5.62234 11.0278 5.66525 10.9828C5.66541 10.9826 5.66556 10.9825 5.66571 10.9823L9.5 7.03395L13.3343 10.9823C13.3345 10.9825 13.3346 10.9827 13.3348 10.9828C13.3777 11.0278 13.429 11.0638 13.4859 11.0884C13.543 11.113 13.6044 11.1255 13.6666 11.125C13.7287 11.1244 13.79 11.1108 13.8467 11.0852C13.9034 11.0596 13.9542 11.0225 13.9965 10.9766C14.0387 10.9306 14.0716 10.8767 14.0935 10.818C14.1154 10.7593 14.126 10.6968 14.1249 10.634C14.1238 10.5712 14.1109 10.5092 14.0869 10.4513C14.0629 10.3937 14.0283 10.3412 13.9846 10.297C13.9844 10.2969 13.9842 10.2967 13.984 10.2965L9.82488 6.01402Z"
                fill="#CA0CD0"
                stroke="#CA0CD0"
                strokeWidth="0.25"
              />
            </svg>
          ) : (
            // arrow down
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M8.17512 11.986L8.17512 11.986C8.26087 12.0743 8.37728 12.125 8.5 12.125C8.62272 12.125 8.73913 12.0743 8.82488 11.986L8.82488 11.986L12.984 7.70349C12.9842 7.70332 12.9844 7.70315 12.9845 7.70298C13.0283 7.6588 13.0629 7.60629 13.0869 7.54867C13.1109 7.49082 13.1238 7.42876 13.1249 7.366C13.126 7.30324 13.1154 7.24074 13.0935 7.18204C13.0716 7.12333 13.0387 7.06936 12.9965 7.02342C12.9542 6.97746 12.9034 6.94041 12.8467 6.91479C12.79 6.88916 12.7287 6.87556 12.6666 6.87502C12.6044 6.87447 12.543 6.88699 12.4859 6.91163C12.4289 6.93618 12.3777 6.97219 12.3347 7.0172C12.3346 7.01737 12.3344 7.01753 12.3343 7.01769L8.5 10.9661L4.66571 7.01769C4.66555 7.01752 4.66539 7.01734 4.66522 7.01717C4.62231 6.97217 4.57104 6.93618 4.51414 6.91163C4.45701 6.88699 4.39555 6.87447 4.3334 6.87502C4.27126 6.87556 4.21003 6.88916 4.15332 6.91479C4.09663 6.94041 4.0458 6.97746 4.00354 7.02342C3.9613 7.06936 3.92843 7.12333 3.90651 7.18204C3.88458 7.24074 3.87395 7.30324 3.87508 7.366C3.87621 7.42876 3.88908 7.49082 3.91313 7.54867C3.93708 7.60629 3.97174 7.65879 4.01544 7.70296C4.01561 7.70314 4.01578 7.70331 4.01595 7.70349L8.17512 11.986Z"
                fill="#CA0CD0"
                stroke="#CA0CD0"
                strokeWidth="0.25"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Notifications;
