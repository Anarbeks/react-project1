import React from "react";
import styles from "./NotFoundPage.module.css";
console.log(styles);

const NotFoundPage = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😿</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>
        К сожалению данный товар отсутствует.
      </p>
    </div>
  );
};

export default NotFoundPage;
