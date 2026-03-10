import "./Section1.css";   


function Section1({color, setColor, ChangeColor, background, setBackground, backgrounds, lightMood, setLightMood, ThemLight}){
    return(
        <>
        <section className="w-100 mt-5">
        <div className=" container-lg">
            <div className=" d-lg-flex align-content-start justify-content-start gap-3 mb-4">
             
             <label className=" form-label d-flex align-items-center gap-4" style={{color:color}}>
                Change Color
                <input type="color" name="" id="" value={color} onChange={ChangeColor} />
             </label>

            <div className="btns-sec-1 d-flex justify-content-start align-content-center gap-3">
                 <button className=" btn text-light px-4 fw-semibold fs-6 text-btn" style={{backgroundColor:color}} onClick={ThemLight}>
                Light Moode
             </button>

             <button className="btn text-light px-4 fw-semibold fs-6 text-btn" style={{backgroundColor:color}}>
                add a Task
             </button>

             <button className="btn text-light px-4 fw-semibold fs-6 text-btn" style={{backgroundColor:color}} onClick={()=> setBackground(prev => (prev + 1) % backgrounds.length)}>
                Next background
             </button>
            </div>
            </div>

        <div className=" card w-100 rounded-2 p-3" style={{background:"#000000be"}}>
            <h3 className=" fw-light fs-4 mb-4 text-sm-center text-md-center" style={{color:color}}>TASK MANAGER</h3>
            <input type="text" name="" id="" className="bg-dark rounded form-control w-50 input-tasks" style={{borderBottom: `1px solid ${color}`}}/>
        </div>
        </div>
        </section>
        </>
    );
}

export default Section1;