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
