import type { PageServerLoad } from "./$types";
import { superValidate } from "sveltekit-superforms/server";
import { formSchema } from "./schema";
export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(formSchema),
  };
};