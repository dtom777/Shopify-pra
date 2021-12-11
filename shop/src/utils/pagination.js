exports.getCurPageItems = (page, perPage, items) => {
  const startIndex = +page * perPage - perPage;
  const endIndex = startIndex + perPage;
  return items.slice(startIndex, endIndex);
};
