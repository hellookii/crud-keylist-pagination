"use server";

import {z} from "zod";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
    userid: z.string().min(6),
    keyid: z.string().min(11),
    expired: z.string().min(4),
 });

 export const saveContact = async (prevSate: any, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
  
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }

    try {
        await prisma.contact.create({
            data: {
                userid: validatedFields.data.userid,
                keyid: validatedFields.data.keyid,
                expired: validatedFields.data.expired,
            },
        });
    } catch (error) {
        return {message: "Failed to create contact"}
    }

    revalidatePath("/contacts");
    redirect("/contacts");
};

export const updateContact = async (
    id: string,
    prevSate: any,
    formData: FormData
  ) => {
    const validatedFields = ContactSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
  
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    try {
      await prisma.contact.update({
        data: {
          userid: validatedFields.data.userid,
          keyid: validatedFields.data.keyid,
          expired: validatedFields.data.expired,
        },
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to update contact" };
    }
  
    revalidatePath("/contacts");
    redirect("/contacts");
  };
  
  export const deleteContact = async (id: string) => {
    try {
      await prisma.contact.delete({
        where: { id },
      });
    } catch (error) {
      return { message: "Failed to delete contact" };
    }
  
    revalidatePath("/contacts");
  };
  