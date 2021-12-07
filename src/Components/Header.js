import React from "react";
function Header({page,setPage}) {
    return (
        <div className="Header container">
            <div className="row">
                <h1 className="col-8 my-2">Carsdan Dvorachek</h1>
                <div className="row col-4 text-center">
                    {(page !== 'home') ? <h5 className="col-3 my-4" onClick={()=>setPage('home')}>Home</h5> : null}
                    {(page !== 'work') ? <h5 className="col-3 my-4" onClick={()=>setPage('work')}>Work</h5> : null}
                    {(page !== 'contact') ? <h5 className="col-3 my-4" onClick={()=>setPage('contact')}>Contact</h5> : null}
                    {(page !== 'resume') ? <h5 className="col-3 my-4" onClick={()=>setPage('resume')}>Resume</h5> : null}
                    {(page !== 'about') ? <h5 className="col-3 my-4" onClick={()=>setPage('about')}>About</h5> : null}
                </div>
            </div>
        </div>
    );
}

export default Header;
