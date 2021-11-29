import { Box, Button, Tag, useClipboard } from "@chakra-ui/react"
import theme from "prism-react-renderer/themes/nightOwl"
import React, { useState } from "react"
import { LiveEditor, LiveProvider } from "react-live"
import scope from "./react-live-scope"

export const liveEditorStyle = {
  fontSize: 14,
  overflowX: "auto",
  fontFamily: "SF Mono, Menlo, monospace",
  tabSize: 4,
}

const CopyButton = (props) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    colorScheme="blue"
    backgroundColor={"blue.600"}
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    right="1.25em"
    mt="3"
    {...props}
  />
)

const CodeLanguageTag = (props) => (
  <Tag
    size="sm"
    position="absolute"
    textTransform="uppercase"
    colorScheme="purple"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    left="1.25em"
    mt="3"
    as={"label"}
    {...props}
  />
)

const CodeContainer = (props) => (
  <Box padding="5" pt="10" rounded="8px" my="8" bg="#011627" {...props} />
)

function CodeBlock(props) {
  const { className, manual, render, children, ...rest } = props
  const [editorCode] = useState(children.trim())

  // Default language to PHP.
  let language = "php"
  let setLanguage = ""
  let classes = className ? className.split(" ") : []
  classes.forEach((element) => {
    if (element.includes("lang-")) {
      setLanguage = element.replace(/lang-/, "")
    } else if (element.includes("language-")) {
      setLanguage = element.replace(/language-/, "")
    }
  })

  const { hasCopied, onCopy } = useClipboard(editorCode)

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    scope,
    disabled: true,
    noInline: true,
    ...rest,
  }

  return (
    <LiveProvider
      className="code-block"
      disabled
      {...liveProviderProps}
      style={{ height: "auto" }}
    >
      <Box position="relative" zIndex="0">
        {setLanguage && <CodeLanguageTag>{setLanguage}</CodeLanguageTag>}
        <CodeContainer>
          <LiveEditor style={liveEditorStyle} />
        </CodeContainer>
        <CopyButton onClick={onCopy}>
          {hasCopied ? "copied" : "copy"}
        </CopyButton>
      </Box>
    </LiveProvider>
  )
}

CodeBlock.defaultProps = {
  mountStylesheet: false,
}

export default CodeBlock
