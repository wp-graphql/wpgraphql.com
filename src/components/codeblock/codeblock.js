import {
    Box,
    Button,
    Tag,
    chakra,
    useClipboard,
} from "@chakra-ui/core"
import theme from "prism-react-renderer/themes/nightOwl"
import React, { useState } from "react"
import { LiveEditor, LivePreview, LiveProvider } from "react-live"
import scope from "./react-live-scope"

export const liveEditorStyle = {
    fontSize: 14,
    overflowX: "auto",
    fontFamily: "SF Mono, Menlo, monospace",
    tabSize: 4,
}

const LiveCodePreview = chakra(LivePreview, {
    baseStyle: {
        fontFamily: "body",
        mt: 5,
        p: 3,
        borderWidth: 1,
        borderRadius: "12px",
    },
})

const CopyButton = (props) => (
    <Button
        size="sm"
        position="absolute"
        textTransform="uppercase"
        colorScheme="teal"
        fontSize="xs"
        height="24px"
        top={0}
        zIndex="1"
        right="1.25em"
        {...props}
    />
)

const CodeLanguageTag = (props) => (
  <Tag
    size="sm"
    position="absolute"
    textTransform="uppercase"
    colorScheme="teal"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    left="1.25em"
    {...props}
  />
)

const CodeContainer = (props) => (
    <Box padding="5" rounded="8px" my="8" bg="#011627" {...props} />
)

function CodeBlock(props) {
    const { className, manual, render, children, ...rest } = props
    const [editorCode, setEditorCode] = useState(children.trim())

    // Default language to PHP.
    let language = "php";
    let classes = className.split(" ");
    classes.forEach(element => {
      if (element.includes("lang-")) {
        language = element.replace(/lang-/, "")
      }
    })

    const { hasCopied, onCopy } = useClipboard(editorCode)

    const liveProviderProps = {
        theme,
        language,
        code: editorCode,
        scope,
        noInline: manual,
        ...rest,
    }

    return (
        <LiveProvider disabled {...liveProviderProps}>
            <Box position="relative" zIndex="0">
                <CodeLanguageTag>{language}</CodeLanguageTag>
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
