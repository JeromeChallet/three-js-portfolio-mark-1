import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import ZeroNumber from "@/components/models/ZeroNumber";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center"
      />
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <ZeroNumber />
        </RenderModel>
      </div>
    </main>
  );
}
