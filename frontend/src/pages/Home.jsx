import Navbar from "../components/Navbar";
import useDocumentTitle from "../shared/useDocumentTitle";

export const Home = () => {
  //setting dynamic title
  useDocumentTitle("PetPal");

  return (
    <>
      <Navbar />
      <div className="home-main-container"></div>
    </>
  );
};
