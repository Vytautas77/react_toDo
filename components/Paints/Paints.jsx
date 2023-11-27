import Link from "next/link";
import styles from "./paints.module.css";

const Paint = ({ paint }) => {
  return (
    <Link href={`/paint/${paint.id}`}>
      <div className={styles.paintWrapper}>
        <div> {paint.author}</div>
        <img src={paint.pictureUrl} />
      </div>
    </Link>
  );
};

const Paints = ({ paints }) => {
  return (
    <div className={styles.wrapper}>
      {paints.map((paint) => (
        <>
          <Paint paint={paint} />
        </>
      ))}
    </div>
  );
};

export default Paints;
