import React from "react"
import {
    Box,
    Heading,
    chakra,
    Alert,
    useColorModeValue
} from "@chakra-ui/core"

export const H1 = React.forwardRef((props, ref) => {
    return <Heading apply="wp.h1" as={`h1`} ref={ref} {...props}>{props.children}</Heading>
});

export const H2 = React.forwardRef((props, ref) => {
    return <Heading apply="wp.h2" as={`h2`} ref={ref} {...props}>{props.children} <chakra.span color={useColorModeValue("gray.500", "gray.200")} >#</chakra.span></Heading>
});

export const H3 = React.forwardRef((props, ref) => {
    return <Heading apply="wp.h3" as={`h3`} ref={ref} {...props}>{props.children} <chakra.span color={useColorModeValue("gray.500", "gray.200")} >#</chakra.span></Heading>
});

export const H4 = React.forwardRef((props, ref) => {
    return <Heading apply="wp.h4" as={`h4`} ref={ref} {...props}>{props.children}</Heading>
});

export const H5 = React.forwardRef((props, ref) => {
    return <Heading apply="wp.h5" as={`h5`} ref={ref} {...props}>{props.children}</Heading>
});

export const H6 = React.forwardRef((props, ref) => {
    return <Heading apply="wp.h6" as={`h6`} ref={ref} {...props}>{props.children}</Heading>
});

export const Strong = React.forwardRef((props, ref) => {
    return <Box as={`strong`} fontWeight="semibold" ref={ref} {...props} />
});

export const InlineCode = (props) => (
    <chakra.code
        apply="wp.code"
        color={useColorModeValue("purple.500", "purple.200")}
        {...props}
    />
);

export const Br = (props) => (
    <Box height="24px" {...props} />
);

export const A = (props) => <chakra.a apply="wp.a" {...props} />;

export const P = (props) => <chakra.p apply="wp.p" {...props} />;

export const Ul = (props) => <chakra.ul apply="wp.ul" {...props} />;

export const Ol = (props) => <chakra.ol apply="wp.ul" {...props} />;

export const Li = (props) => <chakra.li pb="4px" {...props} />;

export const Blockquote = (props) => (
    <Alert
        mt="4"
        role="none"
        status="warning"
        variant="left-accent"
        as="blockquote"
        rounded="4px"
        my="1.5rem"
        {...props}
    />
);


export * from './Pre'
