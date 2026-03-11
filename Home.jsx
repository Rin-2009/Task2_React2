import { useState } from "react";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";

function Home() {
  const [color, setColor] = useState("#f5037c");
  const ChangeColor = (e) => {
    setColor(e.target.value);
  };

  const backgrounds = [
    { id: 6, background: img7 },
    { id: 2, background: img3 },
    { id: 3, background: img4 },
    { id: 4, background: img5 },
    { id: 5, background: img6 },
    { id: 1, background: img2 },
    { id: 7, background: img8 },
  ];

  const [background, setBackground] = useState(0);

  const [lightMood, setLightMood] = useState(false);
  const ThemLight = () => {
    setLightMood(!lightMood);
  };

  return (
    <>
      <div
        key={backgrounds[background].id}
        className=""
        style={{
          backgroundImage: `url(${backgrounds[background].background})`,
          position: "relative",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "200vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: lightMood ? "rgba(0, 0, 0, 0.63)" : "transparent",
          }}
        >
          <Navbar color={color} setColor={setColor} ChangeColor={ChangeColor} />

          <Section1
            color={color}
            setColor={setColor}
            ChangeColor={ChangeColor}
            background={background}
            setBackground={setBackground}
            backgrounds={backgrounds}
            lightMood={lightMood}
            setLightMood={setLightMood}
            ThemLight={ThemLight}
          />

          <Section2
            color={color}
            setColor={setColor}
            ChangeColor={ChangeColor}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
