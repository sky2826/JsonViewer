import React,{useState,useEffect} from 'react'
import ObjectViewer from './ObjectViewr'
import Editor from './Editor'
const Json = {"message": "Enter Json Here"}
const error = {"message" : "Enter Valid Json"};
const Item = (key,value) => {
    return <div>{key}</div>
}
const JsonViewer = () => {
    const[json,setJson] = useState(Json) 
    const[jsonString,setJsonString] = useState(JSON.stringify(Json))

    const IsValidJSONString = (str)=>{
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
    }
    const handleJsonChange = (newJson)=>{
        if(IsValidJSONString(newJson))
        {setJson(JSON.parse(newJson)); setJsonString(newJson)}
        else
        {
            setJson(error);
            setJsonString(newJson);
        }
    } 
    return (
        <>
        <header style={{width:"100vw",backgroundColor:"black",color:'white',textAlign:"center"}} >JSON Viewer</header>
        <div id="jsonviewer">
        <div style={{width:"70vw",height:"95vh",overflowY:"auto"}}>
            <ObjectViewer marginLeft={0} data={json} heading={"JSON"}/>
        </div>
        <div style={{width:"30vw",padding:"5px"}}><Editor value={jsonString} handleJsonChange={handleJsonChange}/></div>
        </div>
        </>
    )
}

export default JsonViewer
