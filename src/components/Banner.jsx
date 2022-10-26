import { useState, useEffect } from "react";

import axios from "../axios/axios";
import { requests } from "../axios/request";
import styled, { css } from "styled-components";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      const request = response.data.results;

      setMovie(request[Math.floor(Math.random() * request.length - 1)]);
    }

    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <BannerHeader bgImg={movie?.backdrop_path}>
      <BannerContents>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <Btn>Play</Btn>
          <Btn>My list</Btn>
        </div>
        <Description>{truncate(movie?.overview, 150)}</Description>
      </BannerContents>

      <FadeBottom></FadeBottom>
    </BannerHeader>
  );
};

export default Banner;

const BannerHeader = styled.header`
  height: 350px;
  position: relative;
  color: #fff;
  object-fit: contain;
  background-image: ${(props) =>
    `url('https://image.tmdb.org/t/p/original/${props.bgImg}')`};
  background-position: "center";
  background-size: "cover";

  h1 {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }
`;

const BannerContents = styled.div`
  margin-left: 2rem;
  padding-top: 8.7rem;
  height: 190px;
`;

const Btn = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  background-color: rgba(51, 51, 51, 0.5);

  :hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const FadeBottom = styled.div`
  height: 10rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

const Description = styled.p`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 22rem;
  height: 5rem; ;
`;
