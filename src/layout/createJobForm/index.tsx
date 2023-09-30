//#region imports
"use client";
import { Button, Input } from "@/components";
import { useFile } from "@/hooks/useFile";
import { String } from "@/strings";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { validationSchema } from "./schema";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { DownloadJson } from "../downloadJson";
//#endregion

export const CreateJobForm = () => {
  const { data, handleAddFile, handleExportJson, hasData } = useFile();
  const router = useRouter();
  const { FORM } = String;

  const methods = useForm({
    resolver: zodResolver(validationSchema),
  });
  useEffect(() => {
    methods.resetField("initialDate");
    methods.resetField("finalDate");
    methods.resetField("description");
  }, [data]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-1 flex-col gap-4 items-center"
    >
      <FormProvider {...methods}>
        <form className="w-full" onSubmit={methods.handleSubmit(handleAddFile)}>
          <Input
            name="fileName"
            placeholder={FORM.FILE_NAME}
            label={FORM.FILE_NAME}
          />
          <div className="flex flex-row gap-0 w-full lg:gap-4 mt-4">
            <Input
              name="initialDate"
              placeholder={FORM.INITIAL_DATE}
              label={FORM.INITIAL_DATE}
              type="datetime-local"
            />
            <Input
              name="finalDate"
              placeholder={FORM.FINAL_DATE}
              label={FORM.FINAL_DATE}
              type="datetime-local"
            />
          </div>
          <div className=" mt-4">
            <Input
              name="description"
              placeholder={FORM.DESCRIPTION}
              label={FORM.DESCRIPTION}
            />
          </div>
          <div className="flex flex-row gap-4 mt-9 max-w-lg items-center w-full">
            <Button label={FORM.ADD_JOB} variant="SECONDARY" type="submit" />
            <Button
              label={FORM.BACK}
              variant="PRIMARY"
              type="button"
              onPress={() => router.back()}
            />
          </div>
        </form>
      </FormProvider>
      <DownloadJson handleExportJson={handleExportJson} isDisabled={hasData} />
    </motion.div>
  );
};
