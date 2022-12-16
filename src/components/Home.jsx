import Header from "./Header";
import Navbar from "./Navbar";
import RepoSection from "./RepoSection";
import Notice from "./Notice";
const Home = () => {
  return (
    <>
      <Notice />
      <Navbar />
      <Header />
      <RepoSection />
    </>
  );
};
export default Home;
