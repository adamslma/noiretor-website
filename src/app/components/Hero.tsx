export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video-bg.mp4" type="video/mp4" />
        Votre navigateur ne prend pas en charge la vidéo HTML5.
      </video>

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60">
        <h1 className="text-amber-200" style={{ fontSize: "12rem" }}>
          Noir & Or
        </h1>
        <p className="text-amber-100" style={{ fontSize: "2rem" }}>
          Restaurant gastronomique français
        </p>
      </div>
    </div>
  );
}
