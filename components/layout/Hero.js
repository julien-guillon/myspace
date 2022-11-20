import Image from "next/image";

export default function Hero() {
  return (
    <header className="items-center justify-between pb-40 lg:flex lg:h-screen lg:pb-0 pt-16">
      <section>
        <h1 className="mb-5 xl:mb-7">Coucou, je suis</h1>
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-6xl text-5xl font-bold">
          Julien Guillon.
        </h2>
        <h3 className="2xl:text-6xl xl:text-5xl text-4xl font-bold">
          Je fais des choses sur le web.
        </h3>
        <p className="max-w-lg mt-7">
          Je suis développeur fullstack, basé à Tours. Je mange du pain et je
          fais du lancer de nains chez <a href="https://fr.linkedin.com/company/sasarche" className="font-bold"><span className="link-underline link-underline-white">Agence Référence</span></a>.
        </p>
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
      <aside className="w-full lg:w-4/12 text-center">
        <Image
          alt="gif"
          className="object-cover"
          width={400}
          height={300}
          src="/media/images/75335dfbbfe0cb1c7a77d296931930-unscreen.gif"
        />
      </aside>
    </header>
  );
}
