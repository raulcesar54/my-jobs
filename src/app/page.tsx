//#region
"use client";
import logo from "@/assets/logo.svg";
import { Button, Title } from "@/components";
import { ImportFile, SideInformation } from "@/layout";
import { String } from "@/strings";
import Image from "next/image";
import { useRouter } from "next/navigation";
//#endregion

export default function Home() {
  const { LOGO_TITLE, SUBTITLE, TITLE, INSERT_JOB } = String;
  const router = useRouter();

  return (
    <div className="flex flex-1 h-full">
      <main className="pt-[26px] px-[266px] flex flex-1 h-full w-full flex-col gap-[48px] bg-[url('/img/background-white.png')] bg-no-repeat  bg-left-bottom">
        <div className="flex w-full justify-between">
          <Image src={logo} alt="logo image" />

          <div className="max-w-[860px]">
            <Button
              label={INSERT_JOB}
              variant="SECONDARY"
              onPress={() => router.push("/create-jobs", undefined)}
            />
          </div>
        </div>
        <Title subtitle={SUBTITLE} title={TITLE} strongTitle={LOGO_TITLE} />
        <ImportFile />
      </main>
      <SideInformation />
    </div>
  );
}
