import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Menu from "./components/Menu";
import Input from "./components/Input";

export default function Settings({
  closeSettings
}: {
  closeSettings: () => void;
}) {
  const [colorValue, setColorValue, removeColorValue] = useLocalStorage(
    "color",
    ""
  );
  const [color, setColor] = useState(colorValue);

  const [nameValue, setNameValue, removeNameValue] = useLocalStorage(
    "name",
    ""
  );
  const [name, setName] = useState(nameValue);

  const [oldSrcValue, setOldSrcValue, removeOldSrcValue] = useLocalStorage(
    "oldSrc",
    ""
  );
  const [oldSrc, setOldSrc] = useState(oldSrcValue);

  const [newSrcValue, setNewSrcValue, removeNewSrcValue] = useLocalStorage(
    "newSrc",
    ""
  );
  const [newSrc, setNewSrc] = useState(newSrcValue);

  const [timerValue, setTimerValue] = useLocalStorage("timer", true);

  const [timer, setTimer] = useState(timerValue);

  const [timetableValue, setTimetableValue] = useLocalStorage("timetable", [
    { id: 1, start: "08:30", end: "09:20" },
    { id: 2, start: "09:20", end: "10:10" },
    { id: 3, start: "10:20", end: "11:10" },
    { id: 4, start: "11:10", end: "12:00" },
    { id: 5, start: "13:00", end: "13:50" },
    { id: 6, start: "13:50", end: "14:40" },
    { id: 7, start: "14:50", end: "15:40" },
    { id: 8, start: "15:40", end: "16:30" }
  ]);
  const [timetable, setTimetable] = useState(timetableValue);

  function saveSettings() {
    if (color == "") removeColorValue();
    else setColorValue(color);

    if (name == "") removeNameValue();
    else setNameValue(name);

    if (oldSrc == "") removeOldSrcValue();
    else setOldSrcValue(oldSrc);

    if (newSrc == "") removeNewSrcValue();
    else setNewSrcValue(newSrc);

    setTimerValue(timer);
    setTimetableValue(timetable);

    closeSettings();
  }

  return (
    <Menu>
      <h1 className="text-2xl font-bold">FreakySchool Instellingen</h1>
      <div className="flex flex-col gap-1 items-stretch">
        <Input
          value={color}
          setValue={setColor}
          label="Kleur:"
          placeholder="Gebruik een hex kleurcode of een CSS kleur"
        />
        <Input value={name} setValue={setName} label="Naam" />
        <Input
          value={oldSrc}
          setValue={setOldSrc}
          label="Oude SRC (gebruik inspect element op jouw Smartschool pfp):"
          placeholder="Plak hier de oude src van je pfp"
        />
        <Input
          value={newSrc}
          setValue={setNewSrc}
          label="Nieuwe SRC:"
          placeholder="Plak hier de nieuwe src van je pfp"
        />
        <div className="flex flex-row gap-1 items-center">
          <label htmlFor="timer" className="text-sm">
            Timer:
          </label>
          <input
            id="timer"
            type="button"
            value={timer ? "Aan" : "Uit"}
            onClick={() => {
              setTimer(!timer);
            }}
            className="border border-white rounded-lg p-2 mt-4 dark:!text-white"
          />
        </div>
        <span className="text-sm ml-2 text-gray-500">
          De timer is niet zichtbaar tijdens het weekend
        </span>
        <span className="text-center">Lessenrooster:</span>
        <div className="grid grid-cols-2 items-center justify-center gap-0.5">
          {timetable.map((lesson) => (
            <div
              key={lesson.id}
              className="flex flex-row gap-1 items-center justify-center ml-1"
            >
              <span>{lesson.id}</span>
              <input
                type="time"
                value={lesson.start}
                onChange={(e) => {
                  const newTimetable = timetable.map((l) =>
                    l.id === lesson.id ? { ...l, start: e.target.value } : l
                  );
                  setTimetable(newTimetable);
                }}
                className="border border-gray-300 rounded-lg p-0.5 dark:!text-white"
              />
              <input
                type="time"
                value={lesson.end}
                onChange={(e) => {
                  const newTimetable = timetable.map((l) =>
                    l.id === lesson.id ? { ...l, end: e.target.value } : l
                  );
                  setTimetable(newTimetable);
                }}
                className="border border-gray-300 rounded-lg p-0.5 dark:!text-white"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-xl mt-4"
          onClick={() => saveSettings()}
        >
          Opslaan
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-xl mt-4"
          onClick={() => closeSettings()}
        >
          Annuleer
        </button>
      </div>
      <p className="text-xs">
        Voor sommige instellingen te laten toepassen moet je refreshen
      </p>
    </Menu>
  );
}
