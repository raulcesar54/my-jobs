//#region
import logo from "@/assets/logo.svg";
import { QuoteIcon } from "@/assets/icons";
import { Title } from "@/components";
import { String } from "@/strings";
import Image from "next/image";
//#endregion

export default function Home() {
  const { LOGO_TITLE, SUBTITLE, TITLE } = String;
  return (
    <>
      <Image src={logo} alt="logo image" />
      <QuoteIcon />
      <Title subtitle={SUBTITLE} title={TITLE} strongTitle={LOGO_TITLE} />
    </>
  );
}
