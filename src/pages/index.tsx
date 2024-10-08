import Laser from "../components/Laser";
import Header from "../components/Header";
import Main from "../components/Main";
import Head from "next/head";
import Benefits from "../components/Benefits";
import Process from "../components/Process";
import Automation from "../components/Automation";
import Action from "../components/Action";
import Footer from "../components/Footer";
import Prices from "../components/Prices";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ChatBot</title>
        <meta
          name="description"
          content="Página de serviços de landingpages e automação de bots para whatsapp"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      <Laser />
      <Header />
      <Main />
      <Benefits />
      <Process />
      <Automation />
      <Prices />
      <Action />
      <Footer />
    </div>
  );
}
