const getPath = (name, path) => {
  const seg = path.split('/');
  const index = seg.findIndex(i => i === name);
  seg.splice(index + 1);
  return seg.filter(i => i !== 'home').join('/');
};

const getLabel = name => {
  const seg = name.split('-');
  return seg
    .map(s => {
      if (s === 'and') return '&';
      return s.split('')[0].toUpperCase() + s.split('').slice(1).join('');
    })
    .join(' ');
};

const createListItem = (name, path) => {
  const element = document.createElement('sl-breadcrumb-item');

  element.setAttribute('href', `/${getPath(name, path)}`);

  if (name === 'home') {
    const homeIcon = document.createElement('sl-icon');
    homeIcon.setAttribute('slot', 'prefix');
    homeIcon.setAttribute('name', 'house');
    element.appendChild(homeIcon);
  }

  const label = getLabel(name);

  const content = document.createTextNode(label);

  element.appendChild(content);
  return element;
};

const renderBreadCrumb = () => {
  const breadcrumb = document.getElementById('breadcrumb');
  const path = breadcrumb.dataset.breadcrumb;
  const list = path.split('/');
  const target = document.querySelector('.breadcrumb-list');

  list.forEach(item => {
    target.appendChild(createListItem(item, path));
  });
};

export default renderBreadCrumb;
