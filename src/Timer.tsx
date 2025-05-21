import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Timer() {
  const [timer, setTimer] = useState("");
  const [backgroundColor] = useLocalStorage("color", "blue");

  const timetable = [
    { start: "08:30", end: "09:20" },
    { start: "09:20", end: "10:10" },
    { start: "10:20", end: "11:10" },
    { start: "11:10", end: "12:00" },
    { start: "13:00", end: "13:50" },
    { start: "13:50", end: "14:40" },
    { start: "14:50", end: "15:40" },
    { start: "15:40", end: "22:00" }
  ];

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
        setTimer(`Time left: ${formatTimeRemaining(diff)}`);
      } else {
        setTimer("No lesson now");
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
