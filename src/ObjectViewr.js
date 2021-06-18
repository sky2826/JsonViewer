import React,{useState} from 'react'

const ObjectViewr = ({marginLeft,data,heading}) => {
    const [display,setDisplay] = useState("expand");
    const handleButton = ()=>{
        if(display=="expand")
        setDisplay("collapse");
        else
        setDisplay("expand");
    }
    const fieldColor = (type)=>{
        if(type == "string")
        return "green";
        else if(type == "number")
        return "blue";
        else if(type == "boolean")
        return "grey";
        else
        return "red"
    }
    return (
        <>
        <div style={{marginLeft:marginLeft}}>{display=="expand"
        ? <img onClick={handleButton} src="https://png.pngitem.com/pimgs/s/19-191766_button-minus-hd-png-download.png" />
        : <img onClick={handleButton} src="https://png.pngitem.com/pimgs/s/19-191807_plus-add-addition-button-sign-symbol-icon-round.png" />}<b>{'{}'+heading}</b></div>
        {display === "expand"
        ? Object.entries(data).map((val)=>{
            if(val[1] && typeof val[1] == "object")
            {
                return <ObjectViewr marginLeft={marginLeft+10} data={val[1]} heading={val[0]}></ObjectViewr>
            }
            else
            {
                return <div style={{marginLeft:marginLeft+10}}>{val[0] + " : "}<span style={{color:fieldColor(typeof val[1])}}>{String(val[1])}{console.log(val[1])}</span></div>
            }
        })
        : <></>}
        </>
    );
}

export default ObjectViewr
