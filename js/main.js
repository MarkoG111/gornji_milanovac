$(document).ready(function () {
  /******************** SANDWICH BUTTON ********************/
  document.getElementById("sidenav__button").addEventListener("click", openNav);
  document.getElementById("x").addEventListener("click", closeNav);

  function openNav() {
    document.getElementById("mySidenav").style.width = "28rem";
    document.getElementById("sidenav__button").style.display = "none";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("sidenav__button").style.display = "block";
  }

  let dropdown = document.getElementsByClassName("dropdown-btn");
  let i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("dropdown__item");
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }

  /******************** SLOW WRITE FUNCTION ********************/
  let heading = document.getElementById("slow-text");
  let content = "Gornji Milanovac";
  let array = content.split("");
  // console.log(array);

  let counter = 0;
  let time;

  function writing() {
    heading.innerHTML += array[counter];
    counter++;
    time = setTimeout(writing, 500);
    if (counter >= array.length) {
      stop();
    }
  }

  function stop() {
    clearTimeout(time);
  }

  writing();

  /******************** REGIULAR EXPRESSIONS ********************/
  document.getElementById("tbName").addEventListener("blur", checkName);
  document.getElementById("tbName").classList.add("cssBorder");
  document.getElementById("tbEmail").addEventListener("blur", checkEmail);
  document.getElementById("tbEmail").classList.add("cssBorder");
  document.getElementById("message").addEventListener("blur", checkMessage);
  document.getElementById("message").classList.add("cssBorder");
  document.getElementById("send").addEventListener("click", checkForm);

  let reName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,11}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,11})+$/;
  let reEmail = /^[\w]+[\.\w\d]*\@[\w]+([\.][\w]+)+$/;
  let reMessage = /^[\w\W\d\D\s\S\b\B\n\r\t]{15,}$/;

  function checkName() {
    let name = document.getElementById("tbName").value;
    if (!reName.test(name)) {
      document.getElementById("tbName").classList.add("notCorrect");
    } else {
      document.getElementById("tbName").classList.remove("notCorrect");
    }
  }

  function checkEmail() {
    let email = document.getElementById("tbEmail").value;
    if (!reEmail.test(email)) {
      document.getElementById("tbEmail").classList.add("notCorrect");
    } else {
      document.getElementById("tbEmail").classList.remove("notCorrect");
    }
  }

  function checkMessage() {
    let message = document.getElementById("message").value;
    if (!reMessage.test(message)) {
      document.getElementById("message").classList.add("notCorrect");
    } else {
      document.getElementById("message").classList.remove("notCorrect");
    }
  }

  function checkForm() {
    let gender = document.getElementsByName("gender");

    let choosen = "";
    for (i = 0; i < gender.length; i++) {
      if (gender[i].checked == true) {
        choosen = gender[i].value;
        break;
      }
    }

    let name = document.getElementById("tbName").value;
    let email = document.getElementById("tbEmail").value;
    let message = document.getElementById("message").value;

    let arrayMistakes = [];

    if ($(".notCorrect").length || name == "" || email == "" || message == "") {
      if (!reName.test(name))
        arrayMistakes.push("Name and surname are not in good format!");
      if (!reEmail.test(email))
        arrayMistakes.push("Email is not in good format!");
      if (choosen == "") arrayMistakes.push("You must choose gender!");
      if (!reMessage.test(message))
        arrayMistakes.push("Message must containt at least 15 characters!");

      writeMistakes(arrayMistakes);
      checkEmpty(name, email, message);
    } else {
      alert("Message sent succesfully!");
      document.getElementById("mistakes").innerHTML = "";
    }
  }

  function writeMistakes(arrayMistakes) {
    let print = "<ul>";
    for (let i = 0; i < arrayMistakes.length; i++) {
      print += "<li>" + arrayMistakes[i] + "</li>";
    }
    print += "</ul>";
    document.getElementById("mistakes").innerHTML = print;
  }

  function checkEmpty(name, email, message) {
    if (name == "")
      document.getElementById("tbName").classList.add("notCorrect");
    if (email == "")
      document.getElementById("tbEmail").classList.add("notCorrect");
    if (message == "")
      document.getElementById("message").classList.add("notCorrect");
  }

  /******************** DYNAMIC STATS ********************/
  $.ajax({
    url: "data/stats.json",
    type: "GET",
    data: "json",
    success: function (stats) {
      addStats(stats);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function addStats(stats) {
    let print = "";

    stats.forEach((el) => {
      print += `
        <div class="col-1-of-4">
            <div class="stats__item">
                <i class="fas ${el.icon} fa-5x"></i>
                <h3>
                    <span class="counter">${el.stats.number}</span>
                </h3>
                <p class="paragraph">${el.stats.text}</p>
            </div>
        </div>
        `;
    });

    document.querySelector(".stats").innerHTML = print;
  }

  /******************** DYNAMIC NEWS ********************/
  $.ajax({
    url: "data/news.json",
    type: "GET",
    data: "json",
    success: function (news) {
      addNews(news);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function addNews(news) {
    for (let i = 0; i < news.length; i++) {
      if (i == 0 && i < 1) {
        let print = "";
        print +=
          "<p>" +
          news[i].text +
          "</p>" +
          '<p class="hidden">' +
          news[i].textInvisible +
          '</p><input type="button" class="readBtn btnMore" value="Read More" />';
        document.getElementsByClassName("newsWrapper")[0].innerHTML = print;
      } else if (i == 1 && i < 2) {
        let print = "";
        print +=
          "<p>" +
          news[i].text +
          "</p>" +
          '<p class="hidden">' +
          news[i].textInvisible +
          '</p><input type="button" class="readBtn btnMore" value="Read More" />';
        document.getElementsByClassName("newsWrapper")[1].innerHTML = print;
      } else if (i == 2 && i < 3) {
        let print = "";
        print +=
          "<p>" +
          news[i].text +
          "</p>" +
          '<p class="hidden">' +
          news[i].textInvisible +
          '</p><input type="button" class="readBtn btnMore" value="Read More" />';
        document.getElementsByClassName("newsWrapper")[2].innerHTML = print;
      } else if (i == 3 && i < 4) {
        let print = "";
        print +=
          "<p>" +
          news[i].text +
          "</p>" +
          '<p class="hidden">' +
          news[i].textInvisible +
          '</p><input type="button" class="readBtn btnMore" value="Read More" />';
        document.getElementsByClassName("newsWrapper")[3].innerHTML = print;
      } else if (i == 4 && i < 5) {
        let print = "";
        print +=
          "<p>" +
          news[i].text +
          "</p>" +
          '<p class="hidden">' +
          news[i].textInvisible +
          '</p><input type="button" class="readBtn btnMore" value="Read More" />';
        document.getElementsByClassName("newsWrapper")[4].innerHTML = print;
      } else {
        let print = "";
        print +=
          "<p>" +
          news[i].text +
          "</p>" +
          '<p class="hidden">' +
          news[i].textInvisible +
          '</p><input type="button" class="readBtn btnMore" value="Read More" />';
        document.getElementsByClassName("newsWrapper")[5].innerHTML = print;
      }
    }
  }

  /******************** DYNAMIC BIOGRAPHIES ********************/
  $.ajax({
    url: "data/biographies.json",
    type: "GET",
    data: "json",
    success: function (biographies) {
      addBiographies(biographies);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function addBiographies(data) {
    let print = "";

    data.forEach((el) => {
      print += `
        <li>
            <a href="#">
                ${el.name} ( ${el.yearOfBirth} - ${el.yearOfDeath}), ${el.title}
            </a>
        </li>
        `;
    });

    document.getElementById("bio_list").innerHTML = print;
  }

  /******************** DYNAMIC CULTURE ********************/
  $.ajax({
    url: "data/culture.json",
    type: "GET",
    data: "json",
    success: function (culture) {
      addCulture(culture);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function addCulture(data) {
    for (let i = 0; i < data.length; i++) {
      if (i == 0 && i < 1) {
        let print = "";

        print += `
        <p>
          ${data[i].text}
        </p>
        `;
        document.getElementById("culturalCenter").innerHTML = print;
      } else if (i == 1 && i < 2) {
        let print = "";

        print += `
        <p>
          ${data[i].text}
        </p>
        `;
        document.getElementById("library").innerHTML = print;
      } else {
        let print = "";

        print += `
        <p>
          ${data[i].text}
        </p>
        `;
        print += `
        <p class="hidden">
          ${data[i].textInvisible} 
        </p>
        <input type="button" class="readBtn btnMore" value="Read More" />`;
        document.getElementById("museum").innerHTML = print;
      }
    }
  }

  /******************** DYNAMIC SPORT ********************/
  $.ajax({
    url: "data/sport.json",
    type: "GET",
    data: "json",
    success: function (sport) {
      addSport(sport);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function addSport(data) {
    for (let i = 0; i < data.length; i++) {
      if (i == 0 && i < 1) {
        let print = "";

        print += `
        <p>
          ${data[i].text}
        </p>
        `;
        print += `
        <p class="hidden">
          ${data[i].textInvisible} 
        </p>
        <input type="button" class="readBtn btnMore" value="Read More" />`;
        document.getElementById("fc_metalac").innerHTML = print;
      } else if (i == 1 && i < 2) {
        let print = "";

        print += `
        <p>
          ${data[i].text}
        </p>
        `;
        document.getElementById("fc_tacovo").innerHTML = print;
      } else {
        let print = "";

        print += `
        <p>
          ${data[i].text}
        </p>
        `;
        print += `
        <p class="hidden">
          ${data[i].textInvisible} 
        </p>
        <input type="button" class="readBtn btnMore" value="Read More" />`;
        document.getElementById("hall").innerHTML = print;
      }
    }
  }

  /******************** DYNAMIC GALLERY ********************/
  $.ajax({
    url: "data/gallery.json",
    type: "GET",
    data: "json",
    success: function (images) {
      printGallery(images);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function printGallery(data) {
    let print = "";

    data.forEach((element) => {
      print += `
        <figure class="gallery__item gallery__item--${element.itemNumber}">
            <a href="images/gallery/${element.large}" data-lightbox="ourgallery" data-title="${element.dataTitle}">
                <img src="images/gallery/${element.small}" alt="${element.alt}" class="gallery__img" />
            </a>
        </figure>
        `;
    });

    document.getElementById("section-gallery").innerHTML = print;
  }

  /******************** DYNAMIC LODGINGS ********************/
  function ajaxLodging(callbackSuccess) { // callbackSuccess is function that will be called when data is successfully loaded
    $.ajax({
      url: "data/lodging.json",
      type: "GET",
      data: "json",
      success: callbackSuccess,
    });
  }

  function showLodging() {
    ajaxLodging(function (lodgings) {
      printingLodgings(lodgings);
    });
  }

  showLodging();

  function printingLodgings(data) {
    let print = "";

    data.forEach((element) => {
      print += `  
        <div class="col-1-of-3 lodging">
            <img src="${element.image.src}" alt="${element.image.alt}">
            <h3 class="heading">${element.heading}</h3>
            <div class="hotel-feature">
                <span>Rating:</span>
                ${printStars(element.rating)}
            </div>
            <div class="hotel-feature">
                <span class="description">Price per night:</span> <span class="price"> ${
                  element.price
                }</span> &euro;
            </div> 
            <div class="hotel-feature">
                <input type="button" class="btnReserv" value="Book now">
            </div>            
        </div>
        `;
    });

    document.querySelector("#section-lodging").innerHTML = print;
  }

  function printStars(rating) {
    html = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        html += "<i class='fas fa-star'></i>";
      } else {
        html += "<i class='fas fa-star-o'></i>";
      }
    }

    return html;
  }

  /******************** DYNAMIC FOOTERNAV ********************/
  $.ajax({
    url: "data/footerNav.json",
    type: "GET",
    data: "json",
    success: function (links) {
      addLinks(links);
    },
    error: function (xhr, status, error) {
      console.log(error);
    },
  });

  function addLinks(data) {
    let print = "";

    data.forEach((el) => {
      print += `
        <li class="${el.classOne}"><a href="${el.href}" target="${el.target}" class="${el.classTwo}"><i class="${el.icon}"></i></a></li>
        `;
    });

    document.querySelector(".footer__list").innerHTML = print;
  }

  // SEARCHING FILTER
  document
    .getElementById("partString")
    .addEventListener("input", filteringLodgings);

  function filteringLodgings() {
    const userInput = this.value;

    ajaxLodging(function (lodgings) {
      const filteringLodgings = lodgings.filter((el) => {
        if (
          el.heading.toLowerCase().indexOf(userInput.trim().toLowerCase()) !==
          -1
        ) {
          return true;
        }
      });

      printingLodgings(filteringLodgings);
    });
  }

  // PRICE FILTER
  const priceRange = document.getElementById("rnPrice");
  priceRange.addEventListener("input", changePrice);

  const btnPrice = document.querySelector(".priceBtn");
  btnPrice.addEventListener("click", filterPrice);

  function filterPrice() {
    let price = document.getElementById("rnPrice").value;

    ajaxLodging(function (lodgings) {
      const filteringLodgings = lodgings.filter((el) => {
        if (el.price <= price) {
          return el;
        }
      });

      printingLodgings(filteringLodgings);
    });
  }

  function changePrice() {
    let price = document.getElementById("rnPrice").value;
    document.getElementById("priceSelect").textContent = price;
  }
});
