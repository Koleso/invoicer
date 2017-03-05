const classes = (moduleName, elementName, modifiers = []) => {
  let className = elementName ? `${moduleName}-${elementName}` : `${moduleName}`;

  if (modifiers.length) {
    className = modifiers.filter(x => x).reduce((acc, modifier) => `${acc} ${className}--${modifier}`, className);
  }

  return className;
}

export default classes;