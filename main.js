let listShower = document.querySelector(".header .listshower");

listShower.onclick = function ayman() {
  let popup = document.createElement("div");
  popup.classList.add("popup");
  document.body.appendChild(popup);

  let a1 = document.createElement("div");
  a1.innerHTML = "HOME";
  popup.appendChild(a1);

  let a2 = document.createElement("div");
  a2.innerHTML = "PAGES";
  popup.appendChild(a2);

  let a3 = document.createElement("div");
  a3.innerHTML = "FEATURES";
  popup.appendChild(a3);

  let a4 = document.createElement("div");
  a4.innerHTML = "DEMOS";
  popup.appendChild(a4);

  let a5 = document.createElement("div");
  a5.innerHTML = "SHOP";
  popup.appendChild(a5);

  let a6 = document.createElement("div");
  a6.innerHTML = "BLOG";
  popup.appendChild(a6);

  a1.onclick = function () {
    popup.remove();
  };
  a2.onclick = function () {
    popup.remove();
  };
  a3.onclick = function () {
    popup.remove();
  };
  a4.onclick = function () {
    popup.remove();
  };
  a5.onclick = function () {
    popup.remove();
  };
  a6.onclick = function () {
    popup.remove();
  };

  listShower.onclick = function () {
    popup.remove();
    listShower.onclick = function () {
      ayman();
    };
  };
};
