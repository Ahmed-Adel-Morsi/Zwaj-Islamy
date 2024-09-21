import { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import MusicPlayer from "./MusicPlayer";
import {
  ArrowPathIcon,
  MicrophoneIcon,
  NoSymbolIcon,
  PauseIcon,
  PlayIcon,
  StopIcon,
} from "@heroicons/react/20/solid";

const VoiceRecorder = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    pauseRecording,
    resumeRecording,
  } = useReactMediaRecorder({ audio: true });
  const mediaControls = [
    {
      status: "acquiring_media",
      icon: <NoSymbolIcon className="size-4" />,
      title: "قم بالسماح للمايكروفون ليتم التسجيل",
      action: startRecording,
      background: "bg-black/70",
    },
    {
      status: "idle",
      icon: <MicrophoneIcon className="size-4" />,
      title: "بدء التسجيل",
      action: startRecording,
      background: "bg-red-800",
    },
    {
      status: "recording",
      icon: (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-100 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-200"></span>
        </span>
      ),
      title: "يتم التسجيل",
      action: startRecording,
      background: "bg-emerald-500",
    },
    {
      status: "stopped",
      icon: <ArrowPathIcon className="size-4" />,
      title: "إعادة التسجيل",
      action: startRecording,
      background: "bg-orange-600",
    },
    {
      status: "paused",
      icon: <PlayIcon className="size-4" />,
      title: "استئناف التسجيل",
      action: resumeRecording,
      background: "bg-emerald-500",
    },
  ];
  const [currentMediaControl, setCurrentMediaControl] = useState(
    mediaControls[0]
  );

  useEffect(() => {
    const current = mediaControls.find((control) => control.status === status);
    if (current) {
      setCurrentMediaControl(current);
    }
  }, [status]);

  return (
    <>
      <div className="sm:col-span-2">
        <label className="label">تسجيل صوتي لا يتخطي 15 ثانية</label>
        <p className="text-xs font-medium leading-5 text-gray-600">
          ( انا العريس .. اوافق علي الزواج بدون قايمه )
        </p>
        <div className="flex flex-col md:flex-row gap-2 mt-2.5">
          <button
            type="button"
            className={`disabled:cursor-not-allowed flex-center gap-2 px-3.5 py-2 rounded text-sm/6 font-semibold border w-full hover:opacity-95 disabled:hover:opacity-100 grow text-white ${currentMediaControl.background}`}
            onClick={currentMediaControl.action}
            disabled={status === "recording" || status === "acquiring_media"}
          >
            {currentMediaControl.icon}
            {currentMediaControl.title}
          </button>
          {status === "recording" && (
            <>
              <button
                type="button"
                className="flex-center gap-2 px-3.5 py-2 rounded border md:w-1/3 bg-orange-700 text-white hover:opacity-95"
                onClick={pauseRecording}
              >
                <PauseIcon className="size-4" />
                إيقاف مؤقت
              </button>
            </>
          )}
          {["recording", "paused"].includes(status) && (
            <button
              type="button"
              className="flex-center gap-2 px-3.5 py-2 rounded border md:w-1/3 bg-black text-white hover:bg-black/90"
              onClick={stopRecording}
            >
              <StopIcon className="size-4" />
              إنهاء التسجيل
            </button>
          )}
        </div>
      </div>
      {status === "stopped" && mediaBlobUrl && (
        <MusicPlayer url={mediaBlobUrl} />
      )}
    </>
  );
};

export default VoiceRecorder;
