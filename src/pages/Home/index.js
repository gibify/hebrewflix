/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import repositoriesCategory from '../../repositories/categories';

function Home() {
  const [inicialValues, setinicialValues] = useState([]);

  useEffect(() => {
    // http://localhost:8080/categorias?_embed=videos
    repositoriesCategory.getAllWithVideos()
      .then((videosCategory) => {
        console.log(videosCategory[0].videos[0]);
        setinicialValues(videosCategory);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {inicialValues.length === 0 && (<div>Loading...</div>)}

      {inicialValues.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={inicialValues[0].videos[0].title}
                url={inicialValues[0].videos[0].url}
                videoDescription={inicialValues[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={inicialValues[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;
