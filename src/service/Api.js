const postDataFetch = (data) => {
  return fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default postDataFetch;
/*twitterShare.classList.remove('hiddenTwitter');
      lineTwitter.classList.add('hiddenLine');
      if (data.success === true) {
        textURL.innerHTML = data.cardURL;
        textURL.setAttribute('href', data.cardURL);
        buttonTwitterLink.href = `https://twitter.com/intent/tweet?url=${data.cardURL}`;
      } else {
        let textNoURL = `Por favor revise los datos introducidos`;
        textTitle.innerHTML = `Error al crear la tarjeta:`;
        const newItem = document.createElement('a');
        const newContent = document.createTextNode(textNoURL);
        newItem.appendChild(newContent);
        textURL.appendChild(newItem);
        buttonTwitter.remove();
        textURL.removeAttribute('href');
      }*/
