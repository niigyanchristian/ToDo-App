import { useState } from "react";
import { HeaderProps } from "../types/interfaces";

function Header({ data, completedItems, onClick }: HeaderProps) {
  const [date] = useState(new Date());

  const dayOfWeek = date.toLocaleString("default", { weekday: "long" });
  const month = date.toLocaleString("default", { month: "long" });
  const dayOfMonth = date.getDate();

  const getDaySuffix = (day: number) => {
    if (day >= 11 && day <= 13) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const daySuffix = getDaySuffix(dayOfMonth);

  return (
    <div className="p-5 border-b border-gray-200">
      <div className="flex flex-row justify-between items-center mb-1">
        <p className="text-xl font-semibold text-blue-800">
          {dayOfWeek}, {dayOfMonth}{" "}
          <span className="align-super text-sm">{daySuffix}</span>
        </p>
        <p className="text-gray-400">
          <span className="font-bold">{data.length}</span> Tasks
        </p>
      </div>
      <div className="flex flex-row justify-between items-center mb-1">
        <p className="text-gray-400">{month}</p>
        <i
          className={`bx bxs-message-rounded-x text-2xl ${
            completedItems.length > 0 ? "text-red-500" : "text-white"
          }`}
          onClick={() => {
            if (completedItems.length > 0) {
              onClick();
            }
          }}
        ></i>
      </div>
    </div>
  );
}

export default Header;
