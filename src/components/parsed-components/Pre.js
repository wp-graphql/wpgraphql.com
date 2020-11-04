import React from "react"
import { chakra } from "@chakra-ui/core"
import CodeBlock from '../codeblock/CodeBlock'

export const Pre = props => {
    const { children } = props;
    const code = children && children[0].props && children[0].props.children && children[0].props.children[0] ? children[0].props.children[0] : null;

    // Sometimes the classname will be on the code tag and not on the pre tag.
    let additionalProps = {}
    if (!props.className && children.length && children[0].props && children[0].props.className) {
      additionalProps.className = children[0].props.className
    }

    return code && ( 'string' === typeof code ) ? (
        <chakra.div position="relative" {...props}>
            <CodeBlock {...props} {...additionalProps}>{code}</CodeBlock>
        </chakra.div>
    ) : null;
};
