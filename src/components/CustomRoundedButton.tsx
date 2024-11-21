import { CustomRoundedButtonProps } from "../types/interfaces";

function CustomRoundedButton({
  showModal,
  setShowModal,
}: CustomRoundedButtonProps) {
  return (
    <div
      className={`h-14 w-14 absolute top-[95%] right-[47%] flex justify-center items-center rounded-full duration-300 hover:scale-105 z-20 shadow-lg ${
        showModal ? "bg-red-500" : "bg-green-500"
      }`}
      onClick={() => setShowModal(!showModal)}
    >
      <i
        className={`bx text-white text-4xl ${showModal ? "bx-x" : "bx-plus"}`}
      ></i>
    </div>
  );
}

export default CustomRoundedButton;
