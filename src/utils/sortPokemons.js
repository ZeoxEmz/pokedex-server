const sortPokemons = async ({allpokemons, ord, ordBy }) => {
    try {
        if(ord === "") return allpokemons
        // Ordenar los Pokémon según el criterio especificado
        const sortedPokemons = allpokemons.sort((a, b) => {
            if (ord === "asc") {
                return a.name.localeCompare(b.name);
            } else if (ord === "desc") {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });

        return sortedPokemons;
    } catch (error) {
        console.error("Error al ordenar Pokémon:", error.message);
        throw error;
    }
};

module.exports = sortPokemons