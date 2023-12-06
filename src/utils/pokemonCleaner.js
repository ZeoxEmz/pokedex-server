function pokemonCleaner(pokemon) {
    const { id, name, weight, height, sprites, stats } = pokemon;
    const types = pokemon.types.map(type=>type.type.name)
    const hp = stats.find(stat => stat.stat.name === 'hp').base_stat
    const attack = stats.find(stat => stat.stat.name === 'attack').base_stat
    const defense = stats.find(stat => stat.stat.name === 'defense').base_stat
    const specialAttack = stats.find(stat => stat.stat.name === 'special-attack').base_stat
    const specialDefense = stats.find(stat => stat.stat.name === 'special-defense').base_stat
    const speed = stats.find(stat => stat.stat.name === 'speed').base_stat
    const image = sprites.front_default
    return {
        id,
        name,
        weight,
        height,
        hp,
        attack,
        defense,
        specialAttack,
        specialDefense,
        speed,
        image,
        types
    };
}

module.exports = pokemonCleaner