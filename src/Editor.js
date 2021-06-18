import React from 'react'
// Import Brace and the AceEditor Component
import brace from 'brace';
import AceEditor from 'react-ace';

// Import a Mode (language)
import 'brace/mode/java';

// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/github';

const Editor = ({value,handleJsonChange}) => {
    
    return (
            <AceEditor
                    padding="0px"
                    margin="0px"
                    mode="java"
                    theme="github"
                    height="95vh"
                    width="100%"
                    onChange={handleJsonChange}
                    value={value}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{
                        $blockScrolling: true
                    }}
                />
    )
}

export default Editor
