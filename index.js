let all = [
  {
    title: document.getElementById("").value,
    Image: document.getElementById("").value,
    description: document.getElementById("").value,
    price: document.getElementById("").value,
  },
];

for (let i = 0; i < all.length; i++) {
  document.querySelector("#all_section").innerHTML += `
  <img onclick="toggleActive('#all_section${i}')" src=${all[i].image} id="image${i}">
  <p src=${all[i].image}></p>
  <div class="modal" id="info${i}">
  <button onclick="toggleActive('#info${i}')">close</button>
  ${all[i].description}
  </div>
  `;
}
function toggleActive(el) {
  document.querySelector(el).classList.toggle("active");
}
