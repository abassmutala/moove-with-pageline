import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-white">
      <div className="relative h-full z-10">
        <Image
          src="/images/bg.png"
          alt="image"
          className="absolute top-0 left-0 z-[-1] h-full w-full object-cover object-start"
          width="1024"
          height="768"
        />
        <div className="container relative mx-auto h-full flex flex-col items-end justify-end gap-12 py-8 md:py-12 lg:py-20">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-xl bg-white py-10 px-8 sm:p-12 md:p-12 rounded-md shadow-sm">
                <h1 className="mb-3 text-3xl font-bold text-[#ED3B25] md:text-5xl">
                  Now your are here
                  <br />
                  Let&apos;s talk business!
                </h1>
                <p className="mb-8 text-base font-medium text-body-color lg:mb-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  cupiditate expedita quia eos odit laborum neque ut nisi
                  adipisci totam.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/data/MOOVE With Pageline.pdf"
                    target="_blank"
                    className="group inline-flex items-center text-base font-medium bg-white shadow-1 text-orange-600 hover:text-primary hover:underline"
                  >
                    Download our Info Pack
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                        className="fill-[#ED3B25] group-hover:transition-all duration-300 ease-in-out"
                      >
                        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="w-[576px] bg-white py-10 px-8 sm:p-12 md:p-12 rounded-md shadow-sm">
                <div className="w-full flex items-center justify-end gap-6 md:gap-8">
                  <div className="h-8">
                    <Image
                      src="/images/moove-logo.png"
                      alt="moove logo"
                      className="h-full w-full object-contain object-center"
                      width="1024"
                      height="768"
                    />
                  </div>
                  <div className="h-10">
                    <Image
                      src="/images/pageline-logo.png"
                      alt="pageline logo"
                      className="h-full w-full object-contain object-center"
                      width="1024"
                      height="768"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
