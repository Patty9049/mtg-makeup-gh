import React, { useState, useEffect } from "react";
import Router from "./routing/Router";
import AppContext from "./context";
import { client } from "./contentful/config";

const App = () => {
  const [myWorks, setMyWorks] = useState([]);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectImage, setSelectImage] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleImageModalOpen = (image) => {
    setSelectImage(image);
    setImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setImageModalOpen(false);
  };

  const setMyWorksData = (data) => {
    const formattedMyWorks = data.map((item) => {
      const workId = item.sys.id;
      const image = item.fields.image.fields.file.url;
      const workTitle = item.fields.imageTitle;

      return {
        workId,
        image,
        workTitle,
      };
    });

    setMyWorks([...formattedMyWorks]);
  };

  const getMyWorksData = () => {
    client
      .getEntries({
        content_type: "galleryImage",
      })
      .then((res) => {
        setMyWorksData(res.items);
      })
      .catch((err) => console.log(err));
  };

  const onClickOpenMenu = () => {
    setMenuOpen(true);
  };
  const onClickCloseMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    getMyWorksData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        myWorks,
        imageModalOpen,
        selectImage,
        handleImageModalClose,
        handleImageModalOpen,
        isMenuOpen,
        onClickOpenMenu,
        onClickCloseMenu,
      }}
    >
      <Router />
    </AppContext.Provider>
  );
};

export default App;
