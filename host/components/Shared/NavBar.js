import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import iconDev from '../../public/assets/web-dev.png'

export default function NavBar() {
  const router = useRouter();
  const { locale: activeLocale } = router;

  const { pathname, query, asPath } = router;

  return (
    <>
      <header>
        <nav className="w-full border-b bg-gray-300 bg-opacity-70 shadow-md mb-5">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
              <div>
                <a
                  className="flex space-x-2 items-center h-12 w-12"
                >
                  <Image src={iconDev} style={{width: 50, height: 50}} />
                </a>
              </div>

              <div className="space-y-2 border-sky-200 flex -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={activeLocale === "en" ? null : "en"}
                >
                  <a className="bg-white w-full py-2.5 px-5 text-center rounded-md transition active:bg-sky-200 focus:bg-sky-100 sm:w-max mr-3">
                    🇺🇸
                  </a>
                </Link>
                <Link
                  href={{ pathname, query }}
                  as={asPath}
                  locale={activeLocale === "es" ? null : "es"}
                >
                  <a className="bg-white w-full py-2.5 px-5 text-center rounded-md transition active:bg-sky-200 focus:bg-sky-100 sm:w-max">
                    🇪🇸
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
