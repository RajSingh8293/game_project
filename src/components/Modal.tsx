import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen || !children) return null;

  useEffect(() => {
    if (!children) {
      onClose();
    }
  }, [children]);
  return (
    <div
      id="modalOverLay"
      className={`modal ${
        isOpen ? `open` : `closed`
      } fixed top-0 left-0 bottom-0 right-0 w-full h-full  flex items-center justify-center z-50 duration-300 insect-0 bg-gray-500 bg-opacity-50 `}
    >
      <div
        className={`fixed  w-full max-h-screen bg-gray-500 py-32 bg-opacity-50  inset-0 flex justify-center items-center z-50 pt-16 pb-8`}
      >
        <div
          className={`bg-white  ${
            isOpen ? "scale-100 translate-y-0" : "scale-95 -translate-y-10"
          } transition-transform  transform duration-1000 relative removeScrollbar max-w-md w-full max-h-screen h-full p-6 overflow-hidden  overflow-y-auto  rounded-lg shadow-lg`}
        >
          <button
            onClick={onClose}
            className=" z-50 font-bold fixed top-0 right-0 px-4 py-2 bg-black text-white hover:bg-gray-600"
          >
            X
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
