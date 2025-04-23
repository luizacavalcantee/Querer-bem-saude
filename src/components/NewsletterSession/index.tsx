import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export default function NewsletterSession() {
    return (
        <div className="bg-background px-12 py-20 flex items-center justify-center">
            <div className="bg-gradient-to-tr from-secondary to-secondary-dark rounded-lg p-8 w-full flex flex-col items-center justify-center text-white gap-3">
                <h1 className="text-3xl font-medium">Inscreva-se em nossa newsletter</h1>
                <p>Conteúdos sobre a área de saúde direto em sua caixa de e-mail</p>
                <div className="flex gap-2 h-10 mt-4 w-2/5">
                    <Input className="bg-background h-full text-black" placeholder="Digite seu e-mail"/>
                    <Button className="bg-primary h-full text-base px-6">Inscrever-se</Button>
                </div>
            </div>
        </div>
    )
}