import React, {useState} from "react";

function Resume({url,githuburl,title}) {
    const goToGitHub = () => {
        window.location = githuburl;
    }

    const goToProject = () => {
        window.location = url;
    }

    return (
        <div className="Home container">
            <div className="row">
                <div>
                    <h4 onClick={()=>goToProject()}>{title}</h4>
                    <button onClick={()=>goToGitHub()}>GitHub</button>
                </div>
            </div>
        </div>
    );
}

export default Resume;