import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Paints from "@/components/Paints/Paints";

const Main = () => {
  return (
    <>
      <Header />
      <div>Waiting</div>
      <Link href="/Paints">Paints</Link>
      <Footer />
    </>
  );
};

export default Main;
