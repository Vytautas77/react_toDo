import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Paints from "../../components/Paints/Paints";

const Main = () => {
  const [paints, setPaints] = useState(null);

  const getPaintsData = async () => {
    const fetchPaints = await axios.get(
      "https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley"
    );

    setPaints(fetchPaints.data);
  };
  useEffect(() => {
    getPaintsData();
  }, []);

  return (
    <>
      <Header />
      {paints && <Paints paints={paints} />}
      {/* <Tasks /> */}
      <Footer />
    </>
  );
};

export default Main;
