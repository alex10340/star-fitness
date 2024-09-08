import Image from "next/image";

export default function Gallery() {
  return (
    <div className="relative grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto auto-rows-[250px] sm:auto-rows-[300px]">
      <div className="absolute z-50 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
        <h2 className="text-9xl text-center scroll-m-20 font-extrabold drop-shadow-2xl tracking-tight">
          This is&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-rose-500 to-rose-800">
            us.
          </span>
        </h2>
      </div>
      <div className="relative overflow-hidden border rounded-lg sm:row-span-2">
        <Image
          src={"/gallery/gallery01.jpg"}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          alt="Gallery image"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="relative overflow-hidden border rounded-lg">
        <Image
          src={"/gallery/gallery04.jpg"}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          alt="Gallery image"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="relative overflow-hidden border rounded-lg">
        <Image
          src={"/gallery/gallery03.jpg"}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          alt="Gallery image"
          className="object-cover rounded-lg"
        />
        {/* <div className="absolute bottom-0 bg-card p-2 w-full">
          <p className="text-sm font-medium">Bodyweight Strength</p>
        </div> */}
      </div>
      <div className="relative overflow-hidden border rounded-lg sm:col-span-2">
        <Image
          src={"/gallery/gallery08.jpg"}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          alt="Gallery image"
          className="object-cover rounded-lg"
        />
        {/* <div className="absolute bottom-0 bg-card p-2 w-full">
          <p className="text-sm font-medium">Battle Ropes</p>
        </div> */}
      </div>
    </div>
  );
}
