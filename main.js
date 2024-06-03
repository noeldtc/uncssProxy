  function handleResponse(data) {
    console.log(data);
  }

  var script = document.createElement('script');
  script.src = 'https://example.com/data?callback=handleResponse';
  document.body.appendChild(script);
