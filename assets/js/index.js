document.addEventListener("DOMContentLoaded", function () {
  const verMaisMembrosButton = document.getElementById("avaliação");
  const feedbacksContainer = document.querySelector(
    "#testimonials_content > #feedbacks"
  );

  const novosMembros = [
    {
      nome: "Francisco Vinicius",
      imagem: "", // Adicione o caminho da imagem se tiver
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Vinicius Andrade",
      imagem: "./assets/img/ViniciusA.jpg",
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Sérgio",
      imagem: "", // Adicione o caminho da imagem se tiver
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Herick",
      imagem: "./assets/img/Herick.jpg",
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "João",
      imagem: "", // Adicione o caminho da imagem se tiver
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Eduardo",
      imagem: "./assets/img/Eduardo.jpg",
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Ray",
      imagem: "./assets/img/Ray.jpg",
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Kauã",
      imagem: "./assets/img/Eduardo.jpg", // Você usou a imagem do Eduardo antes, mantive assim
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima voluptatibus molestiae blanditiis, nemo deleniti aliquid?",
      estrelas: 5,
    },
    {
      nome: "Vinicius Gomes",
      imagem: "", // Adicione o caminho da imagem do Vinicius Gomes
      avaliacao:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tempora earum fugiat.",
      estrelas: 4,
    },
  ];

  let membrosAdicionados = 0;
  const membrosPorCarregamento = 4; // Carregar 4 membros por clique

  function adicionarMembros() {
    for (
      let i = 0;
      i < membrosPorCarregamento && membrosAdicionados < novosMembros.length;
      i++
    ) {
      const membro = novosMembros[membrosAdicionados];
      const feedbackDiv = document.createElement("div");
      feedbackDiv.classList.add("feedback");

      const avatarImg = document.createElement("img");
      avatarImg.src = membro.imagem || ""; // Use uma string vazia se não houver imagem
      avatarImg.classList.add("feedback-avatar");
      avatarImg.alt = membro.nome;

      const feedbackContentDiv = document.createElement("div");
      feedbackContentDiv.classList.add("feedback-content");

      const nomeEquipeP = document.createElement("p");
      nomeEquipeP.classList.add("EquipeSmartEnergy");
      nomeEquipeP.textContent = membro.nome;

      const estrelasSpan = document.createElement("span");
      for (let j = 0; j < membro.estrelas; j++) {
        const starIcon = document.createElement("i");
        starIcon.classList.add("fa", "fa-star");
        estrelasSpan.appendChild(starIcon);
      }
      nomeEquipeP.appendChild(estrelasSpan);

      const avaliacaoP = document.createElement("p");
      avaliacaoP.textContent = membro.avaliacao;

      feedbackContentDiv.appendChild(nomeEquipeP);
      feedbackContentDiv.appendChild(avaliacaoP);

      feedbackDiv.appendChild(avatarImg);
      feedbackDiv.appendChild(feedbackContentDiv);

      feedbacksContainer.appendChild(feedbackDiv);
      membrosAdicionados++;
    }

    if (membrosAdicionados === novosMembros.length) {
      verMaisMembrosButton.style.display = "none"; // Ocultar o botão quando todos forem carregados
    }
  }

  // Adicionar evento de clique ao botão
  verMaisMembrosButton.addEventListener("click", adicionarMembros);
});
