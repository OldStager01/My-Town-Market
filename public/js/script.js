const submitQuery = (query = null) => {
  let url;
  if (query != null) {
    url = `/business?category=${query}`;
  } else {
    url = `/business`;
  }
  window.location.href = url;
};
const gotoBusiness = (id) => {
  const url = `business/${id}`;
  window.location = url;
};
