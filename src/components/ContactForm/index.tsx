"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";

export default function ContactForm() {
  return (
    <div className="bg-secondary-light w-full md:w-2/3 rounded-2xl p-4 md:p-8 gap-4 flex flex-col">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <Label htmlFor="name" className="text-sm font-medium mb-2">
            Nome
          </Label>
          <Input id="name" className="bg-background" />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <Label htmlFor="surname" className="text-sm font-medium mb-2">
            Sobrenome
          </Label>
          <Input id="surname" className="bg-background" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <Label htmlFor="email" className="text-sm font-medium mb-2">
            Email
          </Label>
          <Input id="email" className="bg-background" />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
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
          placeholder="Digite sua mensagem aqui..."
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
      <Button className="bg-primary-hover hover:bg-primary hover:scale-105 text-primary-foreground w-full md:w-1/3 mt-2 self-end">
        Enviar mensagem
      </Button>
    </div>
  );
}
