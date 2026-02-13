import { useEffect, useRef } from "react";
import Proposal from "./components/Proposal";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener("click", startMusic, { once: true });
    window.addEventListener("touchstart", startMusic, { once: true });

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return (
    <>
      {/* Background Music */}
      <audio
        ref={audioRef}
        id="bg-music"
        src="/music/love.mp3"
        loop
        preload="auto"
      />

      <Proposal />
    </>
  );
}
