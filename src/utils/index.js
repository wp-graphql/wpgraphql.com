exports.flatListToHierarchical = (
  data = [],
  { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) => {
  const tree = []
  const childrenOf = {}
  data.forEach((item) => {
    const newItem = { ...item }
    const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
    childrenOf[id] = childrenOf[id] || []
    newItem[childrenKey] = childrenOf[id]
    newItem.type = `link`
    parentId
      ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
      : tree.push(newItem)
  })
  return tree
}

// Create a list of doc nodes from the yaml file that fit the existing sidebarnav components.
exports.navMenuListFromYaml = (nodes, titles) => {
  let newNav = []
  nodes.forEach((node) => {
    // Section/parents with children items
    let newItem = {
      id: node.id,
      title: node.section.name,
      path: "#",
      parent: null,
      target: null,
    }
    newNav.push(newItem)
    node.section.items.forEach((item) => {
      // If yaml item doesn't have title, look for same document from other title sources
      if (null === item.label) {
        let found_item = titles.find((elem) => elem.uri === item.uri)
        item.label = found_item ? found_item.title : null
      }
      let newItem = {
        id: null,
        title: item.label,
        path: item.uri,
        parent: node.id,
        target: null,
      }
      newNav.push(newItem)
    })
  })
  return newNav
}

exports.ensureTrailingSlash = (str) => (str.endsWith("/") ? str : `${str}/`)

exports.getPagination = (uri, nodes) => {
  let pagination = {
    current: null,
    next: null,
    previous: null,
  }

  if (!nodes || !nodes.length) {
    return null
  }

  nodes &&
    nodes.map((node, i) => {
      if (node.uri === uri) {
        pagination.current = node
        pagination.previous = i > 0 ? nodes[i - 1] : null
        pagination.next = i < nodes.length ? nodes[i + 1] : null
      }
      return pagination
    })

  return pagination
}
