import { Blog1, Blog2, Blog3, Blog4, Blog5 } from "@/assets";

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    categories: string[];
    date: string;
    image: any;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "QUAL O SEU GLOBO DE OURO?",
        excerpt:
            "Fernanda Torres conquista Globo de Ouro de melhor atriz em filme drama. Grande vitória dedicada à sua mãe...",
        categories: ["Conquista", "Envelhecimento"],
        date: "06 Jan 2025",
        image: Blog1,
        content: `
            <p>
                Qual o seu Globo de Ouro?
                <br>
                <br>
                Fernanda Torres conquista Globo de Ouro de melhor atriz em filme drama. Grande vitória dedicada à sua mãe.
                <br>
                <br>
                A vitória esteve relacionada a sua atuação no filme "Ainda estou aqui"
                <br>
                <br>
                Vitórias como esta são alcançadas após muita dedicação e trabalho. Sonhos que são realizados mediante trabalho focado e muito apoio. Que este sorriso contagiante acenda a vontade de transformação e ilumine sonhos, para que Globos de Ouro sejam conquistados por todos. Tudo é possível, e acreditar nisso é o começo de tudo.
            </p>
        `,
    },
    {
        id: 2,
        title: "Ecografia na hemodiálise",
        excerpt:
            "O acesso vascular representa a fonte de vida para pacientes em hemodiálise. A ecografia surge como ferramenta amplificadora do exame físico...",
        categories: ["Hemodiálise", "Acesso vascular"],
        date: "04 Dez 2024",
        image: Blog2,
        content: `
            <p>
                O acesso vascular representa a fonte de vida para aqueles pacientes que precisam da hemodiálise como modalidade de terapia renal substitutiva. Para sua maior durabilidade é indicado o monitoramento contínuo com aplicação dos recursos indicados no exame físico: inspeção, palpação e ausculta.
                <br><br>
                A ecografia se mostra como uma ferramenta amplificadora do exame físico, fazendo parte da inspeção indireta, onde a onda sonora irá viabilizar uma avaliação adicional da estrutura, nesse caso a Fístula arteriovenosa (FAV). Esse método é chamado de insonação.
                <br><br>
                Alguns conhecimentos básicos do mecanismo de propagação da onda sonora, tipos de sonda e formação de imagens irão fortalecer o operador na utilização deste recurso.
                <br><br>
                Os Modos utilizados de ultrassom podem ser: 
                <br><br>
                1. Modo-B
                <br><br>
                2. Modo-M
                <br><br>
                3. Modo-Doopler
                <br><br>
                Cada um deles irá oferecer recursos para suporte na avaliação da anatomia ou fisiologia das estruturas.
                <br><br>
                Para a obtenção de uma imagem de qualidade importante estar atento para os seguintes pontos:
                <br><br>
                1. Definir a sonda utilizada de acordo com o tipo de estrutura a ser avaliada, considerando os princípios de frequência e profundidade;
                <br><br>
                2. Ajustar o equipamento para o PRESET ideal
                <br><br>
                3. Ajustar o ganho da imagem , ampliando uniformemente o sinal de retorno da onda.
                <br><br>
                4. Ajustar a pronfundidade de onda de acordo com o perfil de estrutura corporal, centralizando bem a imagem;
                <br><br>
                5. Ajustar o foco, otimizando a qualidade da imagem.
                <br><br>
                Importante o conhecimento de regras básicas para o posicionamento da sonda:
                <br><br>
                A marcação da sonda deve ser posicionada de acordo com as regras para obtenção de imagem, devendo coincidir com a marcação na tela do equipamento. Por convenção a marcação deve ser apontada para a cabeça quando utilizado nos planos sagital e coronal e para a direita do paciente quando posicionada no plano transversal. A parte superior da imagem em tela corresponde ao local de contato da sonda com a pele.
            </p>
        `,
    },
    {
        id: 3,
        title: "Fragilidade no idoso em hemodiálise",
        excerpt:
            "A fragilidade em idosos submetidos à hemodiálise requer abordagem especializada...",
        categories: ["Fragilidade", "Hemodiálise", "Envelhecimento"],
        date: "24 Out 2024",
        image: Blog3,
        content: `
            <p>
                https://www.canva.com/design/DAGUSjWwDXI/5gl_XbapmgKe4zzFKlOr-g/edit?utm_content=DAGUSjWwDXI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
            </p>
        `,
    },
    {
        id: 4,
        title: "Protocolo para identificação e gestão da fragilidade",
        excerpt:
            "Estudos mostram que a fragilidade atinge 80% dos pacientes com DRC em terapia substitutiva...",
        categories: ["Fragilidade", "Cuidados paliativos"],
        date: "23 Out 2024",
        image: Blog4,
        content: `
            <p>
                A fragilidade vem sendo cada vez mais estudada, estando associada a importantes desfechos em saúde. Descrita numa prevalência de 15% em indivíduos com mais de 65 anos, entre a população com DRC em terapia substitutiva chega a uma prevalência de 80%. Sua identificação precoce torna possível o direcionamento de condutas que possibilitam sua reversão. Desta forma, o estabelecimento de protocolos a avaliação da fragilidade e sua gestão estão indicados para alcance de melhores resultados.
            </p>
        `,
    },
    {
        id: 5,
        title: "Cuidados Paliativos e Fragilidade",
        excerpt:
            "A síndrome da fragilidade, presente em 60% dos idosos, exige abordagem interdisciplinar...",
        categories: ["Cuidados paliativos", "Fragilidade"],
        date: "02 Out 2024",
        image: Blog5,
        content: `
            <p>
                Fragilidade é descrita como uma síndrome com repercussões multidimensionais, onde o organismo encontro vulnerável a estressores externos. Associada com maior mortalidade, internamentos, queda da funcionalidade e cognição, maior dependência e morbidade. Presente em mais de 60% da população idosa, vem sendo estudada desde a década de 70. 
                <br><br>
                Atualmente, com o crescente envelhecimento da população e consequente aumento das comorbidades, o sistema de saúde vem enfrentando um desafio com a carência de profissionais especializados na geriatria e nesse nosso olhar de atenção ao declínico da funcionalidade do organismo.
                <br><br>
                Diversas escalas validadas para a classificação de fragilidade já são utilizadas nas diversas especialidades, ganhando destaque a Frailty Score de Fried et al e a CFS.
                <br><br>
                A Cartilha para o profissional de saúde que integra a fragilidade aos cuidados paliativos vem a fortalecer a assistência focada nas necessidades do paciente, possibilidades terapêuticas, valorização do conforto do paciente e equipe interdisciplinar. Vale a pena a leitura e aplicação.
            </p>
        `,
    },
];

export const blogCategories = [
    "Todos",
    "Hemodiálise",
    "Cuidados paliativos",
    "Fragilidade",
    "Envelhecimento",
    "Acesso vascular",
    "Conquista",
];
