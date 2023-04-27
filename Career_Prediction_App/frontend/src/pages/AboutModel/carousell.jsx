import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./item";

import { images } from "../../constants/";

// function Example(props)
// {

//     var slider = [
//         {
//             id:1,

//             title: "Five factor model"
//         },
//         {
//             id :2,

//             title:"Five factor model"
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 slider.map( (item) => <Item key={item.id} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// export default Example;

function Example(props) {
  var items = [
    {
      image: images.FM,
      name: "Five Factor Model",
      description: "Five attributes of Five Factor Model",
    },
    {
      image:
        "https://practicalpie.com/wp-content/uploads/2021/12/013-Five-factor-model.jpg",
      name: "Five Factor Model",
      description: "Five attributes of Five Factor Model",
    },
    {
      image:
        "https://www.simplypsychology.org/wp-content/uploads/big-5-personality-1024x512.jpeg",
      name: "Five Factor Model",
      description:
        "Each trait represents a continuum. Individuals can fall anywhere on the continuum for each trait.",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Example;
