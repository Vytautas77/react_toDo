import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Paint = () => {
  const [paint, setPaint] = useState(null);
  const router = useRouter();

  const fetchPaint = async (paintId) => {
    const paint = await axios.get(
      `https://64ec5f6ef9b2b70f2bfa2f4a.mockapi.io/paintingGaley/${paintId}`
    );

    setPaint(paint.data);
    console.log(paint.data);
  };

  useEffect(() => {
    router.query.paintId && fetchPaint(router.query.paintId);
  }, [router.query]);

  return (
    <div>
      {paint && (
        <>
          <div>{paint.author}</div>
          <div>{paint.pictureName}</div>
          <img src={paint.pictureUrl} />
        </>
      )}
    </div>
  );
};

export default Paint;
