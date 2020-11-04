import React from "react"
import { Link as GatsbyLink } from 'gatsby'
import {
    Box,
    Heading,
    chakra,
    Alert,
    Link,
    useColorModeValue
} from "@chakra-ui/core"
import slugger from 'slugger'

export const H1 = ((props) => {
    return <Heading apply="wp.h1" as={`h1`} {...props}>{props.children}</Heading>
});

export const H2 = ((props) => {
    const slug = slugger(props.children[0]);
    return (
        <Heading apply="wp.h2" as={`h2`} {...props}>
            <Link as={GatsbyLink} to={'#' + slug}>
                {props.children}
            </Link>
            <chakra.span mt="-120px" pb="120px" display="block" id={slug} />
        </Heading>
    )
});

export const H3 = ((props) => {
    const slug = slugger(props.children[0]);
    return (
        <Heading apply="wp.h3" as={`h3`} {...props}>
            <Link as={GatsbyLink} to={'#' + slug}>
                {props.children}
            </Link>
            <chakra.span mt="-120px" pb="120px" display="block" id={slug} />
        </Heading>
    )
});

export const H4 = ((props) => {
    const slug = slugger(props.children[0]);
    return (
        <Heading apply="wp.h4" as={`h4`} {...props}>
            <Link as={GatsbyLink} to={'#' + slug}>
                {props.children}
            </Link>
            <chakra.span mt="-120px" pb="120px" display="block" id={slug} />
        </Heading>
    )
});

export const H5 = ((props) => {
    const slug = slugger(props.children[0]);
    return (
        <Heading apply="wp.h5" as={`h5`} {...props}>
            <Link as={GatsbyLink} to={'#' + slug}>
                {props.children}
            </Link>
            <chakra.span mt="-120px" pb="120px" display="block" id={slug} />
        </Heading>
    )
});

export const H6 = ((props) => {
    const slug = slugger(props.children[0]);
    return (
        <Heading apply="wp.h6" as={`h6`} {...props}>
            <Link as={GatsbyLink} to={'#' + slug}>
                {props.children}
            </Link>
            <chakra.span mt="-120px" pb="120px" display="block" id={slug} />
        </Heading>
    )
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

export const Code = (props) => (
    <chakra.code
        apply="wp.code"
        color={useColorModeValue("gray.700", "gray.200")}
        background={useColorModeValue("gray.200", "gray.700")}
        {...props}
    />
)

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

export const Noscript = (props) => {
    return <noscript {...props} />
};

export * from './Pre'
