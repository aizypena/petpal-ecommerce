import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";
import HomeCarousel from "../components/HomeCarousel";

export const Home = () => {
  //setting dynamic title
  useDocumentTitle("PetPal");

  return (
    <>
      <Navbar />
      <HomeCarousel />
      <div className="home-main-container">
        <section className="popular-brands-container"></section>
      </div>
    </>
  );
};
