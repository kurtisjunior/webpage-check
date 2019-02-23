onSubmit = e => {
  event.preventDefault();
  const url = e.value;
  makeGetRequest(url);
  document.getElementById("url-form").reset();
};
