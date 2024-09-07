import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto auto-rows-[300px]">
      <div className="relative overflow-hidden border rounded-lg sm:row-span-2">
        <Image
          src={"/gallery/gallery01.jpg"}
          fill
          alt="Gallery image"
          className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>
      <div className="relative overflow-hidden border rounded-lg">
        <Image
          src={"/gallery/gallery04.jpg"}
          fill
          alt="Gallery image"
          className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>
      <div className="relative overflow-hidden border rounded-lg">
        <Image
          src={"/gallery/gallery03.jpg"}
          fill
          alt="Gallery image"
          className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>
      <div className="relative overflow-hidden border rounded-lg sm:col-span-2">
        <Image
          src={"/gallery/gallery08.jpg"}
          fill
          alt="Gallery image"
          className="object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
        />
      </div>
    </div>
  );
}
