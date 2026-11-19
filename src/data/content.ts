export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'cover',
    image: '/Guia exercçicios para o ronco 2.jpeg',
    title: 'Capa & Apresentação Digital',
    subtitle: 'Compatível com celulares, tablets e computadores ou impressão de alta resolução.',
    tag: 'Visão Geral'
  },
  {
    id: 'galeria-1',
    image: '/galeria 1.jpg',
    title: 'Apostila Impressa em Estudo',
    subtitle: 'Material prático para levar na cabeceira e consultar antes de dormir.',
    tag: 'Material Impresso'
  },
  {
    id: 'galeria-2',
    image: '/galeria 2.jpg',
    title: 'Mural de Acompanhamento & Rotina',
    subtitle: 'Painéis didáticos dos 7 dias e checklist fixados na parede do quarto.',
    tag: 'Dia a Dia'
  },
  {
    id: 'galeria-3',
    image: '/galeria 3.jpg',
    title: 'Exercício 1: Fortaleça sua Língua',
    subtitle: 'Passo a passo com 5 etapas claras para tonificar a base da língua.',
    tag: 'Exercício Prático'
  },
  {
    id: 'galeria-4',
    image: '/galeria 4.jpeg',
    title: 'Checklist da Minha Rotina Noturna',
    subtitle: 'Bônus #1: Organização de horários, ambiente, hábitos e auto-observação.',
    tag: 'Bônus Incluso'
  },
  {
    id: 'galeria-5',
    image: '/galeria 5.jpeg',
    title: 'Dica Extra: Massagem Suave no Pescoço',
    subtitle: 'Bônus #3: Instruções anatômicas de alívio e relaxamento das estruturas cervicais.',
    tag: 'Bônus Incluso'
  },
  {
    id: 'galeria-6',
    image: '/galeria 6.jpeg',
    title: 'Exercício 6: Musculatura das Bochechas',
    subtitle: 'Técnica de resistência com os dedos para tonificar bucinadores e face.',
    tag: 'Exercício Prático'
  },
  {
    id: 'galeria-7',
    image: '/galeria 7.jpeg',
    title: 'Exercício 5: Sustentação da Úvula',
    subtitle: 'Fortalecimento do palato mole e sustentação da contração velofaringea.',
    tag: 'Exercício Prático'
  },
  {
    id: 'galeria-8',
    image: '/galeria 8.jpeg',
    title: 'Exercício 4: Elevar e Abaixar a Úvula',
    subtitle: 'Movimentação precisa para firmeza da via aérea superior.',
    tag: 'Exercício Prático'
  }
];

export const interactiveExercises = [
  {
    id: 'ex1',
    title: 'Exercício 1: Pressão da Língua no Palato',
    target: 'Músculos da Língua',
    duration: 15,
    steps: [
      'Posicione a ponta da língua no céu da boca (palato duro), logo atrás dos dentes da frente.',
      'Pressione toda a superfície da língua para cima contra o céu da boca.',
      'Sustente a força suavemente por 5 segundos sem prender a respiração.',
      'Faça o som de estalo ("click") suave ao soltar a língua e relaxe.'
    ],
    benefit: 'Evita que a base da língua caia para trás durante o relaxamento do sono profundo.'
  },
  {
    id: 'ex4',
    title: 'Exercício 4: Elevação da Úvula ("Campainha")',
    target: 'Palato Mole & Úvula',
    duration: 12,
    steps: [
      'Mantenha a boca suavemente aberta diante do espelho.',
      'Pronuncie um "Aaaaa" mudo ou contraia o fundo da garganta para ver a úvula subir.',
      'Mantenha elevada por 3 segundos com tranquilidade.',
      'Abaixe suavemente relaxando os músculos do palato.'
    ],
    benefit: 'Aumenta o tônus muscular do véu palatino, diminuindo a vibração causadora do ronco.'
  },
  {
    id: 'ex6',
    title: 'Exercício 6: Resistência das Bochechas',
    target: 'Bucinadores e Face',
    duration: 15,
    steps: [
      'Lave bem as mãos. Coloque o dedo indicador limpo no interior da bochecha direita.',
      'Empurre a bochecha levemente para fora com o dedo.',
      'Ao mesmo tempo, contraia a bochecha tentando empurrar o dedo de volta para dentro.',
      'Mantenha por 4 segundos e repita do lado esquerdo.'
    ],
    benefit: 'Melhora o selamento labial e a estabilidade da cavidade bucal durante a noite.'
  }
];

export const testimonials = [
  {
    name: 'Carlos Eduardo M.',
    age: '48 anos',
    city: 'São Paulo - SP',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Minha esposa estava dormindo no outro quarto já fazia quase dois meses por causa dos meus roncos altos. Comecei a fazer os exercícios do guia religiosamente 10 minutos antes de deitar. Em menos de 2 semanas ela já comentou que o som diminuiu mais de 70%. Hoje dormimos no mesmo quarto de novo!',
    time: 'Cliente há 3 meses'
  },
  {
    name: 'Renata Vasconcelos',
    age: '42 anos',
    city: 'Belo Horizonte - MG',
    avatar: '👩‍🏫',
    rating: 5,
    text: 'O que mais gostei foram os desenhos ilustrados! Eu já tinha tentado ler textos na internet mas nunca sabia se estava fazendo o movimento certo com a língua e a garganta. As ilustrações mostram a anatomia exata. O checklist de rotina noturna também mudou minha qualidade de vida.',
    time: 'Cliente há 1 mês'
  },
  {
    name: 'Marcos Silveira',
    age: '55 anos',
    city: 'Curitiba - PR',
    avatar: '👨‍🔧',
    rating: 5,
    text: 'Já tinha gasto mais de 400 reais em dilatador nasal e faixas de queixo que só me machucavam e não resolviam nada. Por R$ 29,90 esse guia entregou um método sério e natural. Acordo muito mais disposto e sem aquela boca seca terrível.',
    time: 'Cliente há 2 meses'
  }
];

export const faqs = [
  {
    question: 'Como vou receber o Guia Ilustrado?',
    answer: 'O envio é imediato e 100% digital. Assim que o pagamento (PIX ou Cartão) for confirmado, você recebe o link de download direto no seu e-mail e na tela de confirmação. Você pode ler no celular, tablet, computador ou imprimir em alta qualidade.'
  },
  {
    question: 'Quanto tempo por dia preciso dedicar aos exercícios?',
    answer: 'Apenas de 8 a 10 minutos por dia! Você pode praticar enquanto assiste TV, antes do banho ou sentado na cama antes de dormir.'
  },
  {
    question: 'Os desenhos são fáceis de entender?',
    answer: 'Sim, extremamente! Todo o material foi desenhado em estilo infográfico didático, com cores suaves, setas indicativas de movimento e passo a passo numerado (1, 2, 3), explicando onde a língua toca e como contrair cada músculo.'
  },
  {
    question: 'E se eu tiver dúvidas ou não gostar?',
    answer: 'Você conta com nossa Garantia Incondicional de 7 Dias. Se por qualquer motivo achar que o material não é para você, basta nos enviar um e-mail que devolvemos 100% do seu dinheiro, sem perguntas.'
  },
  {
    question: 'O guia substitui consulta médica?',
    answer: 'Não. O material é educativo e focado em exercícios miofuncionais e hábitos de higiene do sono. Pessoas com suspeita de apneia obstrutiva grave devem sempre consultar um médico especialista ou fonoaudiólogo.'
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim! Utilizamos ambiente criptografado de ponta a ponta com certificados SSL de alta segurança. Seus dados nunca são armazenados e o pagamento via PIX é liberado instantaneamente.'
  }
];
