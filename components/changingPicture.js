import { useState, useEffect } from "react";
import Image from "next/image";
import { images } from "../constants";

function ChangingPicture() {
  const imageArray = [
    images.christmasTree,
    images.girlStanding,
    images.hotChoco,
    images.snowman,
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((count) => count + 1);
    }, 3600000);

    return () => clearInterval(timerId);
  }, []);

  const image = imageArray[count % imageArray.length];
  return (
    <div className="flex items-center mr-10 pl-10 mt-5">
      <Image src={image} height={200} width={200} alt=".." />
    </div>
  );
}

export default ChangingPicture;
