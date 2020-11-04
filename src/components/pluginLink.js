import React from "react";
import {Link, Box, Text} from '@chakra-ui/core'
import {FaWordpress, FaGithub} from 'react-icons/fa'
import { ParseHtml } from "../components/parse-html"

const PluginLink = ({pluginHost, pluginLink}) => {
  let icon
  if (pluginHost == 'github') {
    icon = FaGithub
  }
  else if (pluginHost == 'wordpress') {
    icon = FaWordpress
  }

  return (
    <Link href={pluginLink} isExternal><Box as={icon} mt={-1} size="16px" display="inline-block" /> <Text display="inline-block">View Plugin</Text></Link>
  )
};

export default PluginLink;
