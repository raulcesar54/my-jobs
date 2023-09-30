import { validationSchema } from "@/layout/createJobForm/schema";
import { JsonImported } from "@/types/importedJson";
import { z } from "zod";

export interface UseContextProps {
  handleAddFile: (data: z.infer<typeof validationSchema>) => void;
  handleOpenFile: () => void;
  handleExportJson: () => void;
  data: JsonImported[];
  hasData: boolean;
  name: string;
  lastModified?: Date | null;
}
