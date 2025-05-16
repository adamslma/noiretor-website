export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Vidéo de fond */}
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

      {/* Overlay + contenu */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 px-4 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[12rem] text-amber-200">
          Noir & Or
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-100 font-light max-w-2xl">
          Restaurant gastronomique français
        </p>
      </div>
    </div>
  );
}
