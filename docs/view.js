export const renderItems = (data) => {

  const ul = document.createElement("ul");
  ul.setAttribute("itemscope", "");
  ul.setAttribute("itemtype", "https://schema.org/Thing");

  const liArray = data.map((item) => {
    const li = document.createElement("li");
    li.setAttribute("itemprop", "item");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "https://schema.org/Thing");
    li.className = "item";

    const divImg = document.createElement("div");
    li.appendChild(divImg);

    const imageUrl = document.createElement("img");
    imageUrl.setAttribute("src", item.imageUrl);
    imageUrl.setAttribute("alt", item.name);
    imageUrl.className = "card-image" 
    divImg.appendChild(imageUrl);

    const dl = document.createElement("dl");
    li.appendChild(dl);

    const dtNombre = document.createElement("dt");
    dl.appendChild(dtNombre);
    dtNombre.innerHTML = "Name: ";

    const ddNombre = document.createElement("dd");
    ddNombre.setAttribute("itemprop", "name");
    dl.appendChild(ddNombre);
    ddNombre.innerHTML = item.name;

    const dd = document.createElement("dd");
    dd.setAttribute("itemprop", "shortDescription");
    dl.appendChild(dd);
    dd.innerHTML = item.shortDescription;

    const dtGender = document.createElement('dt');
    dl.appendChild(dtGender);
    dtGender.innerHTML = "Gender: ";

    const ddGender = document.createElement('dd');
    ddGender.setAttribute("itemprop", "gender");
    dl.appendChild(ddGender);
    ddGender.innerHTML = item.facts.gender;

    const dtPetSize = document.createElement('dt');
    dl.appendChild(dtPetSize);
    dtPetSize.innerHTML = "Pet size: ";

    const ddPetSize = document.createElement('dd');
    ddPetSize.setAttribute("itemprop", "petSize");
    dl.appendChild(ddPetSize);
    ddPetSize.innerHTML = item.facts["petSize"];

    return li;
  });

  liArray.forEach(
    function (x) {
      ul.appendChild(x);
    });
  return ul;
};
