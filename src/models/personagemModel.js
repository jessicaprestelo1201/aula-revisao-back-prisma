import prisma from "../../prisma/prisma.js";

class PersonagemModel {
  // Obter todos os animes
  async findAll() {
    const personagens = await prisma.personagem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return personagens;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const personagem = await prisma.personagem.findUnique({
      where: {
        id: Number(id),
      },
    });

    return personagem;
  }

  // Criar um novo anime
   async create (name, description, age, power,anime){
    const newPersonagem = await prisma.personagem.create ({
      name,
      description,
      age,
      power,
      anime
   })


    return newPersonagem;
  }

  // Atualizar um anime
  async update(
    id,
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

// Atualize o anime existente com os novos dados
const data = {

}
if (title !== undefined) {
  data.title = title;
}
if (description !== undefined) {
  data.description = description;
}
if (episodes !== undefined) {
  data.episodes = episodes;
}
if (releaseYear !== undefined) {
  data.releaseYear = releaseYear;
}
if (studio !== undefined) {
  data.studio = studio;
}
if (genres !== undefined) {
  data.genres = genres;
}
if (rating !== undefined) {
  data.rating = rating;
}
if (imageUrl !== undefined) {
  data.imageUrl = imageUrl;
}

const personagemUpdate = await prisma.personagem.update ({
  where: {
    id: Number(id),
  },
  data,
});

return personagemUpdate;

};

  // Remover um anime
  async delete(id) {
    const personagem = this.findById(id);

    if (!anime) {
      return null;
    }

 await prisma.personagem.delete({
  where: {
    id: Number(id),
  },
});

    return true;
  }
}


export default new PersonagemModel();
