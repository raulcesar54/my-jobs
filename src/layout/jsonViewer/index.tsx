//#region
"use client";
import { PackageIcon } from "@/assets/icons";
import { Error } from "@/components";
import { useFile } from "@/hooks/useFile";
import { String } from "@/strings";
import { format, intervalToDuration } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
//#endregion

export const JsonViewer = () => {
  const { JSON_VIEWER, JSON_ERROR } = String;
  const { data, name, lastModified } = useFile();
  return (
    <div className="flex w-full justify-start flex-1 items-center flex-col overflow-y-hidden pb-4">
      <div className="flex flex-row items-center gap-4 w-full">
        <PackageIcon size={60} strokeWidth={8} />
        <div className="flex flex-col text-left justify-between">
          <h1 className="text-md text-text-white font-bold max-w-sm">{name}</h1>
          <h2 className=" text-text-white font-light text-xs max-w-md mt-1">
            {JSON_VIEWER.LAST_MODIFICATION}
            {lastModified && format(lastModified, "dd/MM/yyyy")}
          </h2>
        </div>
      </div>
      <div className="items-center w-full justify-items-start grid grid-cols-4 mt-6 bg-text-main/40 py-4 px-4 text-sm text-text-white rounded-sm mb-4">
        <p className="col-span-2 justify-start items-start ">Descrição</p>
        <p className="col-span-1 justify-self-center">Data max. conclusão</p>
        <p className="col-span-1 justify-self-center">Tempo estimado</p>
      </div>
      <div className="flex flex-col gap-2 w-full overflow-y-scroll bg-scroll">
        <AnimatePresence>
          {data.map((item, index) => {
            const isFirst = index === 0;
            const actualDate = new Date();
            const getIntervalDates = intervalToDuration({
              start: actualDate,
              end: new Date(item["Data Máxima de conclusão"]),
            });
            const isError =
              getIntervalDates.hours && getIntervalDates.hours > 8;
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                }}
                exit={{ opacity: 0 }}
                key={item.ID}
                className="bg-text-white w-full p-4 items-center justify-items-start justify-self-center grid grid-cols-4 justify-between rounded-sm"
              >
                {isError && (
                  <div className="col-span-4">
                    <Error label={JSON_ERROR} />
                  </div>
                )}
                <h1 className="col-span-2 text-left font-semibold text-sm">
                  {item["Descrição"]}
                </h1>
                <h1 className="col-span-1 text-center justify-self-center text-sm font-light">
                  {format(
                    new Date(item["Data Máxima de conclusão"]),
                    "dd/MM/yyyy hh:mm"
                  )}
                </h1>
                <h1 className="col-span-1 text-right justify-self-center text-sm font-light">
                  {item["Tempo estimado"]}
                </h1>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
