/* JC FEST - lógica do site (normalmente não precisa editar) */

const CORES = { blue: "#1E6FD9", red: "#E8141C", yellow: "#FFD500" };
const TEXTO_CLARO = { blue: "#fff", red: "#fff", yellow: "#000" };

const wa = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
const orcamentoGeral = () => wa("Olá! Gostaria de fazer um orçamento para minha festa.");
const orcamentoProduto = (nome) => wa(`Olá! Gostaria de fazer um orçamento do ${nome}`);

/* Placeholder colorido (SVG). Aparece quando "images" está vazio. */
function placeholder(rotulo, icone, cor, n = 1) {
  const bg = CORES[cor] || CORES.yellow, fg = TEXTO_CLARO[cor] || "#000";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="${bg}"/>
    <circle cx="90" cy="90" r="150" fill="#fff" opacity=".12"/><circle cx="740" cy="540" r="190" fill="#fff" opacity=".12"/>
    <text x="400" y="300" font-size="170" text-anchor="middle">${icone}</text>
    <text x="400" y="420" font-size="44" font-weight="800" text-anchor="middle" fill="${fg}" font-family="Trebuchet MS,sans-serif">${rotulo.replace(/&/g, "&amp;")}</text>
    <text x="400" y="475" font-size="26" text-anchor="middle" fill="${fg}" opacity=".8" font-family="sans-serif">Foto ${n} em breve</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

/* Lista de imagens (reais ou placeholders) */
function imagens(item, icone, cor) {
  const nome = item.nome || item.titulo;
  const lista = item.images && item.images.length ? item.images : [placeholder(nome, icone, cor, 1), placeholder(nome, icone, cor, 2)];
  return lista;
}

/* Carrossel (uma imagem = sem setas) */
function carrossel(lista, alt) {
  const imgs = lista.map((src, i) => `<img src="${src}" alt="${alt} - foto ${i + 1}" loading="lazy">`).join("");
  const setas = lista.length > 1
    ? `<button class="ant" aria-label="Foto anterior">‹</button><button class="prox" aria-label="Próxima foto">›</button>` : "";
  return `<div class="car"><div class="pista">${imgs}</div>${setas}</div>`;
}
document.addEventListener("click", (e) => {
  const b = e.target.closest(".car button");
  if (!b) return;
  const pista = b.parentElement.querySelector(".pista");
  pista.scrollBy({ left: (b.classList.contains("prox") ? 1 : -1) * pista.clientWidth, behavior: "smooth" });
});

/* Links e textos globais */
document.querySelectorAll("[data-wa]").forEach((a) => (a.href = orcamentoGeral()));
document.querySelectorAll("[data-ig]").forEach((a) => (a.href = SITE.instagramUrl));
document.querySelectorAll("[data-ig-nome]").forEach((s) => (s.textContent = "@" + SITE.instagram));
document.querySelectorAll("[data-fone]").forEach((s) => (s.textContent = SITE.whatsappExibicao));

/* HOME: cards de categorias */
const gradeCats = document.getElementById("categorias");
if (gradeCats) {
  gradeCats.innerHTML = CATEGORIAS.map((c) => `
    <article class="card">
      <div class="foto">${carrossel(imagens(c, c.icone, c.cor), c.titulo)}</div>
      <div class="corpo">
        <h3>${c.titulo}</h3>
        <p>${c.resumo}</p>
        <a class="btn tag-${c.cor}" href="categoria.html?c=${c.slug}">Saber mais</a>
      </div>
    </article>`).join("");
}

/* PÁGINA DE CATEGORIA: lista de produtos */
const gradeProd = document.getElementById("produtos");
if (gradeProd) {
  const slug = new URLSearchParams(location.search).get("c");
  const cat = CATEGORIAS.find((c) => c.slug === slug);
  if (!cat) {
    document.getElementById("cab-cat").innerHTML = `<div class="wrap"><a class="voltar" href="index.html">‹ Voltar ao início</a><h1>Categoria não encontrada</h1><p>Volte ao início e escolha uma das nossas categorias.</p></div>`;
  } else {
    document.title = `${cat.titulo} | JC FEST`;
    const cab = document.getElementById("cab-cat");
    cab.classList.add("tag-" + cat.cor);
    cab.innerHTML = `<div class="wrap"><a class="voltar" href="index.html#servicos">‹ Todas as categorias</a>
      <h1>${cat.icone} ${cat.titulo}</h1><p>${cat.resumo}</p></div>`;
    gradeProd.innerHTML = cat.produtos.map((p) => `
      <article class="card produto">
        <div class="foto">${carrossel(imagens(p, cat.icone, cat.cor), p.nome)}</div>
        <div class="corpo">
          <h2>${p.nome}</h2>
          <p>${p.desc}</p>
          <a class="btn btn-red" href="${orcamentoProduto(p.nome)}" target="_blank" rel="noopener">Fazer Orçamento</a>
        </div>
      </article>`).join("");
  }
}
