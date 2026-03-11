import { useState } from "react";

function Section3({ color, setColor, ChangeColor }) {
  const [name, setName] = useState(""); // لتخزين الاسم من المستخدم
  const [finalList, setFinalList] = useState([]); // لتخزين القائمة عند الضغط على الزر

  const randomText = [
    " went to the salon",
    " went and bought bread",
    " ate by mistake before the call to prayer",
    " completed the required task today!",
    " Very beautiful",
  ];

  // دالة تولد القائمة عند الضغط على الزر
  const handleClick = () => {
    const newList = randomText.map((t) => name + t);
    setFinalList(newList);
  };

  return (
    <section className="w-100 mt-5">
      <div className=" container-lg">
        <div
          className="card p-3 rounded w-100"
          style={{ background: "#000000be" }}
        >
          <div className="card-body p-2">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control bg-black mb-3 text-light"
                placeholder="Enter your name"
              />

              <button
                className="w-100 btn px-5 fw-semibold rounded text-light fs-6 mb-3"
                onClick={handleClick}
                style={{ backgroundColor: color }}
              >
                Create Random List
              </button>
            </div>

            <div className="">
              {finalList.length > 0 && (
                <ul className="list-group w-100">
                  {finalList.map((t, i) => (
                    <li
                      key={i}
                      className="list-group-item rounded-3 bg-black p-2 text-light mt-3"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
