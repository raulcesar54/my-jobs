//#region
"use client";
import logo from "@/assets/logo.svg";
import { Button, Title } from "@/components";
import { CreateJobForte, SideInformation } from "@/layout";
import { String } from "@/strings";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
//#endregion

export default function CreateJobs() {
  const { LOGO_TITLE, FILL_FIELDS, LESTS_CREATE_JOBS } = String;
  const router = useRouter();

  return (
    <div className="flex flex-1 h-full">
      <main className="pt-[26px] px-[266px] flex flex-1 h-full w-full flex-col gap-[48px] bg-[url('/img/background-white.png')] bg-no-repeat  bg-left-bottom">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.4 }}
          className="flex w-full justify-between cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src={logo} alt="logo image" />
        </motion.div>
        <Title
          subtitle={FILL_FIELDS}
          title={LESTS_CREATE_JOBS}
          strongTitle={LOGO_TITLE}
        />
        <CreateJobForte />
      </main>
      <SideInformation />
    </div>
  );
}
