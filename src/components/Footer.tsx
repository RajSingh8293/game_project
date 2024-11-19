import { MdOutlineSportsSoccer } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { FcInvite } from "react-icons/fc";
import { TbLivePhotoFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Modal from "./Modal";
import FavoriteItemList from "./FavoriteItemList";
import { useState } from "react";

export const footerArray = [
  {
    name: "sports",
    icon: <MdOutlineSportsSoccer />,
  },
  {
    name: "favorite",
    icon: <FaRegStar />,
  },
  {
    name: "cashino live",
    icon: <TbLivePhotoFilled />,
  },
  {
    name: "invite",
    icon: <FcInvite />,
  },
  {
    name: "cashier",
    icon: <IoCashOutline />,
  },
];

const Footer = () => {
  const [active, setActive] = useState(false);
  const openModal = (_a: boolean) => {
    setActive(true);
  };
  const closeModal = () => setActive(false);
  const { favoriteList } = useSelector((state: RootState) => state.favorites);

  return (
    <>
      <div className="lg:px-32 px-5  fixed bottom-0 left-0 right-0 bg-white shadow shadow-gray-200">
        <nav className="w-full flex justify-between items-center overflow-x-auto  gap-5 py-4 ">
          <div className="favoriteBox relative ">
            <button
              className={`footer text-gray-500 hover:text-[tomato]  flex flex-col gap-2 justify-center items-center uppercase  font-semibold text-sm`}
            >
              <span className="text-xl">
                <MdOutlineSportsSoccer />
              </span>
              sports
            </button>
          </div>
          <div className="favoriteBox relative ">
            <button
              onClick={() => openModal(true)}
              className={`footer text-gray-500 hover:text-[tomato]  flex flex-col gap-2 justify-center items-center uppercase  font-semibold text-sm`}
            >
              <span className="text-xl">
                <FaRegStar />
              </span>
              favorite
            </button>
            {favoriteList?.length > 0 && (
              <span className="favoriteBadge cursor-pointer hidden text-white text-sm font-bold absolute -top-2 right-2 bg-[#00a6ff] p-1 px-2 rounded-full">
                {favoriteList?.length}
              </span>
            )}
          </div>
          <div className="favoriteBox relative ">
            <button
              className={`footer text-gray-500 hover:text-[tomato]  flex flex-col gap-2 justify-center items-center uppercase  font-semibold text-sm`}
            >
              <span className="text-xl">
                <TbLivePhotoFilled />
              </span>
              cashino live
            </button>
          </div>
          <div className="favoriteBox relative ">
            <button
              className={`footer text-gray-500 hover:text-[tomato]  flex flex-col gap-2 justify-center items-center uppercase  font-semibold text-sm`}
            >
              <span className="text-xl">
                <FcInvite />
              </span>
              invite
            </button>
          </div>
          <div className="favoriteBox relative ">
            <button
              className={`footer text-gray-500 hover:text-[tomato]  flex flex-col gap-2 justify-center items-center uppercase  font-semibold text-sm`}
            >
              <span className="text-xl">
                <IoCashOutline />
              </span>
              cashier
            </button>
          </div>
        </nav>
      </div>

      <Modal isOpen={active} onClose={closeModal}>
        <FavoriteItemList />
      </Modal>
    </>
  );
};

export default Footer;
