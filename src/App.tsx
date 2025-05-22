import { useEffect, useState } from "react";
import Settings from "./Settings";
import headerColor from "./headercolor";
import nameChanger from "./namechanger";
import { imageChanger } from "./imagechanger";
import Hulp from "./Hulp";
import Timer from "./Timer";
import { useLocalStorage } from "usehooks-ts";

export default function App() {
  const [settings, setSettings] = useState(false);
  const [help, setHelp] = useState(false);

  const [showTip, setShowTip] = useLocalStorage("showTip", true);
  const [backgroundColor] = useLocalStorage("color", "#ff520e");

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (help || settings) return;

      switch (event.key) {
        case "s":
        case "S":
          setSettings(!settings);
          break;
        case "h":
        case "H":
          setShowTip(false);
          setHelp(!help);
          break;
        case "r":
        case "R":
          window.location.href = "/results/main/results";
          break;
        case "p":
        case "P":
          window.location.href = "/planner";
          break;
        case "b":
        case "B":
          window.location.href = "/?module=Messages";
          break;
        case "Escape":
          setSettings(false);
          setHelp(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function closeSettings() {
    setSettings(false);
  }

  function closeHelp() {
    setHelp(false);
  }

  headerColor();
  nameChanger();
  imageChanger();

  return (
    <div>
      {settings ? <Settings closeSettings={closeSettings} /> : null}
      {help ? <Hulp closeHelp={closeHelp} /> : null}
      <Timer />
      {showTip ? (
        <div
          className="fixed bottom-4 right-4 text-white p-4 rounded-lg shadow-lg"
          style={{ backgroundColor: backgroundColor }}
        >
          <h1 className="text-2xl font-bold">Welkom bij FreakySchool</h1>
          <p className="text-sm">
            Dankuwel om FreakySchool te installeren, hier zijn tips hoe je
            FreakySchool gebruikt.
          </p>
          <p className="text-sm">Druk op S voor instellingen</p>
          <p className="text-sm">Druk op H voor hulp</p>
          <p className="text-sm">
            Open het hulpmenu om de tips te laten verdwijnen.
          </p>
        </div>
      ) : null}
    </div>
  );
}
