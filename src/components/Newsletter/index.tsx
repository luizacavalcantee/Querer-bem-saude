import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export default function Newsletter() {
  return (
    <div className="bg-gradient-to-tr from-secondary to-secondary-dark rounded-lg p-6 md:p-8 w-full flex flex-col items-center justify-center text-white gap-3 text-center">
      <h1 className="text-3xl font-medium">Inscreva-se em nossa newsletter</h1>
      <p>Conteúdos sobre a área de saúde direto em sua caixa de e-mail</p>
      <div className="flex flex-col md:flex-row gap-2 mt-4 w-full md:w-2/5">
        <Input
          className="bg-background h-10 text-black text-base"
          placeholder="Digite seu e-mail"
        />
        <Button className="bg-primary h-10 text-base px-6">Inscrever-se</Button>
      </div>
    </div>
  );
}
