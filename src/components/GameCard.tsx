import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { GameData } from "../interfaces/InterFaces";
import { useDispatch } from "react-redux";
import {
  addFavorateList,
  removeFavorateList,
} from "../store/slices/favoriteSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const GameCard: React.FC<{ data: GameData }> = ({ data }) => {
  const dispatch = useDispatch();
  const { favoriteList } = useSelector((state: RootState) => state.favorites);
  const existItem = favoriteList?.find((item) => item?.id === data?.id);

  return (
    <div className="relative gameCard max-h-[300px] w-full">
      <img
        className="max-w-screen object-fill w-full  h-auto image"
        src={data.image}
        alt={data.name}
      />

      <div className="flex justify-center items-center gap-3 gameContent w-full h-full flex-col">
        <h3 className="">{data.name}</h3>
        <p>{data.description}</p>
        <button className="">Start</button>
      </div>
      <div className="absolute top-2 right-2">
        <button className="">
          {existItem ? (
            <FaStar
              onClick={() => dispatch(removeFavorateList(data))}
              size={20}
              color="tomato"
            />
          ) : (
            <FaRegStar
              onClick={() => dispatch(addFavorateList(data))}
              size={20}
              className="hover:text-[tomato]"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default GameCard;
