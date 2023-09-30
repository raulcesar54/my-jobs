import { JsonImported } from "@/types/importedJson";

export interface UseContextProps {
  handleAddFile: (data: any) => void
  handleOpenFile: () => void;
  handleExportJson: () => void;
  data: JsonImported[];
  hasData: boolean;
  name: string;
  lastModified?: Date | null;

}
