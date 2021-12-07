import React from "react";

function Resume() {
    return (
        <div className="Home container">
            <div className="row">
                <h4 onClick={()=>window.location = 'https://docs.google.com/document/d/1j-Xrj3-5gbmuDNx5ed8SDDBOELTYSpCiIvPzx-iGKAI/edit?usp=sharing'}>My Resume</h4>
            </div>
        </div>
    );
}

export default Resume;