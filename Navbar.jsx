

function Navbar({color, setColor, ChangeColor}){
    return(
        <>
        <div className=" navbar navbar-expand-lg sticky-top" style={{borderBottom:`2px solid ${color}`}}>
            <div className=" container justify-content-center align-items-center d-flex">
                <h1 className=" fw-semibold fst-italic" style={{color:color}}>ALAA ALDIN ALHALLAK ACADEMY</h1>
            </div>
        </div>
        </>
    );
}

export default Navbar;