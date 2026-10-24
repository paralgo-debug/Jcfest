/* =====================================================
   JC FEST - DADOS DO SITE
   Edite aqui textos, produtos e imagens.

   COMO TROCAR AS IMAGENS:
   1. Envie as fotos para o GitHub (mesma pasta dos outros arquivos)
   2. Em "images", liste os caminhos. Exemplo:
        images: ["toboagua-1.jpg", "toboagua-2.jpg"]
   Deixou "images" vazio []? O site mostra um placeholder colorido.
   ===================================================== */

const SITE = {
  nome: "JC FEST",
  whatsapp: "556294813631",
  whatsappExibicao: "(62) 9481-3631",
  instagram: "jc_fest_1008",
  instagramUrl: "https://www.instagram.com/jc_fest_1008",
  cidades: "Trindade e Goiânia (GO)",
};

const CATEGORIAS = [
  {
    slug: "atracoes-aquaticas", titulo: "Atrações Aquáticas", icone: "💦", cor: "blue",
    resumo: "Refresque a festa com toboáguas e espuma para a criançada se molhar e rir sem parar.",
    images: [],
    produtos: [
      { nome: "Toboágua Premium", desc: "​Diversão refrescante para toda a família!
Com estrutura reforçada e design imponente, o Toboágua Premium entrega uma experiência única de escorregadas longas, muita água e momentos inesquecíveis de alegria.
​Conta com laterais de proteção e área de impacto segura, garantindo mais tranquilidade durante toda a brincadeira.
​Indicado para crianças a partir de 2 anos até adultos.
​Ideal para aniversários, confraternizações, eventos familiares e corporativos — diversão garantida para todas as idades no mesmo espaço.
​👉 Mais altura, mais emoção,mais memórias.", images: [] },
      { nome: "Tobogã Golfinho Gigante 3 em 1", desc: "Três diversões em uma só atração: escorregador, escalada e piscina. O queridinho da garotada.", images: [] },
      { nome: "Canhão de Espuma", desc: "Uma chuva de espuma colorida que transforma qualquer espaço em pista de dança para as crianças.", images: [] },
    ],
  },
  {
    slug: "futebol-de-sabao", titulo: "Futebol de Sabão", icone: "⚽", cor: "red",
    resumo: "Escorrega, cai e se diverte! O jogo mais animado e espumante da festa.",
    images: [],
    produtos: [
      { nome: "Futebol de Sabão 10x5", desc: "Campo grande para times cheios. Ideal para festas com muitos convidados e muita risada.", images: [] },
      { nome: "Futebol de Sabão 8x4", desc: "Tamanho perfeito para espaços médios, com a mesma diversão escorregadia do campo maior.", images: [] },
      { nome: "Canhão de Espuma", desc: "Combine com o futebol de sabão e deixe o campo ainda mais cheio de espuma e animação.", images: [] },
    ],
  },
  {
    slug: "tobogas", titulo: "Tobogã", icone: "🛝", cor: "yellow",
    resumo: "Escorregadores gigantes e coloridos para descer, subir e repetir a diversão.",
    images: [],
    produtos: [
      { nome: "Tobogã Premium", desc: "Estrutura reforçada, rampa alta e descida emocionante. Segurança e diversão para todas as idades.", images: [] },
      { nome: "Tobogã Golfinho Gigante", desc: "Visual encantador de golfinho, com escorregador amplo que faz sucesso entre os pequenos.", images: [] },
      { nome: "Tobogã Tubarão", desc: "Para quem ama aventura: um tubarão gigante que vira a atração principal da festa.", images: [] },
      { nome: "Tobogã com piscina de bolinha", desc: "Desce o tobogã e já cai na piscina de bolinhas. Duas atrações em uma só.", images: [] },
    ],
  },
  {
    slug: "castelo", titulo: "Castelo", icone: "🏰", cor: "red",
    resumo: "Castelos infláveis para pular, brincar e viver a fantasia de um reino de festa.",
    images: [],
    produtos: [
      { nome: "Castelo Pula-pula", desc: "O clássico castelo inflável com espaço para pular à vontade, colorido e seguro.", images: [] },
      { nome: "Castelo c/escorregado", desc: "Pula-pula e escorregador no mesmo brinquedo. Mais diversão em menos espaço.", images: [] },
    ],
  },
  {
    slug: "piscina-de-bolinhas", titulo: "Piscina de Bolinhas", icone: "🔵", cor: "blue",
    resumo: "Mergulho em milhares de bolinhas coloridas, perfeito para os menores.",
    images: [],
    produtos: [
      { nome: "Piscina com Bolinha 1,5x1,5", desc: "Piscina compacta e segura, ideal para os pequenos brincarem em ambientes menores.", images: [] },
      { nome: "Piscina de Bolinhas Dino", desc: "Tema dinossauro que encanta a criançada, com muitas bolinhas coloridas para mergulhar.", images: [] },
    ],
  },
  {
    slug: "pula-pula", titulo: "Pula-pula", icone: "🤸", cor: "yellow",
    resumo: "Cama elástica em vários tamanhos para pular até cansar, com total segurança.",
    images: [],
    produtos: [
      { nome: "Pula-pula 2,44", desc: "Tamanho compacto, perfeito para festas menores e espaços reduzidos.", images: [] },
      { nome: "Pula-pula 3,05", desc: "O tamanho mais pedido: espaço bom para brincar com segurança e muita energia.", images: [] },
      { nome: "Pula-pula 3,70", desc: "Mais espaço para pular junto com os amigos, ótimo para festas com bastante criança.", images: [] },
      { nome: "Pula-pula 4,27", desc: "O maior da linha, para grandes eventos e turmas animadas.", images: [] },
    ],
  },
  {
    slug: "alimentacao", titulo: "Alimentação", icone: "🍿", cor: "red",
    resumo: "Delícias quentinhas e doces feitas na hora para completar a festa.",
    images: [],
    produtos: [
      { nome: "Algodão-doce", desc: "Fofinho, colorido e feito na hora. Um doce clássico que encanta todas as idades.", images: [] },
      { nome: "Batata Frita Tradicional", desc: "Crocante por fora, macia por dentro e sempre quentinha. Sucesso garantido.", images: [] },
      { nome: "Crepe Suíço", desc: "Crepe crocante e recheado, preparado na hora com opções doces e salgadas.", images: [] },
      { nome: "Mini Cachorro-Quente Tradicional", desc: "Mini lanche saboroso e prático, perfeito para a criançada petiscar.", images: [] },
      { nome: "Pipoca", desc: "Pipoca quentinha e crocante, o cheirinho que deixa qualquer festa mais animada.", images: [] },
    ],
  },
  {
    slug: "diversao-interativa", titulo: "Diversão Interativa", icone: "🎮", cor: "blue",
    resumo: "Jogos e desafios para brincar em grupo, de crianças a adultos.",
    images: [],
    produtos: [
      { nome: "Air Game (Aero Rock)", desc: "Mesa de aero hóquei para disputas rápidas, emocionantes e cheias de torcida.", images: [] },
      { nome: "Mesa de Ping-pong", desc: "Clássico que reúne a galera em partidas animadas. Para todas as idades.", images: [] },
      { nome: "Alta Tensão", desc: "Desafio de coordenação e nervos de aço: quem chega ao fim sem encostar vence.", images: [] },
      { nome: "Torta na Cara (Passa ou Repassa)", desc: "Jogo de perguntas com uma surpresa cremosa para quem errar. Gargalhadas garantidas.", images: [] },
    ],
  },
  {
    slug: "kids-play", titulo: "Kids Play", icone: "🧸", cor: "yellow",
    resumo: "Espaço de aventura pensado para os pequenos brincarem com conforto e segurança.",
    images: [],
    produtos: [
      { nome: "Kid Play Aventura", desc: "Espaço kids com obstáculos e brincadeiras para estimular a imaginação e a coordenação dos pequenos.", images: [] },
    ],
  },
];
