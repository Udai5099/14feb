import { useState } from "react";
import Gallery from "./Gallery";

/* Heartbeat sound */
const heartbeat = new Audio("/music/heartbeat.mp3");
heartbeat.volume = 0.6;

const messages = [
  "Wait… what? 😳",
  "Please reconsider 🥺",
  "I made this for you 💔",
  "Okay now you're hurting me 😭",
  "You know you want to say YES ❤️"
];

const noGifs = [
  "/assets/pranavgif.mp4",
  "/assets/pranavgif2.mp4",
  "/assets/pranavgif3.mp4"
];

export default function Proposal() {
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [currentGif, setCurrentGif] = useState(null);

  const handleNoClick = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);

    const randomIndex = Math.floor(Math.random() * noGifs.length);
    setCurrentGif(noGifs[randomIndex]);
  };

  const handleYesClick = () => {
    const bgMusic = document.getElementById("bg-music");

    if (bgMusic) {
      bgMusic.pause();
      bgMusic.src = "/music/forever.mp3";
      bgMusic.load();
      bgMusic.play().catch(() => {});
    }

    setYesClicked(true);
  };

  if (yesClicked) return <Gallery />;

  return (
    <>
      <style>{`
        body {
          margin: 0;
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: #ffb6d9;
          font-family: 'Segoe UI', sans-serif;
          padding: 20px;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 15px;
          color: white;
        }

        .plead {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 15px;
        }

        .gif-video {
          width: 260px;
          max-width: 80%;
          border-radius: 20px;
          margin: 15px 0;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .button-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
          gap: 50px;
        }

        .yes {
          background-color: #ff2e93;
          color: white;
          padding: 12px 30px;
          font-size: 1rem;
          margin-top: 0;
          min-width: 130px;
          text-align: center;
        }

        .no {
          background-color: #444;
          color: white;
          padding: 12px 30px;
          font-size: 1rem;
          position: static;
          min-width: 130px;
          text-align: center;
        }

        @media (max-width: 768px) {
          .gif-video {
            width: 220px;
          }

          h1 {
            font-size: 1.6rem;
          }
        }
      `}</style>

      <div className="container">

        <h1>Will you be my Valentine? 💖</h1>

        {noCount > 0 && (
          <p className="plead">
            {messages[Math.min(noCount - 1, messages.length - 1)]}
          </p>
        )}

        {currentGif && (
          <video
            key={currentGif}
            src={currentGif}
            autoPlay
            loop
            muted
            playsInline
            className="gif-video"
          />
        )}

        <div className="button-row">

          <button
            className="yes"
            onClick={handleYesClick}
            onMouseEnter={() => heartbeat.play().catch(() => {})}
            style={{
              padding: `${12 + noCount * 5}px ${30 + noCount * 12}px`,
              fontSize: `${1 + noCount * 0.15}rem`
            }}
          >
            YES ❤️
          </button>

          <button
            className="no"
            onClick={handleNoClick}
          >
            NO 😒
          </button>

        </div>

      </div>
    </>
  );
}
