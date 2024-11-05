import { useState, useEffect } from "react";


function Prompt() {

    const [currentDate, SetCurrentDate] = useState("");
    const [currentDir, SetCurrentDir] = useState("");

    useEffect(() => {
        SetCurrentDate(new Date().toUTCString());
        SetCurrentDir("user@RichardJ-Portfolio ~ %");
    },[]);
    return (
        <div className="w-full h-full">
            <p>Date: {currentDate}</p>
            {/******************* Cursor Div *********/}
            <div style={{ display: 'flex', flexDirection: 'row'}} className="w-full h-6">
                <p>{currentDir}</p>
                <div style={{ marginLeft: '.4%', marginTop: '.1%', width: '10px', height: '20px', borderColor: 'white', borderStyle: 'solid', borderWidth: '1px'}}/>
            </div>
        </div>
    );
}

export default Prompt;