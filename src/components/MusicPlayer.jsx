import { useEffect, useState } from "react";
import { CustomLabel } from "./CustomForm";
import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/16/solid";

function MusicPlayer({ audio }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      newState ? audio.play() : audio.pause();
      return newState;
    });
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audio.volume = newVolume / 100;
    audio.muted = false;
  };

  const handleSeek = (e) => {
    const newTime = e.target.value;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const timeFormat = (time) => {
    return `${String(Math.floor(time / 60)).padStart(2, "0")}:${String(
      Math.floor(time % 60)
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    const handleMetadataLoad = () => {
      // Ensure duration is updated after metadata is fully loaded
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnd = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleMetadataLoad);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnd);

    // Ensure metadata is ready and recheck the duration
    if (audio.readyState >= 1) {
      setDuration(audio.duration);
    }

    return () => {
      audio.removeEventListener("loadedmetadata", handleMetadataLoad);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audio]);

  return (
    <div className="sm:col-span-2">
      <CustomLabel title="التسجيل الصوتي" />
      <div
        className="mt-2.5 text-gray-900 px-3.5 py-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 flex items-center gap-5"
        dir="ltr"
      >
        <button
          type="button"
          className="bg-emerald-500 text-white p-2 rounded-full shadow-lg hover:bg-emerald-400 transition"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <PauseIcon className="size-6" />
          ) : (
            <PlayIcon className="size-6" />
          )}
        </button>

        {/* Progress Bar */}
        <div className="relative flex-grow mb-1">
          <input
            type="range"
            className="w-full bg-gray-300 appearance-none rounded h-2 cursor-pointer [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:rounded-full"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <div className="absolute w-full flex justify-between text-gray-400 text-sm">
            <span>{timeFormat(currentTime)}</span>
            <span>{timeFormat(duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="group hover:transition flex items-center space-x-2">
          <button
            type="button"
            className="text-gray-400 size-6"
            onClick={() => (audio.muted = !audio.muted)}
          >
            {audio.muted || parseInt(volume) === 0 ? (
              <SpeakerXMarkIcon className="size-full" />
            ) : (
              <svg
                className="size-full"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 5L6 9H3v6h3l5 4V5z" />
                {volume > 50 && <path d="M19.07 4.93a10 10 0 010 14.14" />}
                {volume > 0 && <path d="M15.54 8.46a5 5 0 010 7.07" />}
              </svg>
            )}
          </button>

          <input
            type="range"
            className="w-0 invisible group-hover:visible group-hover:w-20 duration-300 rounded h-2 cursor-pointer appearance-none bg-gray-300 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:invisible group-hover:[&::-webkit-slider-thumb]:visible [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:rounded-full"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
