"use server";

import { createStudioSession, clearStudioSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const secret = formData.get("secret")?.toString() || "";
  const success = await createStudioSession(secret);

  if (!success) {
    return { error: "Invalid administrative secret key. Access denied." };
  }

  redirect("/studio");
}

export async function logoutAction() {
  await clearStudioSession();
  redirect("/studio/login");
}
