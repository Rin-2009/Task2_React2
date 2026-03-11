import { useEffect, useState } from "react";

function Section2({color, setColor, ChangeColor}) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatTime = `${minutes.toString().padStart(2, "0")}: ${seconds.toString().padStart(2, "0")}`;

  return (
    <>
      <section className=" w-100 mt-5">
        <div className=" container-lg">
          <div
            className=" card p-4 rounded-2 w-100"
            style={{ background: "#000000be" }}
          > 
          <h3 style={{color:color}}>Timer</h3>
            <div className=" card-body justify-content-center align-items-center text-center d-flex">
              <h2 style={{color:color}}>{formatTime}</h2>
            </div>

            
              <div className=" justify-content-start align-items-center d-flex mt-4 gap-3" >
                <button className=" btn rounded-3 text-light px-4" style={{backgroundColor:color}}>Start</button>
                <button className=" btn rounded-3 text-light px-4" style={{backgroundColor:color}}>Stop</button>
              </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
