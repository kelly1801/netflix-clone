
import { useState, useEffect } from "react";
import axios from "../axios/axios";
import styled,{css} from "styled-components";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);

      setMovies(response.data.results);

      return response;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <RowContainer>
      <h2>{title}</h2>
      <RowPosters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <PosterImg
                largeRow={isLargeRow}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </RowPosters>
    </RowContainer>
  );
};

export default Row;

const RowContainer = styled.div`
  color: #fff;
  margin-left: 1.2rem;
`;
const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1.2rem;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const PosterImg = styled.img`
  max-height: 100px;
  object-fit: contain;
  margin-right: 0.6rem;
  transition: transform 450ms;

  :hover {
    opacity: 1;
    transform: scale(1.08);
  }

  ${(props) =>
    props.largeRow &&
    css`
      max-height: 250px;

      :hover {
        opacity: 1;
        transform: scale(1.09);
      }
    `}
`;
