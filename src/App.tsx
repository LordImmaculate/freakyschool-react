import { useEffect, useState } from "react";
import Settings from "./Settings";
import headerColor from "./headercolor";
import nameChanger from "./namechanger";
import { imageChanger } from "./imagechanger";
import Help from "./Help";
import Timer from "./Timer";

export default function App() {
  const [settings, setSettings] = useState(false);
  const [help, setHelp] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (help || settings) return;

      switch (event.key) {
        case "s":
          setSettings(!settings);
          break;
        case "h":
          setHelp(!help);
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
      {help ? <Help closeHelp={closeHelp} /> : null}
      <Timer />
    </div>
  );
}
