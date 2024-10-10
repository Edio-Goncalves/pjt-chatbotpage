import Laser from "../components/Laser";
import Header from "../components/Header";
import Main from "../components/Main";
import Head from "next/head";
import First from "../components/FirstAction";
import Automation from "../components/Automation";
import BenefitsFirst from "@/components/BenefitsFirst";
import BenefitsSecond from "@/components/BenefitsSecond";
import BenefitsThird from "@/components/BenefitsThird";
import BenefitsFourth from "@/components/BenefitsFourth";
import Steps from "@/components/Steps";
import Prices from "@/components/Price";
import Second from "@/components/SecondAction";
import Footer from "../components/Footer";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Laser />
      <Header />
      <Main />
      <First />
      <BenefitsFirst />
      <BenefitsSecond />
      <BenefitsThird />
      <BenefitsFourth />
      <Automation />
      <Steps />
      <Prices />
      <Second />
      <Footer />
    </div>
  );
}
