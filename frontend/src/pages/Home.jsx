import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";
import HomeCarousel from "../components/HomeCarousel";

export const Home = () => {
  //setting dynamic title
  useDocumentTitle("PetPal");

  return (
    <>
      <div className="home-main-container py-31">
        <Navbar />
        <HomeCarousel />
        <section className="popular-brands-container"></section>
      </div>
    </>
  );
};
