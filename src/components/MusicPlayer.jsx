import { useEffect, useState, useRef } from "react";
import { PauseIcon, PlayIcon } from "@heroicons/react/20/solid";
import { SpeakerXMarkIcon } from "@heroicons/react/16/solid";
import getBlobDuration from "get-blob-duration";

function MusicPlayer({ url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(new Audio(url));

  const audio = audioRef.current;

  const getDuration = async (url) => {
    try {
      const duration = await getBlobDuration(url);
      setDuration(duration);
    } catch (error) {
      console.error("Failed to get duration:", error);
    }
  };

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      if (newState) {
        audio.play();
      } else {
        audio.pause();
      }
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
    if (url) {
      getDuration(url);
      audio.src = url;
    }
  }, [url, audio]);

  useEffect(() => {
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleEnd = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnd);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnd);
    };
  }, [audio]);

  return (
    <div className="sm:col-span-2">
      <label className="label">التسجيل الصوتي</label>

      <div
        className="mt-2.5 text-gray-900 px-3.5 py-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 flex items-center flex-col-reverse xs:flex-row gap-5"
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
        <div className="relative flex-grow w-full mb-1">
          <input
            type="range"
            className="w-full bg-gray-300 appearance-none rounded h-2 cursor-pointer [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:rounded-full"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            step="0.001"
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
            onClick={() => {
              console.log("Muted:", audio.muted);
              audio.muted = !audio.muted;
              console.log("Muted:", audio.muted);
            }}
          >
            {audio.muted || volume === 0 ? (
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
            className="w-0 invisible group-hover:visible group-hover:w-[30vw] xs:group-hover:w-20 duration-300 rounded h-2 cursor-pointer appearance-none bg-gray-300 [&::-webkit-slider-thumb]:bg-emerald-500 [&::-webkit-slider-thumb]:invisible group-hover:[&::-webkit-slider-thumb]:visible [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-3 [&::-webkit-slider-thumb]:rounded-full"
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
