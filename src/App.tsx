import { useEffect, useState } from "react";
import Settings from "./Settings";
import { refreshUI } from "./helper";

export default function App() {
  const [settings, setSettings] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "s" || event.key === "S") {
        setSettings(!settings);
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

  refreshUI();

  return (
    <div>{settings ? <Settings closeSettings={closeSettings} /> : null}</div>
  );
}
