import React, { useContext, useState } from "react";
import AppContext from "../../context";
import MyWorksListItem from "../MyWorksListItem/MyWorksListItem";
import { Button } from "@material-ui/core";
import styles from "./MyWorksList.module.scss";

const MyWorksList = () => {
  const { myWorks } = useContext(AppContext);
  const [limit, setLimit] = useState(9);
  return (
    <>
      <ul className={styles.galleryList}>
        {myWorks.map(
          (work, index) => index < limit && <MyWorksListItem {...work} />
        )}
      </ul>
      {myWorks.length > limit && (
        <Button
          className={styles.galleryButton}
          variant="outlined"
          onClick={() => setLimit(limit + 1)}
        >
          załaduj więcej
        </Button>
      )}
    </>
  );
};

export default MyWorksList;
