import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Timer() {
  const [timer, setTimer] = useState("");
  const [backgroundColor] = useLocalStorage("color", "#ff520e");

  const [showTimer] = useLocalStorage("timer", true);

  if (!showTimer) return null;

  const [timetable] = useLocalStorage("timetable", [
    { id: 1, start: "08:30", end: "09:20" },
    { id: 2, start: "09:20", end: "10:10" },
    { id: 3, start: "10:20", end: "11:10" },
    { id: 4, start: "11:10", end: "12:00" },
    { id: 5, start: "13:00", end: "13:50" },
    { id: 6, start: "13:50", end: "14:40" },
    { id: 7, start: "14:50", end: "15:40" },
    { id: 8, start: "15:40", end: "16:30" }
  ]);

  function parseTimeToDate(timeStr: string) {
    const [hour, minute] = timeStr.split(":").map(Number);
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hour,
      minute,
      0,
      0
    );
  }

  function formatTimeRemaining(ms: number) {
    if (ms <= 0) return "00:00";
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      let currentLesson = null;
      for (const lesson of timetable) {
        const startDate = parseTimeToDate(lesson.start);
        const endDate = parseTimeToDate(lesson.end);
        if (now >= startDate && now < endDate) {
          currentLesson = { start: startDate, end: endDate };
          break;
        }
      }
      if (currentLesson) {
        const diff = currentLesson.end.getTime() - now.getTime();
        setTimer(`Tijd over: ${formatTimeRemaining(diff)}`);
      } else {
        setTimer("Momenteel geen les");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed bottom-10 left-10 text-white text-2xl p-4 rounded-lg shadow-lg"
      style={{ backgroundColor: backgroundColor }}
    >
      {timer}
    </div>
  );
}
