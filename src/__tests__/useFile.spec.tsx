import { UseFileProvider, useFile } from "@/hooks/useFile";
import "@testing-library/jest-dom";
import { act, renderHook, waitFor } from "@testing-library/react";

describe("HOOK:UseFile", () => {
  it("handle add file method", async () => {
    const { result } = renderHook(() => useFile(), {
      wrapper: UseFileProvider,
    });
    const mock = {
      fileName: "teste.json",
      finalDate: new Date("3/12/2023 10:20").toString(),
      initialDate: new Date("3/12/2023 11:20").toString(),
      description: "descrição",
    };
    act(() => {
      result.current.handleAddFile(mock);
    });
    await waitFor(() => {
      expect(result.current.name).toEqual("teste.json");
      expect(result.current.data[0].Descrição).toEqual("descrição");
      expect(result.current.data[0]["Data Máxima de conclusão"]).toEqual(
        "Sun Mar 12 2023 10:20:00 GMT-0400 (Horário Padrão do Amazonas)"
      );
      expect(result.current.data[0].ID).toEqual(1);
    });
  });
});
