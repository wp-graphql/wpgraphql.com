import React from "react";
import {Link, Box} from '@chakra-ui/react'
import {FaWordpress, FaGithub} from 'react-icons/fa'

const PluginLink = ({pluginHost, pluginLink}) => {
  let icon
  let linkText = ""
  if (pluginHost === 'github') {
    icon = FaGithub
    linkText = "View Plugin on Github"
  }
  else if (pluginHost === 'wordpress') {
    icon = FaWordpress
    linkText = "View Plugin on WordPress.org"
  }

  return (
    <Link href={pluginLink} isExternal><Box as={icon} mt={-1} size="16px" display="inline-block" /> {linkText}</Link>
  )
};

export default PluginLink;
