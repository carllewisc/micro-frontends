import Head from "next/head";
import { useTranslations } from "next-intl";

// components
import NavBar from "../components/Shared/NavBar";
import MicroFrontend from "../components/Shared/MicroFrontend";
import ClientOnly from "../components/Shared/ClientOnly";
import { Column, Container, Grid, Title } from "../styles";

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../locales/${locale ?? "en"}.json`)).default,
    },
  };
}

export default function Index({ messages }) {
  const t = useTranslations("Index");

  return (
    <div>
      <Head>
        <title>Home Page - Micro Front</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main>
        <Container>
          <Title>{t("title")}</Title>

          <Grid>
            <Column>
              <ClientOnly>
                <MicroFrontend
                  host={process.env.REACT_APP_1}
                  name="App1"
                  messages={messages}
                />
              </ClientOnly>
            </Column>

            <Column>
              <ClientOnly>
                <MicroFrontend
                  host={process.env.REACT_APP_2}
                  name="App2"
                  messages={messages}
                />
              </ClientOnly>
            </Column>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
