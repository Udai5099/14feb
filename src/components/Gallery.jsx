import { useEffect, useRef } from "react";
import Confetti from "react-confetti";

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    let scroll = 0;
    const interval = setInterval(() => {
      if (galleryRef.current) {
        scroll += 1;
        galleryRef.current.scrollTop = scroll;

        if (
          galleryRef.current.scrollTop +
            galleryRef.current.clientHeight >=
          galleryRef.current.scrollHeight
        ) {
          clearInterval(interval);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Embedded CSS */}
      <style>{`
        .gallery {
          height: 100vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 16px;
          background: linear-gradient(135deg, #ff758c, #ff7eb3);
          color: white;
        }

        .gallery-header {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .gallery-header h1 {
          font-size: clamp(26px, 7vw, 42px);
          margin-bottom: 10px;
        }

        .final-text {
          font-size: clamp(20px, 6vw, 32px);
          font-weight: bold;
        }

        .photos {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .photos img {
          width: 90%;
          max-width: 320px;
          margin: 20px 0;
          border-radius: 16px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
          .photo-item {
  margin-bottom: 30px;
}

.caption {
  margin-top: 8px;
  font-size: 16px;
  opacity: 0.9;
}
      `}</style>

      <div className="gallery" ref={galleryRef}>
        <Confetti />

        <div className="gallery-header">
          <h1>I LOVE YOU ❤️</h1>
          <h2 className="final-text">You’re stuck with me now ❤️</h2>
        </div>
        <div className="photos">
  <div className="photo-item">
    <img src="/assets/pic1.jpeg" alt="us" />
    <p className="caption">Us ❤️</p>
  </div>

  <div className="photo-item">
    <img src="/assets/pic2.jpeg" alt="us" />
    <p className="caption">Forever 💕</p>
  </div>

  <div className="photo-item">
    <img src="/assets/pic3.jpeg" alt="us" />
    <p className="caption">My favorite person 🥰</p>
  </div>
</div>
      </div>
    </>
  );
}
