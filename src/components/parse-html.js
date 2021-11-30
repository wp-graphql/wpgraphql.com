import React from "react"
import ReactHtmlParser from "react-html-parser"
import * as ParsedComponents from "./parsed-components/ParsedComponents"
import * as DocsComponents from "./parsed-components/index"

const formatStringToCamelCase = (str) => {
  const splitted = str.split("-")
  if (splitted.length === 1) return splitted[0]
  return (
    splitted[0] +
    splitted
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join("")
  )
}

export const getStyleObjectFromString = (styles) => {
  if (!styles) {
    return
  }

  const style = {}

  styles.split(";").forEach((declaration) => {
    const [property, value] = declaration.split(":")
    if (!property) return

    const formattedProperty = formatStringToCamelCase(property.trim())
    style[formattedProperty] = value ? value.trim() : null
  })

  return style
}

export const ParseHtmlToReact = (html, components, reduceHeadings = false) => {
  if (!html) {
    return null
  }

  const transform = (node, i = 0) => {
    if (node.type !== "tag" && node.type !== `script`) {
      return
    }

    let componentName = node.name.charAt(0).toUpperCase() + node.name.slice(1)
    // Allow heading sizes to be reduced for large chunks of parsed content.
    if (
      reduceHeadings &&
      componentName.startsWith("H") &&
      componentName.length === 2
    ) {
      componentName = `H${parseInt(componentName[1]) + 1}`
    }

    if (!components[componentName] && typeof window !== `undefined`) {
      console.error(`No component was found for ${node.type}, ${node.name}`)
    }

    const Component = components[componentName]

    const props = {
      ...node.attribs,
      style: getStyleObjectFromString(node.attribs.style),
    }

    if (props.class) {
      props.className = props.class
      delete props.class
    }

    if (Component && node?.children?.length) {
      return (
        <Component {...props} key={i}>
          {node.children.map((child, i) => {
            if (child.type === `text`) {
              return child.data
            }

            return transform(child, i)
          })}
        </Component>
      )
    } else if (Component) {
      return <Component {...props} key={i} />
    }

    return null
  }

  const Component = ReactHtmlParser(html, {
    transform,
  })

  return Component
}

export const ParseHtml = (html, overrideComponents, reduceHeadings = false) =>
  ParseHtmlToReact(
    html,
    { ...ParsedComponents, ...DocsComponents, ...overrideComponents },
    reduceHeadings
  )
