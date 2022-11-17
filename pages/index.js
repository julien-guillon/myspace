import Footer from "../components/layout/Footer";
import Head from "next/head";
import { useDarkMode } from "../hooks/useDarkMode";
import Hero from "../components/layout/Hero";

export default function Home() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <>
      <Head>
        <title>Coucou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-zinc-900 bg-zinc-50 dark:text-white text-zinc-900 z-100">
        <div className="fixed top-4 right-4 lg:top-8 lg:right-16">
          {isDark ? (
            <svg
              onClick={() => setIsDark(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setIsDark(true)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-zinc-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>

        <main className="mx-auto w-11/12 max-w-[90rem]">
          <Hero />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius nisi aliquet consequat tincidunt. Maecenas tincidunt erat
            eget arcu sollicitudin accumsan. Maecenas rhoncus augue vitae
            faucibus auctor. Nunc scelerisque magna id neque suscipit, a viverra
            justo sodales. Praesent fermentum eleifend nulla pretium molestie.
            Praesent nec erat sapien. Suspendisse quis massa velit. Aenean nec
            vulputate orci, ut sollicitudin lorem. Suspendisse vel sapien metus.
            Cras lacus nisi, maximus nec risus ac, sodales suscipit turpis. Sed
            in erat vel metus vulputate eleifend non sed enim. Integer ac
            pulvinar quam, ut rutrum erat. Nulla facilisi. Aenean ac ipsum sed
            orci commodo consequat vel sed neque.
          </p>

          <p>
            Etiam pellentesque sagittis malesuada. Aenean euismod egestas nunc
            nec tempor. Aliquam pharetra leo eget tristique ullamcorper. Vivamus
            sed pellentesque metus. Nulla tempus lacus a euismod commodo.
            Phasellus non condimentum felis, et pulvinar arcu. Aenean efficitur
            tristique massa, id congue leo convallis et. Aenean commodo, nisl
            sit amet congue pellentesque, leo ex ultricies ante, ut consectetur
            turpis justo ut est.
          </p>

          <p>
            Donec erat neque, mattis vitae diam fringilla, porta consequat
            felis. Maecenas at tristique eros. Fusce rutrum vehicula metus.
            Pellentesque dapibus id nunc non luctus. Morbi vitae felis non neque
            egestas ornare eget at orci. Fusce id orci dui. Duis massa ante,
            consequat quis urna a, molestie dapibus odio.
          </p>

          <p>
            Pellentesque sed blandit eros. Etiam nec enim porttitor nibh blandit
            pretium nec elementum turpis. Etiam elit lacus, laoreet sit amet
            eros vel, vulputate tempus lectus. Nullam sed mauris tincidunt
            tortor gravida vestibulum a laoreet est. Ut a ipsum eros. Nunc
            porttitor dictum elit nec consequat. Vestibulum vel justo eleifend
            ligula mattis semper ut eu mauris. Aliquam vitae urna enim. Donec
            tristique semper nisi et convallis. Nam vel leo sapien. Duis dolor
            magna, efficitur eu ante eget, dapibus molestie enim. Phasellus nec
            sollicitudin magna.
          </p>

          <p>
            Vestibulum fringilla libero in neque malesuada, non imperdiet mauris
            egestas. Maecenas et odio non orci fringilla bibendum at non nunc.
            Quisque luctus condimentum lacus, eget mattis sapien maximus eget.
            Vestibulum egestas, arcu vitae placerat convallis, mi lacus
            scelerisque quam, sit amet imperdiet neque nisi tincidunt ante.
            Vestibulum cursus laoreet elit in luctus. Pellentesque ac interdum
            arcu. Sed interdum, neque id mollis luctus, tellus dui congue lorem,
            id vestibulum felis quam tincidunt felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius nisi aliquet consequat tincidunt. Maecenas tincidunt erat
            eget arcu sollicitudin accumsan. Maecenas rhoncus augue vitae
            faucibus auctor. Nunc scelerisque magna id neque suscipit, a viverra
            justo sodales. Praesent fermentum eleifend nulla pretium molestie.
            Praesent nec erat sapien. Suspendisse quis massa velit. Aenean nec
            vulputate orci, ut sollicitudin lorem. Suspendisse vel sapien metus.
            Cras lacus nisi, maximus nec risus ac, sodales suscipit turpis. Sed
            in erat vel metus vulputate eleifend non sed enim. Integer ac
            pulvinar quam, ut rutrum erat. Nulla facilisi. Aenean ac ipsum sed
            orci commodo consequat vel sed neque.
          </p>

          <p>
            Etiam pellentesque sagittis malesuada. Aenean euismod egestas nunc
            nec tempor. Aliquam pharetra leo eget tristique ullamcorper. Vivamus
            sed pellentesque metus. Nulla tempus lacus a euismod commodo.
            Phasellus non condimentum felis, et pulvinar arcu. Aenean efficitur
            tristique massa, id congue leo convallis et. Aenean commodo, nisl
            sit amet congue pellentesque, leo ex ultricies ante, ut consectetur
            turpis justo ut est.
          </p>

          <p>
            Donec erat neque, mattis vitae diam fringilla, porta consequat
            felis. Maecenas at tristique eros. Fusce rutrum vehicula metus.
            Pellentesque dapibus id nunc non luctus. Morbi vitae felis non neque
            egestas ornare eget at orci. Fusce id orci dui. Duis massa ante,
            consequat quis urna a, molestie dapibus odio.
          </p>

          <p>
            Pellentesque sed blandit eros. Etiam nec enim porttitor nibh blandit
            pretium nec elementum turpis. Etiam elit lacus, laoreet sit amet
            eros vel, vulputate tempus lectus. Nullam sed mauris tincidunt
            tortor gravida vestibulum a laoreet est. Ut a ipsum eros. Nunc
            porttitor dictum elit nec consequat. Vestibulum vel justo eleifend
            ligula mattis semper ut eu mauris. Aliquam vitae urna enim. Donec
            tristique semper nisi et convallis. Nam vel leo sapien. Duis dolor
            magna, efficitur eu ante eget, dapibus molestie enim. Phasellus nec
            sollicitudin magna.
          </p>

          <p>
            Vestibulum fringilla libero in neque malesuada, non imperdiet mauris
            egestas. Maecenas et odio non orci fringilla bibendum at non nunc.
            Quisque luctus condimentum lacus, eget mattis sapien maximus eget.
            Vestibulum egestas, arcu vitae placerat convallis, mi lacus
            scelerisque quam, sit amet imperdiet neque nisi tincidunt ante.
            Vestibulum cursus laoreet elit in luctus. Pellentesque ac interdum
            arcu. Sed interdum, neque id mollis luctus, tellus dui congue lorem,
            id vestibulum felis quam tincidunt felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius nisi aliquet consequat tincidunt. Maecenas tincidunt erat
            eget arcu sollicitudin accumsan. Maecenas rhoncus augue vitae
            faucibus auctor. Nunc scelerisque magna id neque suscipit, a viverra
            justo sodales. Praesent fermentum eleifend nulla pretium molestie.
            Praesent nec erat sapien. Suspendisse quis massa velit. Aenean nec
            vulputate orci, ut sollicitudin lorem. Suspendisse vel sapien metus.
            Cras lacus nisi, maximus nec risus ac, sodales suscipit turpis. Sed
            in erat vel metus vulputate eleifend non sed enim. Integer ac
            pulvinar quam, ut rutrum erat. Nulla facilisi. Aenean ac ipsum sed
            orci commodo consequat vel sed neque.
          </p>

          <p>
            Etiam pellentesque sagittis malesuada. Aenean euismod egestas nunc
            nec tempor. Aliquam pharetra leo eget tristique ullamcorper. Vivamus
            sed pellentesque metus. Nulla tempus lacus a euismod commodo.
            Phasellus non condimentum felis, et pulvinar arcu. Aenean efficitur
            tristique massa, id congue leo convallis et. Aenean commodo, nisl
            sit amet congue pellentesque, leo ex ultricies ante, ut consectetur
            turpis justo ut est.
          </p>

          <p>
            Donec erat neque, mattis vitae diam fringilla, porta consequat
            felis. Maecenas at tristique eros. Fusce rutrum vehicula metus.
            Pellentesque dapibus id nunc non luctus. Morbi vitae felis non neque
            egestas ornare eget at orci. Fusce id orci dui. Duis massa ante,
            consequat quis urna a, molestie dapibus odio.
          </p>

          <p>
            Pellentesque sed blandit eros. Etiam nec enim porttitor nibh blandit
            pretium nec elementum turpis. Etiam elit lacus, laoreet sit amet
            eros vel, vulputate tempus lectus. Nullam sed mauris tincidunt
            tortor gravida vestibulum a laoreet est. Ut a ipsum eros. Nunc
            porttitor dictum elit nec consequat. Vestibulum vel justo eleifend
            ligula mattis semper ut eu mauris. Aliquam vitae urna enim. Donec
            tristique semper nisi et convallis. Nam vel leo sapien. Duis dolor
            magna, efficitur eu ante eget, dapibus molestie enim. Phasellus nec
            sollicitudin magna.
          </p>

          <p>
            Vestibulum fringilla libero in neque malesuada, non imperdiet mauris
            egestas. Maecenas et odio non orci fringilla bibendum at non nunc.
            Quisque luctus condimentum lacus, eget mattis sapien maximus eget.
            Vestibulum egestas, arcu vitae placerat convallis, mi lacus
            scelerisque quam, sit amet imperdiet neque nisi tincidunt ante.
            Vestibulum cursus laoreet elit in luctus. Pellentesque ac interdum
            arcu. Sed interdum, neque id mollis luctus, tellus dui congue lorem,
            id vestibulum felis quam tincidunt felis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            varius nisi aliquet consequat tincidunt. Maecenas tincidunt erat
            eget arcu sollicitudin accumsan. Maecenas rhoncus augue vitae
            faucibus auctor. Nunc scelerisque magna id neque suscipit, a viverra
            justo sodales. Praesent fermentum eleifend nulla pretium molestie.
            Praesent nec erat sapien. Suspendisse quis massa velit. Aenean nec
            vulputate orci, ut sollicitudin lorem. Suspendisse vel sapien metus.
            Cras lacus nisi, maximus nec risus ac, sodales suscipit turpis. Sed
            in erat vel metus vulputate eleifend non sed enim. Integer ac
            pulvinar quam, ut rutrum erat. Nulla facilisi. Aenean ac ipsum sed
            orci commodo consequat vel sed neque.
          </p>

          <p>
            Etiam pellentesque sagittis malesuada. Aenean euismod egestas nunc
            nec tempor. Aliquam pharetra leo eget tristique ullamcorper. Vivamus
            sed pellentesque metus. Nulla tempus lacus a euismod commodo.
            Phasellus non condimentum felis, et pulvinar arcu. Aenean efficitur
            tristique massa, id congue leo convallis et. Aenean commodo, nisl
            sit amet congue pellentesque, leo ex ultricies ante, ut consectetur
            turpis justo ut est.
          </p>

          <p>
            Donec erat neque, mattis vitae diam fringilla, porta consequat
            felis. Maecenas at tristique eros. Fusce rutrum vehicula metus.
            Pellentesque dapibus id nunc non luctus. Morbi vitae felis non neque
            egestas ornare eget at orci. Fusce id orci dui. Duis massa ante,
            consequat quis urna a, molestie dapibus odio.
          </p>

          <p>
            Pellentesque sed blandit eros. Etiam nec enim porttitor nibh blandit
            pretium nec elementum turpis. Etiam elit lacus, laoreet sit amet
            eros vel, vulputate tempus lectus. Nullam sed mauris tincidunt
            tortor gravida vestibulum a laoreet est. Ut a ipsum eros. Nunc
            porttitor dictum elit nec consequat. Vestibulum vel justo eleifend
            ligula mattis semper ut eu mauris. Aliquam vitae urna enim. Donec
            tristique semper nisi et convallis. Nam vel leo sapien. Duis dolor
            magna, efficitur eu ante eget, dapibus molestie enim. Phasellus nec
            sollicitudin magna.
          </p>

          <p>
            Vestibulum fringilla libero in neque malesuada, non imperdiet mauris
            egestas. Maecenas et odio non orci fringilla bibendum at non nunc.
            Quisque luctus condimentum lacus, eget mattis sapien maximus eget.
            Vestibulum egestas, arcu vitae placerat convallis, mi lacus
            scelerisque quam, sit amet imperdiet neque nisi tincidunt ante.
            Vestibulum cursus laoreet elit in luctus. Pellentesque ac interdum
            arcu. Sed interdum, neque id mollis luctus, tellus dui congue lorem,
            id vestibulum felis quam tincidunt felis.
          </p>
        </main>
        <Footer />
      </div>
    </>
  );
}
