import { useDispatch } from "react-redux";
import Carausal from "../components/Carausal";
import { images } from "../data/carausalImages";
import { gameData } from "../data/data";
import { useEffect } from "react";
import {
  setCategoryFilter,
  setGames,
  setProviderFilter,
  setSearchQuery,
} from "../store/slices/gameSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { GameData } from "../interfaces/InterFaces";
import GameList from "../components/GameList";
import Categories from "../components/Categories";

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.games.filteredGames);

  useEffect(() => {
    const fetchGameList = () => {
      return new Promise<GameData[]>((resolve) => {
        setTimeout(() => {
          return resolve(gameData);
        }, 2000);
      });
    };
    // fetchGameList()
    //   .then((data) => {
    //     dispatch(setGames(data));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    (async () => {
      try {
        const data = await fetchGameList();
        dispatch(setGames(data));
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
    console.log("provider :", e.target.value);
  };

  const categoryFilterHandler = (cat: string) => {
    dispatch(setCategoryFilter(cat));
    // console.log("provider :", provider);
  };
  const providerFilterHandler = (provider: string) => {
    dispatch(setProviderFilter(provider));
    // console.log("provider :", provider);
  };

  return (
    <section className="min-h-screen h-full ">
      <Carausal images={images} interval={3000} />
      {/* <section className="">
        <div className="overflow-hidden  flex items-center justify-between gap-5">
          <div className="lg:w-[200px] border-r flex justify-center items-center">
            <button
              className="mr-8"
              onClick={() => setShowSearchBar(!showSearchBar)}
            >
              <IoIosSearch size={30} />
            </button>
          </div>
          <nav className="category  w-full flex justify-center lg:justify-end md:justify-end items-center gap-5 p-3 ">
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
      </section> */}

      {/* <GameList filteredGames={games} /> */}
      <Categories
        categoryFilterHandler={categoryFilterHandler}
        providerFilterHandler={providerFilterHandler}
        searchChangeHandler={searchChangeHandler}
      />
      <GameList filteredGames={games} />
    </section>
  );
};

export default Home;
