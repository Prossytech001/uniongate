import Image from "next/image";

export default function Map() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <Image
        src="https://res.cloudinary.com/dfnt0w2mn/image/upload/v1732342343/map-placeholder.jpg"
        alt="Office Location Map"
        width={600}
        height={600}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
