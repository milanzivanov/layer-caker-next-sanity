import { PortableText } from "next-sanity";
import Image from "next/image";
// import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export function Hero({ title, text, image }: HeroProps) {
  return (
    <section className="isolate w-full aspect-[2/1] py-16 overflow-hidden">
      <div className="relative flex flex-col justify-center items-center gap-8 h-full z-20">
        <div className="flex flex-col gap-4 items-center bg-black/50 p-8 mb-[200px]">
          {title ? (
            <h1 className="text-2xl md:text-6xl font-bold text-slate-100 uppercase text-pretty max-w-5xl">
              {title}
            </h1>
          ) : null}
          <div className="prose-lg lg:prose-xl prose-invert flex items-center text-slate-100">
            {text ? <PortableText value={text} /> : null}
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-gray-500 opacity-60 z-10" /> */}
      {image ? (
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={urlFor(image).width(1600).height(800).url()}
          fill
          alt=""
        />
      ) : null}
    </section>
  );
}
