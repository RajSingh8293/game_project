import { useEffect, useState } from "react";
import { cotegoryList } from "../data/categoryList";
import { IoIosSearch } from "react-icons/io";
import Modal from "./Modal";
import Providers from "./Providers";
import { MdOutlineManageSearch } from "react-icons/md";
import { Filters } from "../interfaces/InterFaces";

const Categories: React.FC<Filters> = ({
  categoryFilterHandler,
  providerFilterHandler,
  searchChangeHandler,
}) => {
  const [active, setActive] = useState(false);
  const openModal = (_a: boolean) => {
    setActive(true);
  };
  const closeModal = () => setActive(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`${
          isSticky && `sticky z-50 top-14 left-0 right-0 bg-white w-full`
        } py-3 px-5`}
      >
        <div className="overflow-hidden  flex items-center justify-between gap-5">
          <div className="lg:w-[200px] border-r flex justify-center items-center">
            <button
              className="mr-8"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <IoIosSearch size={30} />
            </button>
          </div>
          <div>
            <nav className="category flex justify-center lg:justify-end md:justify-end items-center gap-5 p-3 ">
              {cotegoryList.map((data) => (
                <button
                  key={data?.name}
                  onClick={() => categoryFilterHandler(data.name)}
                  className=" uppercase bg-black rounded-lg p-1 px-4 text-white font-semibold text-sm"
                >
                  {data?.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div
          className={`flex gap-3 w-full items-center ${
            showSearchBar ? `block` : `hidden`
          } mt-5 `}
        >
          <div className="flex w-full justify-between px-4 items-center border border-gray-800 rounded-lg">
            <IoIosSearch size={30} />
            <input
              type="text"
              onChange={searchChangeHandler}
              placeholder="Search..."
              className="border-0  outline-none w-full h-full bg-transparent py-2 px-3"
            />
          </div>
          <div>
            <button
              onClick={() => openModal(true)}
              className={`footer p-1 border-2 rounded-lg text-gray-500  flex flex-col gap-2 justify-center items-center hover:border-2 hover:border-black uppercase  font-semibold text-sm`}
            >
              <MdOutlineManageSearch size={25} />
            </button>
          </div>
        </div>
      </section>
      <Modal isOpen={active} onClose={closeModal}>
        <Providers providerFilterHandler={providerFilterHandler} />
      </Modal>
    </>
  );
};

export default Categories;
