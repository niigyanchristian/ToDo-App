import { CustomModalProps } from "../types/interfaces";

function CustomModal({
  showModal,
  handleSubmit,
  handleChange,
  task,
}: CustomModalProps) {
  if (!showModal) {
    return null;
  }
  return (
    <div className=" h-full w-full absolute top-0 left-0 z-10 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="w-[80%] bg-white opacity-100 rounded-lg p-5">
        <h3 className="font-semibold text-lg text-gray-500">Add Task</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a task here"
            className="border border-gray-300 my-5 p-2 outline-none focus:ring-0 w-full rounded-lg"
            value={task}
            onChange={handleChange}
          />
          <div className="place-self-end">
            <button
              type="submit"
              className={`font-bold text-right cursor-pointer ${
                task.length != 0 ? "text-green-400" : "text-gray-200"
              }`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomModal;
