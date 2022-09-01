import '../styles/globals.css'
import {NextIntlProvider} from 'next-intl';
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextIntlProvider messages={pageProps.messages} locale={router.locale}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp
