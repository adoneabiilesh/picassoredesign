"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";

import { Textarea } from "@/components/ui/textarea";

import { PiCheckLight, PiSmiley } from "react-icons/pi";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  job_title: z.string(),
  company_name: z.string(),
  help: z.enum([
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  company_name: string;
  help:  "Learn More" | "Get a Quote" | "Other";
  info: string;
  terms: boolean;
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      job_title: "",
      company_name: "",
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className=" w-full md:items-right md:justify-right bg-red-800 antialiased bg-grid-white/[0.02] relative overflow-hidden ">
      <Header/>
      <div className="md:flex items-start justify-right md:py-20 px-6">
        <div className="w-1/2 text-7xl">
          <div className="text-9xl font-medium  w-full md:w-2/3  pb-5 md:text-9xl bg-clip-text text-[#EADEAF]">
          siamo più estranei
          </div>
          <div className=" text-white md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4">
              <div className=" font-normal pb-4 sm:text-3xl text-3xl ">
              Siamo sempre pronti ad assisterti. Per qualsiasi informazione o richiesta, non esitare a contattarci utilizzando uno dei metodi seguenti.
              </div>

            </div>

            <style jsx>{`
        br + br {
          margin-top: 10px; /* Adjust this value as needed */
        }
      `}</style>

          </div>
          <div className="flex gap-12  border-2 py-4 px-4 text-lg ">
          Indirizzo:
Via Roma, 123
00100 Roma, Italia<br/>

Telefono:
+39 06 1234567<br/>

Email:
info@tuaazienda.it<br/>

Orari di Apertura:
Lunedì - Venerdì: 9:00 - 17:00<br/>
Sabato-Domenica: Chiuso<br/>
Modulo di Contatto:<br/>
Compila il modulo sottostante e ti risponderemo al più presto possibile.
          </div>

          
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
            space-y-4
            h-full
            rounded-3xl p-10
            md:w-full
          
            
            
                     
                        "
            >
              <div className="md:flex items-right gap-6 ">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-xl bg-clip-text uppercase font-light">
                        Nome 
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="items-center justify-center  w-full">
                      <FormLabel className="text-lg bg-clip-text uppercase font-light">
                      cognome 
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="items-right justify-right w-full">
                    <FormLabel className="text-lg bg-clip-text uppercase font-light">
                      Email 
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem className="items-right justify-right  w-full">
                    <FormLabel className="text-lg bg-clip-text uppercase font-light">
                      azienda
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />


              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem className="items-right justify-right w-full">
                    <FormLabel className="text-lg bg-clip-text  uppercase font-light">
                    nota veloce
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex gap-4 items-center">
                <div>
                  <Checkbox
                    className="
                outline
                border-2
                text-sm
                font-light
                bg-clip-text text-transparent text-[#EADEAF]
                "
                  />
                </div>
                <div className="text-sm font-light  md:w-3/4 mb-1 bg-clip-text  text-[#EADEAF]">
                  I agree to PICASSO  &apos; sending marketing communications related
                  to Xaable
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="
                            text-lg
                            font-xl
                        
                            "
                  disabled={loading}
                  onClick={() => form.handleSubmit((onSubmit))}
                >
                  Submit
                </Button>
              </div>
            </form>
          ) : (
            <>
              <div
                className="
        text-xl 
        
        md:text-2xl 
        flex 
        items-center
        justify-center
        flex-col
        

 
        px-8

        "
              >
                <div className="w-80 py-20">
                  <PiSmiley className="text-6xl text-[#EADEAF] mx-auto" />

                  <div className= "text-[#EADEAF] font-light  text-center justify-center mx-auto py-10">
                    We&apos;ve received your inquiry and will be contacting you
                    via email shortly.
                  </div>
                </div>
              </div>
            </>
          )}
        </Form>
      </div>
      <Footer />
    </div>
  );
}

