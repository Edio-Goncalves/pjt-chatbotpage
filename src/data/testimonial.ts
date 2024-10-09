// /data/testimonials.ts

export type TestimonialData = {
  name: string;
  imageSrc: string;
  description: string;
  quality: string;
};

const testimonialsData: TestimonialData[] = [
  {
    name: "May Rodrigues",
    imageSrc: "/favicon.ico",
    description:
      "Mudei para a automação de WhatsApp da chatBot e é minha ferramenta favorita do ano! A+ em todos os aspectos, desde o design até o suporte, velocidade e inovação. Agora consigo qualificar meus leads de forma mais eficiente e fácil!",
    quality: "Ferramenta favorita do ano, design e suporte excepcionais!",
  },
  {
    name: "Fábio Goulart",
    imageSrc: "favicon.ico",
    description:
      "Acabei de começar com a automação de WhatsApp da chatBot. Ótima experiência até agora! Estou ansioso para qualificar novos leads e melhorar meu atendimento ao cliente.",
    quality: "Ótima experiência desde o início!",
  },
  {
    name: "Mário Alencar",
    imageSrc: "favicon.ico",
    description:
      "Fã ENORME da automação de WhatsApp da chatBot! Menos de um mês após a implementação e já vi um impacto tangível na qualificação de leads e na conversão de vendas.",
    quality: "Impacto tangível na qualificação de leads e vendas!",
  },
  {
    name: "Katelyn Etzler 🧠",
    imageSrc: "favicon.ico",
    description:
      "Sou um novo cliente e adoro a automação de WhatsApp da chatBot. Um dos aplicativos mais úteis que já usei! Ele simplifica o processo de qualificação de leads de forma eficaz.",
    quality: "Um dos aplicativos mais úteis que já usei!",
  },
  {
    name: "Lucas Rocha",
    imageSrc: "favicon.ico",
    description:
      "A automação de WhatsApp da chatBot é fantástica! Reduzi o tempo de resposta e consegui filtrar leads qualificados de forma automática, o que aumentou a eficiência da minha equipe.",
    quality: "Ferramenta poderosa que aumentou nossa eficiência!",
  },
  {
    name: "Hugo Possa",
    imageSrc: "favicon.ico",
    description:
      "A automação de WhatsApp da chatBot transformou a maneira como gerencio meus leads. Agora consigo acompanhar todo o processo de qualificação sem esforço, e o suporte é excelente!",
    quality: "Transformou a gestão de leads com um ótimo suporte!",
  },
];

export default testimonialsData;
