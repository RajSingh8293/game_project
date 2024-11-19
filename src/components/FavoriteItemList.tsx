import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import GameCard from "./GameCard";

const FavoriteItemList = () => {
  const { favoriteList } = useSelector((state: RootState) => state.favorites);
  return (
    <>
      {favoriteList?.length > 0 ? (
        <div className="">
          <h1 className="text-xl font-bold pb-3">
            Your Favorite List {favoriteList?.length}
          </h1>
          <div className=" grid grid-cols-2  gap-5">
            {favoriteList?.map((data) => (
              <GameCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full">
          <h1 className="text-2xl text-gray-500 font-bold">
            Your Favorite List is Empty
          </h1>
        </div>
      )}
    </>
  );
};

export default FavoriteItemList;
