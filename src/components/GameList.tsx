import React from "react";
import { GameData } from "../interfaces/InterFaces";
import GameCard from "./GameCard";
import Loader from "./Loader";

interface FilteredGames {
  filteredGames: GameData[];
}

const GameList: React.FC<FilteredGames> = ({ filteredGames }) => {
  return (
    <>
      {filteredGames.length === 0 ? (
        <Loader />
      ) : (
        <div className="grid  grid-cols-3 p-5 pb-32 pt-8 gap-5">
          {filteredGames.map((data) => (
            <GameCard key={data.id} data={data} />
          ))}
        </div>
      )}
    </>
  );
};

export default GameList;
