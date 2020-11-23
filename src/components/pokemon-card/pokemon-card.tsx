import React from 'react';
import { Link } from 'react-router-dom';
import { RawPokemon } from '../../types';

interface PokemonCardProps {
  pokemon: RawPokemon;
  // onCardClick: (id: number) => void;

  // onTitleClick: () => void;
  // onCardHover: (id: string) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }: PokemonCardProps) => (
  <div>
    <Link
      to={`/${pokemon.id}`}
      // onClick={() => onCardClick(pokemon.id)}
      // onKeyDown={() => onCardClick(pokemon.id)}
    >
      {pokemon.name}
    </Link>
    {/* <button>catch</button> */}
  </div>
  // <article
  //   className="small-movie-card catalog__movies-card"
  //   onMouseEnter={() => onCardHover(movie.id)}
  // >
  //   <div className="small-movie-card__image">
  //     <img src={`img/${poster}`} alt={title} width="280" height="175" />
  //   </div>
  //   <h3 className="small-movie-card__title">
  //     <a
  //       className="small-movie-card__link"
  //       href="movie-page.html"
  //       onClick={onTitleClick}
  //     >
  //       {title}
  //     </a>
  //   </h3>
  // </article>
);

export default PokemonCard;
