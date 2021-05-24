const registerRequest = async (form) => {
  const URL = 'http://localhost:8800';
  const API = `${URL}/signup`;

  const response = await fetch(API, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(form)
  });
  const data = await response.json();

  return data;
}

export default registerRequest;