import Menu from "./components/Menu";

export default function Hulp({ closeHelp }: { closeHelp: () => void }) {
  return (
    <Menu>
      <h1 className="text-3xl font-bold">Hulp</h1>
      <div className="grid grid-cols-2 gap-4 items-center">
        <p className="text-sm font-bold">Actie</p>
        <p className="text-sm font-bold">Toets</p>
        <p>Open Instellingen</p>
        <p>S</p>
        <p>Open Help</p>
        <p>H</p>
        <p>Sluit Menu</p>
        <p>Esc</p>
        <p>Open Resultaten</p>
        <p>R</p>
        <p>Open Planner</p>
        <p>P</p>
        <p>Open Berichten</p>
        <p>B</p>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-xl mt-4"
        onClick={() => closeHelp()}
      >
        Sluit
      </button>
    </Menu>
  );
}
