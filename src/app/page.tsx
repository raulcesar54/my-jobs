//#region
"use client";
import logo from "@/assets/logo.svg";
import { Button, Title } from "@/components";
import { ImportFile, SideInformation } from "@/layout";
import { String } from "@/strings";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
//#endregion

export default function Home() {
  const { LOGO_TITLE, SUBTITLE, TITLE, INSERT_JOB } = String;
  const router = useRouter();

  return (
    <div className="flex flex-1 h-full">
      <main className="pt-[26px] px-[266px] flex flex-1 h-full w-full flex-col gap-[48px] bg-[url('/img/background-white.png')] bg-no-repeat  bg-left-bottom">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="flex w-full justify-between"
        >
          <Image src={logo} alt="logo image" />

          <div className="max-w-[860px]">
            <Button
              label={INSERT_JOB}
              variant="SECONDARY"
              onPress={() => router.push("/create-jobs", undefined)}
            />
          </div>
        </motion.div>
        <Title subtitle={SUBTITLE} title={TITLE} strongTitle={LOGO_TITLE} />
        <ImportFile />
      </main>
      <SideInformation />
    </div>
  );
}
