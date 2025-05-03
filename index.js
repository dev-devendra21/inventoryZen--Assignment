document.addEventListener("DOMContentLoaded", function () {
  const productRow = document.getElementById("addNewProductRow");
  const scrollBtn = document.getElementById("scrollBtn");
  const menuBtnOpen = document.getElementById("menuBtnOpen");
  const menuBtnClose = document.getElementById("menuBtnClose");
  const menuContainer = document.getElementById("menuContainer");

  const products = [
    {
      imgSrc: "./assets/img/round-neck.png",
      alt: "round neck t shirts",
      title: "Round-Neck T-Shirts",
    },
    {
      imgSrc: "./assets/img/u-neck.png",
      alt: "u neck t shirts",
      title: "U-Neck T-Shirts",
    },
    {
      imgSrc: "./assets/img/v-neck.png",
      alt: "v neck t shirts",
      title: "V-Neck T-Shirts",
    },
    {
      imgSrc: "./assets/img/polo.png",
      alt: "polo t shirts",
      title: "Polo T-shirts",
    },
  ];

  function wrapperFunction(product) {
    const productHTML = `
    <div class="col-lg-3 my-3 col-md-4 col-6">
      <div class="custom-card">
        <img
          src=${product.imgSrc}
          alt=${product.alt}
          class="custom-card-img"
        />
        <section class="d-flex justify-content-between align-items-center p-3">
          <div>
            <p class="mb-0 custom-card-subtitle">${product.title}</p>
            <p class="custom-card-link">Explore Now!</p>
          </div>
          <div>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </section>
      </div>
    </div>
  `;

    return productHTML;
  }

  scrollBtn.addEventListener("click", () => {
    let combinedHTML = "";
    let i = 0;
    while (i < 3) {
      products.forEach((product) => {
        combinedHTML += wrapperFunction(product);
      });
      i++;
    }

    productRow.innerHTML += combinedHTML;
  });

  menuBtnOpen.addEventListener("click", () => {
    // menuContainer.classList.remove("d-none");
    menuContainer.classList.add("nav-menu-open");
  });

  menuBtnClose.addEventListener("click", () => {
    menuContainer.classList.remove("nav-menu-open");
  });
});
