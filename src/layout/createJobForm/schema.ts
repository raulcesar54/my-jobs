import { intervalToDuration, isBefore, isToday } from "date-fns";
import { z } from "zod";

export const validationSchema = z
  .object({
    fileName: z
      .string()
      .min(1, { message: "Nome do arquivo JSON é obrigatório" }),
    initialDate: z
      .string({ required_error: "Data inicial é obrigatório" })
      .min(1, { message: "Data inicial é obrigatório" }),
    finalDate: z
      .string({ required_error: "Data final é obrigatório" })
      .min(1, { message: "Data final é obrigatório" }),
    description: z
      .string({ required_error: "Descrição é obrigatório" })
      .min(1, { message: "Descrição é obrigatório" }),
  })
  .superRefine((values, ctx) => {
    if (values.initialDate && values.finalDate) {
      const getIntervalDates = intervalToDuration({
        start: new Date(values.initialDate),
        end: new Date(values.finalDate),
      });
      if (String(getIntervalDates.hours) === "0") {
        ctx.addIssue({
          fatal: true,
          message: "A data limite deve ser no mínimo 1 hora",
          path: ["finalDate"],
          code: "custom",
        });
        return false;
      }
      if (getIntervalDates.hours !== null) return;
      if (getIntervalDates.hours > 8) {
        ctx.addIssue({
          fatal: true,
          message: "Data limite não pode passar de 8 horas",
          path: ["finalDate"],
          code: "custom",
        });
        return false;
      }
      const finalIsBeforeInitial = isBefore(
        new Date(values.finalDate),
        new Date(values.initialDate)
      );
      if (finalIsBeforeInitial) {
        ctx.addIssue({
          fatal: true,
          message: "Data final não pode ser anterior a data inicial.",
          path: ["finalDate"],
          code: "custom",
        });

        return false;
      }
    }

    return true;
  });
