import { useState, useEffect } from "react";

function Section4({ color, setColor, ChangeColor, completed, tasks }) {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    var timer;

    if (loading) {
      const timer = setTimeout(() => {
        setText("the data was added successfully!");
        setLoading(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  const handleClick = () => {
    setLoading(true);
    setText("");
  };

  const [count, setCount] = useState(0);
  const increasCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <section className=" w-100 mt-5">
        <div className=" container-lg">
          <div
            className=" card p-3 w-100 rounded-3"
            style={{ background: "#000000be" }}
          >
            <div className=" justify-content-center align-items-center d-flex">
              {loading && <p className=" lead text-light">Loading...</p>}
              {!loading && text && (
                <p className=" text-light fs-5 fst-italic">{text}</p>
              )}
            </div>

            <button
              className=" btn px-5 fw-semibold fs-6 text-light"
              style={{ backgroundColor: color }}
              onClick={handleClick}
            >
              loading data
            </button>
          </div>
        </div>
      </section>

      <section className=" w-100 p-3">
        <div className=" container-lg">
          <div
            className=" card p-3 w-100 rounded-3"
            style={{ background: "#000000be" }}
          >
            <div className=" card-body justify-content-between d-flex align-items-center">
              <div>
                <h3 className="fw-semibold fst-italic" style={{ color: color }}>
                  All tasks
                </h3>
                <p className=" text-light">
                  {completed} / {tasks.length}
                </p>
              </div>

              <div>
                <h3 className=" text-center text-light">Count: {count}</h3>
                <button
                  className=" btn px-5 fw-semibold fs-6 text-light"
                  onClick={increasCount}
                  style={{ backgroundColor: color }}
                >
                  increasCount
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section4;
