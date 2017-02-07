const reactToString = element => {
  if (typeof element === 'string') {
    return element;
  }
  const children = element.props.children;
  if (typeof children === 'string') {
    return children;
  }
  if (Array.isArray(children)) {
    return children.map(grandchild => reactToString(grandchild)).join('');
  }
}

export default reactToString;
