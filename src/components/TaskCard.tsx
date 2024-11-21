import { TaskCardProps } from "../types/interfaces";

function TaskCard({ item, completedItems, toggleCompletion }: TaskCardProps) {
  return (
    <div
      key={item._id}
      className="px-5 py-10 flex justify-between items-center cursor-pointer border-b border-white transition-all duration-300 transform hover:border-gray-200"
    >
      <p
        className={`text-lg ${
          completedItems.includes(item._id)
            ? "custom-line-through text-gray-400"
            : "text-gray-700"
        }`}
      >
        {item.text}
      </p>

      <i
        onClick={() => toggleCompletion(item._id)}
        className={`bx text-2xl ${
          completedItems.includes(item._id)
            ? "bxs-check-circle text-green-500"
            : "bx-circle text-gray-400"
        }`}
      ></i>
    </div>
  );
}

export default TaskCard;
