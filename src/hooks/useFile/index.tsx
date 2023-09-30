"use client";
//#region imports
import { JsonImported } from "@/types/importedJson";
import {
  ChangeEvent,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { UseContextProps } from "./props";
import { z } from "zod";
import { validationSchema } from "@/layout/createJobForm/schema";
import { format, intervalToDuration } from "date-fns";
//#endregion

export const UseFileContext = createContext({} as UseContextProps);

export const UseFileProvider: React.FC<{ children: JSX.Element }> = (props) => {
  const { children } = props;
  const [data, setData] = useState<JsonImported[]>([]);
  const [name, setName] = useState("");
  const [lastModified, setLastModified] = useState<Date | null>(null);

  const ref = useRef<any>(null);
  const handleOpenFile = useCallback(() => {
    if (ref) {
      ref.current.click();
    }
  }, [ref]);
  const handleGetFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    const name = event.target.files?.[0].name;
    const lastModified = event.target.files?.[0].lastModified;

    if (uploadedFile) {
      let readFile = new FileReader();
      readFile.onload = function (e) {
        const contents = e?.target?.result;
        const json: JsonImported[] = JSON.parse(contents as string);
        setData(json);
      };
      readFile.readAsText(uploadedFile);
      name && setName(name);
      lastModified && setLastModified(new Date(lastModified || 0));
    }
  };
  const handleAddFile = (values: z.infer<typeof validationSchema>) => {
    const getIntervalDates = intervalToDuration({
      start: new Date(values.initialDate),
      end: new Date(values.finalDate),
    });

    if (!getIntervalDates.hours) return;
    if (getIntervalDates.hours > 8) return;

    const prepareData: JsonImported = {
      ID: (data.length || 0) + 1,
      Descrição: values.description,
      "Data Máxima de conclusão": values.finalDate,
      "Tempo estimado": `${String(getIntervalDates.hours)} horas`,
    };

    setName(values.fileName);
    setLastModified(new Date());
    setData((data) => [...data, prepareData]);
  };

  return (
    <UseFileContext.Provider
      value={{
        handleOpenFile,
        data,
        name,
        lastModified,
        hasData: Boolean(data.length),
        handleAddFile,
      }}
    >
      <input
        suppressHydrationWarning
        type="file"
        ref={ref}
        onChange={handleGetFiles}
        className="hidden absolute"
        accept="application/JSON"
      />
      {children}
    </UseFileContext.Provider>
  );
};

export const useFile = () => useContext(UseFileContext);
