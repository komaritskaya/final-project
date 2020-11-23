import React from 'react';
import PokemonCard from '../pokemon-card/pokemon-card';
import { ExtendedPokemon, RawPokemon } from '../../types';

interface PokemonsListProps {
  pokemons: (RawPokemon | ExtendedPokemon)[];
  // onCardClick: (id: number) => void;

  // onTitleClick: () => void;
}

const PokemonsList: React.FC<PokemonsListProps> = ({
  pokemons,
  // onCardClick,
}: PokemonsListProps) => (
  <div>
    {
      pokemons.map((pokemon) => (
        <PokemonCard
          // onCardClick={onCardClick}
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))
    }
  </div>
);
// class PokemonsList extends React.PureComponent<PokemonsListProps> {
//   constructor(props) {
//     super(props);
//     this.state = {activeMovieId: null};

//     this._onCardHover = this._onCardHover.bind(this);
//   }

//   _onCardHover(id) {
//     this.setState({
//       activeMovieId: id,
//     });
//   }

//   render() {
//     const {movies, onTitleClick} = this.props;
//     return (
//       <div className="catalog__movies-list">
//         {
//           movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               movie={movie}
//               onTitleClick={onTitleClick}
//               onCardHover={this._onCardHover}
//             />
//           ))
//         }
//       </div>
//     );
//   }
// }

export default PokemonsList;
