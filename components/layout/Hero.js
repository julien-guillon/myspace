import Image from "next/image";

export default function Hero() {
  return (
    <header className="items-center justify-between pb-40 lg:flex lg:h-screen lg:pb-0">
      <section className="mt-40 max-w-xl lg:mt-0 lg:max-w-lg">
        <h1 className="mb-4 text-5xl font-medium md:text-6xl">
          <span className="block">Coucou.</span> Je suis Julien Guillon.
        </h1>
        <h2 className="text-lg font-medium opacity-60 dark:opacity-80 md:text-xl">
          Je suis développeur fullstack, basé à Tours. Je mange du pain et je
          fais du lancer de nains.
        </h2>

        {/*<div className="mt-4 flex items-center">
          <a href="https://github.com/temiloluwa-js"></a>
          <a href="https://twitter.com/_abdurrazaq_"></a>
          <a
            className="ml-4 text-lg font-medium underline opacity-60 dark:opacity-80 md:text-xl"
            href="/"
          >
            Resume
          </a>
        </div>*/}
      </section>
      <aside className="w-full lg:w-6/12">
        <Image
          alt="gif"
          src="/media/images/75335dfbbfe0cb1c7a77d296931930-unscreen.gif"
          className="object-cover"
        />
      </aside>
    </header>
  );
}
