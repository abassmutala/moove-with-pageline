import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-white dark:bg-dark">
      <div className="relative h-full z-10 pb-20 pt-[150px] lg:pb-[120px] lg:pt-[210px]">
        <Image
          src="https://www.globalsuzuki.com/automobile/lineup/s-presso/img/slide/key_img02.jpg"
          alt="image"
          className="absolute top-0 left-0 z-[-1] h-full w-full object-cover object-center"
          width="1024"
          height="768"
        />
        <div className="container relative my-12 mx-auto h-full flex flex-col items-end justify-center gap-12">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-xl bg-white dark:bg-dark-2 py-10 px-8 sm:p-12 md:p-12">
                {/* <span className="block mb-3 text-base font-medium text-primary">
                  Your Business Revenue to The Moon
                </span> */}
                <h1 className="mb-3 text-3xl font-bold leading-[1.208] text-dark dark:text-white md:text-4xl">
                  Now your are here, let&apos;s talk business!
                </h1>
                <p className="mb-8 text-base font-medium text-body-color dark:text-dark-6 lg:mb-10">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  cupiditate expedita quia eos odit laborum neque ut nisi
                  adipisci totam.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/data/MOOVE With Pageline.pdf"
                    target="_blank"
                    className="group inline-flex items-center px-6 py-3 text-base font-medium bg-white dark:bg-dark-2 shadow-1 dark:shadow-none text-orange-600 dark:text-white hover:text-primary hover:underline"
                  >
                    Download our Info Pack
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                        className="fill-orange-600 group-hover:transition-all duration-300 ease-in-out"
                      >
                        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
  );
}
