import React from "react";

const Alert = ({ type, text }) => {
  return (
    <div
      className="fixed top-10 left-0 right-0 flex
            justify-center items-center"
    >
      <div
        className={`${type === "danger" ? "bg-red-600" : "bg-emerald-600"} p-2 text-indigo-100 leading-none
                lg:rounded-full flex lg:inline-flex justify-center items-center`}
        role="alert"
      >
        <div
          className={`${type === "danger" ? "bg-red-400" : "bg-emerald-400"} flex rounded-full uppercase px-2 py-1
                    font-medium mr-3 text-xs`}
        >
          {type === "danger" ? "Failed" : "Success"}&nbsp;&nbsp;
        </div>
        <p className="mr-2 text-left text-sm ">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
