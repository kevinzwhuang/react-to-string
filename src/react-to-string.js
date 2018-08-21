const reactToString = element => {
  if (!element) {
    return '';
  }

  if (typeof element === 'string') {
    return element;
  }

  if (typeof element === 'number') {
    return String(element);
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

  return '';
}

export default reactToString;
