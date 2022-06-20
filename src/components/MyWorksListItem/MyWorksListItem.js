import React, { useContext } from "react";
import AppContext from "../../context";
import styles from "./MyWorksListItem.module.scss";

const MyWorksListItem = ({ workId, workTitle, image }) => {
  const { handleImageModalOpen } = useContext(AppContext);
  return (
    <>
      <img
        class={styles.makeupPhoto}
        src={image}
        alt={workTitle}
        onClick={() => handleImageModalOpen(image)}
      />
    </>
  );
};

export default MyWorksListItem;
