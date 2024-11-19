import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="fixed py-3 px-5 w-full z-50 top-0 left-0 bg-white shadow shadow-gray-200">
      <nav className="flex justify-between items-center ">
        <h1 className="text-[#00A6FF] font-bold text-2xl italic">FUN88</h1>

        <button>
          <IoIosMenu size={32} color="#00A6FF" fontWeight="bold" />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
