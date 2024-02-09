import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <div className="lg:hidden relative">
        <div className="h-[calc(100vh-88px)] md:h-auto">
          <div className="h-full flex flex-col justify-between items-center">
            <div className="md:px-8 w-full max-w-2xl mx-auto">
              <div className="w-full h-16 md:h-auto bg-white md:pt-12 px-5 md:p-8 md:rounded-b-xl shadow-md flex items-center">
                <div className="w-full flex items-center justify-center">
                  <div className="h-8 mr-4">
                    <Image
                      src="/images/moove-logo.png"
                      alt="moove logo"
                      className="h-8 w-full object-contain object-center"
                      width="1024"
                      height="768"
                    />
                  </div>
                  <div className="h-12 ml-4">
                    <Image
                      src="/images/pageline-logo.png"
                      alt="pageline logo"
                      className="h-12 w-full object-contain object-center"
                      width="1024"
                      height="768"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/images/moove_gif.gif"
                alt="image"
                className="h-full w-full object-cover object-start"
                width="1024"
                height="768"
              />
            </div>
            <div className="flex-1 w-full bg-[#ED3B25] px-5 py-12">
              <div className="mx-auto max-w-2xl md:px-8">
                <h1 className="mb-4 text-3xl leading-8 font-bold text-white md:text-4xl">
                  Now your are here
                  <br />
                  Let&apos;s talk business!
                </h1>
                <p className="mb-8 text-base font-medium text-white lg:mb-24">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
                  cupiditate expedita quia eos odit laborum neque ut nisi
                  adipisci totam.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/data/MOOVE With Pageline.pdf"
                    target="_blank"
                    className="group inline-flex items-center text-base font-medium text-white hover:underline"
                  >
                    Download our Info Pack
                    <span className="ml-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 -960 960 960"
                        width="20"
                        className="fill-white group-hover:transition-all duration-300 ease-in-out"
                      >
                        <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-full z-10 aspect-video">
        <Image
          src="/images/moove_gif.gif"
          alt="image"
          className="absolute top-0 left-0 z-[-1] h-full w-full object-cover object-start"
          width="1024"
          height="768"
        />
        <div className="absolute inset-0 bg-black/30 -z-10"></div>
        <section className="h-full max-w-[1440px] mx-auto px-8 z-10">
          <div className="w-full h-full flex justify-end">
            <div className="w-full h-full flex flex-col max-w-lg">
              <div className="relative h-full flex flex-col justify-between">
                <div className="w-full bg-white pt-16 p-8 rounded-b-2xl shadow-sm">
                  <div className="w-full flex items-center justify-between">
                    <div className="h-8">
                      <Image
                        src="/images/moove-logo.png"
                        alt="moove logo"
                        className="h-8 w-full object-contain object-center"
                        width="1024"
                        height="768"
                      />
                    </div>
                    <div className="h-12">
                      <Image
                        src="/images/pageline-logo.png"
                        alt="pageline logo"
                        className="h-12 w-full object-contain object-center"
                        width="1024"
                        height="768"
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="lg:pb-28"> */}
                <div className="absolute bottom-32  w-full bg-[#ED3B25] p-8 rounded-2xl shadow-sm">
                  <h1 className="mb-3 text-3xl leading-6 font-bold text-white md:text-4xl">
                    Now your are here
                    <br />
                    Let&apos;s talk business!
                  </h1>
                  <p className="mb-8 text-base font-medium text-white lg:mb-24">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Amet cupiditate expedita quia eos odit laborum neque ut nisi
                    adipisci totam.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/data/MOOVE With Pageline.pdf"
                      target="_blank"
                      className="group inline-flex items-center text-base font-medium text-white hover:underline"
                    >
                      Download our Info Pack
                      <span className="ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 -960 960 960"
                          width="20"
                          className="fill-white group-hover:transition-all duration-300 ease-in-out"
                        >
                          <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
                {/* </div> */}
                {/* <div></div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-[#263D82]">
        <div className="py-8 md:py-12">
          <div className="px-5 md:px-8 max-w-2xl lg:max-w-[1440px] mx-auto">
            <p className="text-white">
              Contact us on&nbsp;
              <Link href="" target="_blank" className="underline">
                WhatsApp
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
