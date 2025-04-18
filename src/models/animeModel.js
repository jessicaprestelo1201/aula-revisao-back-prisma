import prisma from "../../prisma/prisma.js";

class AnimeModel {
  // Obter todos os animes
  async findAll() {
    const animes = await prisma.anime.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return animes;
  }

  // Obter um anime pelo ID
  async findById(id) {
    const anime = await prisma.anime.findUnique({
      where: {
        id: Number(id),
      },
    });

    return anime;
  }

  // Criar um novo anime
   async create(
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const newAnime = await prisma.anime.create ({
      data: {
        title,
        description,
        episodes,
        releaseYear,
        studio,
        genres,
        rating,
        imageUrl,
        
    },
    });

    return newAnime;
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
    const anime = await this.findById(id);

    if (!anime) {
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

const animeUpdate = await prisma.anime.update ({
  where: {
    id: Number(id),
  },
  data,
});

return animeUpdate;

};

  // Remover um anime
  async delete(id) {
    const anime = this.findById(id);

    if (!anime) {
      return null;
    }

 await prisma.anime.delete({
  where: {
    id: Number(id),
  },
});

    return true;
  }
}

export default new AnimeModel();
