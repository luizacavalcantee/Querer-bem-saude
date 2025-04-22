"use client";

import { LogoRosa, PolyanaCircle } from "@/assets/index";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

export default function ContactSession() {
  return (
    <section className="bg-background flex py-20 px-12 gap-12">
      <div className="flex flex-col w-1/3 text-justify gap-4">
        <div className="bg-background relative">
          <Image
            src={LogoRosa}
            alt="Logo"
            className="w-16 h-16 absolute rounded-full outline-5 outline-background left-13 top-0"
          />
          <Image
            src={PolyanaCircle}
            alt="Polyana"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <h1 className="text-3xl font-semibold">Como posso te ajudar?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="bg-secondary-light w-2/3 rounded-2xl p-8 gap-4 flex flex-col">
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <Label htmlFor="name" className="text-sm font-medium mb-2">
              Nome
            </Label>
            <Input id="name" className="bg-background" />
          </div>
          <div className="flex flex-col w-1/2">
            <Label htmlFor="surname" className="text-sm font-medium mb-2">
              Sobrenome
            </Label>
            <Input id="surname" className="bg-background" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <Label htmlFor="email" className="text-sm font-medium mb-2">
              Email
            </Label>
            <Input id="email" className="bg-background" />
          </div>
          <div className="flex flex-col w-1/2">
            <Label htmlFor="subject" className="text-sm font-medium mb-2">
              Assunto do email
            </Label>
            <Input id="subject" className="bg-background" />
          </div>
        </div>
        <div>
            <Label htmlFor="message" className="text-sm font-medium mb-2">
            Sua mensagem
            </Label>
            <Textarea
            className="bg-background"
            placeholder="Type your message here."
            />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="terms" className="border border-black" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te
            enviar e-mails. Você pode cancelar a qualquer momento.
          </label>
        </div>
        <Button className="bg-primary-hover hover:bg-primary hover:scale-105 text-primary-foreground w-1/3 mt-2 self-end">
          Enviar mensagem
        </Button>
      </div>
    </section>
  );
}
