import React from "react";
import ImageCard from "./imageCard";

const filmData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    plot: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    rating: 9.3,
    imgSrc:
      "https://m.media-amazon.com/images/S/pv-target-images/d26b48f88d5398cad86d2fd26d32b258d43e51d4e2f949c3848be69a1e147446.jpg",
  },
  {
    id: 2,
    title: "The Godfather",
    plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    rating: 9.2,
    imgSrc:
      "https://m.media-amazon.com/images/S/pv-target-images/7d2081c07a6afa338191e68c73e1959f7761b53cf9b691d59926aa0ef89874e5.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    rating: 9.0,
    imgSrc:
      "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/14/1415966724560/26124ba2-be54-4015-bacb-18614bc40f5b-2060x1236.jpeg?width=465&dpr=1&s=none",
  },
  {
    id: 4,
    title: "12 Angry Men",
    plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    rating: 8.9,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/800px-12_Angry_Men_%281957_film_poster%29.jpg",
  },
  {
    id: 5,
    title: "Schindler's List",
    plot: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    rating: 8.9,
    imgSrc:
      "https://m.media-amazon.com/images/M/MV5BZDJhNzM3YWYtOTI3My00YjVmLWE5NjktZTQzNDkzMTNmZGQ1XkEyXkFqcGdeQXVyMjA3NzQyMA@@._V1_.jpg",
  },
];
const ImageCarousel = () => {
  return (
    <>
      <div className="carousel">
        <div className="carousel-track">
          {filmData.concat(filmData).map((film) => (
            <ImageCard key={film.id} film={film} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
