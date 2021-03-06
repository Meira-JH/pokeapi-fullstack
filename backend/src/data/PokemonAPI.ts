import axios from 'axios';
import { PokemonDetailsT, PokemonsSimpleListT } from '../models/pokemons';

export class PokemonAPI {
  private static BASE_URL = 'https://pokeapi.co/api/v2/';

  public async fetchAllPokemons(
    limit: number,
    offset: number
  ): Promise<PokemonsSimpleListT> {
    const result = await axios.post(
      `${PokemonAPI.BASE_URL}/pokemon/?limit=${limit}&offset=${offset}`
    );

    return result.data;
  }

  public async fetchPokemonDetails(pokemonName: string): Promise<PokemonDetailsT> {
    const result = await axios.post(
      `${PokemonAPI.BASE_URL}/pokemon/${pokemonName}`
    );

    return result.data;
  }
}
