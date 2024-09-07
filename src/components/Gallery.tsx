import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto auto-rows-[250px] sm:auto-rows-[300px]">
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
      </div>
      <div className="relative overflow-hidden border rounded-lg sm:col-span-2">
        <Image
          src={"/gallery/gallery08.jpg"}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          alt="Gallery image"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
