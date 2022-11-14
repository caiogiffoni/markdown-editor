import { Box, Text, Textarea } from "@chakra-ui/react";
import { marked } from "marked";
import { useState } from "react";
import "./App.css";

function App() {
  const defaultText = `
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`

// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == \'\`\`\`\' && lastLine == \'\`\`\`\') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) 

 
  `;

  const [editor, setEditor] = useState(defaultText);
  return (
    <Box bgColor="#87B5B5" minH="100vh">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        pb="25px"
      >
        <Box
          w="594px"
          h="24px"
          bgColor="#4aa3a3"
          border="1px solid #1d2f2f"
          boxShadow="1px 1px 10px 2px #3a5f5f"
          mt="25px"
        >
          <Text pl="12px" m="0px">
            Editor
          </Text>
        </Box>
        <Box>
          <Textarea
            id="editor"
            borderRadius="0px"
            p="0px 5px"
            w="594px"
            h="200px"
            bgColor="#c0d8d8"
            border="1px solid #1d2f2f"
            boxShadow="1px 1px 10px 2px #3a5f5f"
            value={editor}
            onChange={(e) => setEditor(e.currentTarget.value)}
            boxSizing="border-box"
          />
        </Box>
        <Box
          w="800px"
          h="24px"
          bgColor="#4aa3a3"
          border="1px solid #1d2f2f"
          boxShadow="1px 1px 10px 2px #3a5f5f"
          mt="25px"
        >
          <Text pl="12px" m="0px">
            Previewer
          </Text>
        </Box>
        <Box>
          <Box
            borderRadius="0px"
            w="800px"
            minH="200px"
            bgColor="#c0d8d8"
            border="1px solid #1d2f2f"
            boxShadow="1px 1px 10px 2px #3a5f5f"
          >
            <Box
              id="preview"
              p="0px 16px"
              boxSizing="border-box"
              dangerouslySetInnerHTML={{
                __html: `${marked(editor, { breaks: true })}`,
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
