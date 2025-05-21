import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Settings({
  closeSettings
}: {
  closeSettings: () => void;
}) {
  const [value, setValue, removeValue] = useLocalStorage("color", "");
  const [color, setColor] = useState(value);

  function buttonClick() {
    if (color == "") removeValue();
    else setValue(color);

    alert(
      "Instellingen zijn opgeslagen, refresh de pagina om de veranderingen te zien"
    );
    closeSettings();
  }

  return (
    <div className="flex flex-col fixed top-72 left-1/2 transform -translate-x-1/2 w-7xl h-96 bg-white text-black border rounded-3xl items-center justify-center">
      <h1>FreakySchool Instellingen</h1>
      <input
        type="text"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
        className="border border-gray-300 rounded-lg p-2 mt-4"
        placeholder="Type hier de kleur die je wilt"
      />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        onClick={() => buttonClick()}
      >
        Close
      </button>
    </div>
  );
}
