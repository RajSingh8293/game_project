// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
interface Provider {
  providerFilterHandler: (provider: string) => void;
}
const Providers: React.FC<Provider> = ({ providerFilterHandler }) => {
  // const { games } = useSelector((state: RootState) => state.games);
  // const provider = ["all", ...new Set(games.map((data) => data.provider))];
  const provider = [
    "all",
    "Nintendo",
    "CD Projekt Red",
    "Mojang Studios",
    "Rockstar Games",
    "InnerSloth",
    "Blizzard Entertainment",
    "Team Cherry",
  ];
  console.log(provider);

  return (
    <div className="grid grid-cols-2 gap-3 p-5">
      {provider.map((data) => (
        <button
          key={data}
          onClick={() => providerFilterHandler(data)}
          className="btn border hover:bg-gray-400 capitalize py-2 px-4 bg-transparent"
        >
          {data}
        </button>
      ))}
    </div>
  );
};

export default Providers;
