import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";
import HomeCarousel from "../components/HomeCarousel";

export const Home = () => {
  useDocumentTitle("PetPal");

  return (
    <>
      <div className="home-main-container">
        <Navbar />
        <HomeCarousel />
        <section className="popular-brands-container"></section>
      </div>
    </>
  );
};
