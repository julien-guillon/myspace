import Footer from "../components/layout/Footer";
import Head from "next/head";
import { useDarkMode } from "../hooks/useDarkMode";
import Hero from "../components/layout/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faMoon } from "@fortawesome/free-solid-svg-icons";
import useIsMounted from "../hooks/useIsMounted";

export default function Home() {
  const mounted = useIsMounted();
  const [isDark, setIsDark] = useDarkMode();

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Coucou</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-zinc-900 bg-zinc-50 dark:text-white text-zinc-900 z-100">
        <div className="fixed top-4 right-4 lg:top-8 lg:right-16 cursor-pointer">
          {isDark ? (
            <FontAwesomeIcon
              icon={faLightbulb}
              size="xl"
              onClick={() => setIsDark(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              size="xl"
              onClick={() => setIsDark(true)} 
            />
          )}
        </div>
        <main className="mx-auto w-10/12">
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
