const reactToString = element => {
  if (typeof element === 'string') {
    return element;
  }

  if (Array.isArray(element)) {
    return element.map(subElement => reactToString(subElement)).join('');
  }

  if (element.props && element.props.children) {
    return reactToString(element.props.children);
  }

  if (element.props && !element.props.children) {
    return '';
  }
}

export default reactToString;
