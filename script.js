document.addEventListener("DOMContentLoaded", function () {

  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const c3 = document.getElementById("c3");
  const wrong = document.getElementById("wrong");
  const music = document.getElementById("music");

  if (c1 && c2 && c3) {

    c1.focus();

    c1.addEventListener("input", function () {
      c1.value = c1.value.replace(/\D/g, "");
      if (c1.value) c2.focus();
      checkCode();
    });

    c2.addEventListener("input", function () {
      c2.value = c2.value.replace(/\D/g, "");
      if (c2.value) c3.focus();
      checkCode();
    });

    c3.addEventListener("input", function () {
      c3.value = c3.value.replace(/\D/g, "");
      checkCode();
    });

    function checkCode() {

      if (
        c1.value.length === 1 &&
        c2.value.length === 1 &&
        c3.value.length === 1
      ) {

        const code =
          c1.value +
          c2.value +
          c3.value;

        if (code === "123") {

          if (music) {
            music.play().catch(function () {});
          }

          window.location.href = "./fireworks.html";

        } else {

          if (wrong) {
            wrong.classList.add("show");
          }

          setTimeout(function () {

            c1.value = "";
            c2.value = "";
            c3.value = "";

            if (wrong) {
              wrong.classList.remove("show");
            }

            c1.focus();

          }, 700);
        }
      }
    }
  }


  /* САЛЮТ */

  if (document.body.classList.contains("fireworks-page")) {

    setTimeout(function () {
      window.location.href = "./date.html";
    }, 4300);

  }


  /* ДАТА */

  if (document.body.classList.contains("date-page")) {

    setTimeout(function () {
      window.location.href = "./photos.html";
    }, 5000);

  }


  /* ФОТО */

  if (document.body.classList.contains("photos-page")) {

    setTimeout(function () {
      window.location.href = "./gift.html";
    }, 6500);

  }


  /* ПОДАРОК */

  const gift = document.getElementById("gift");

  if (gift) {

    let clicks = 0;

    const hint = document.getElementById("giftHint");
    const content = document.getElementById("giftContent");
    const ring = document.getElementById("ringContent");

    gift.addEventListener("click", function () {

      clicks++;

      if (clicks === 1) {
        gift.style.transform = "scale(.78)";
        gift.classList.add("opened");

        if (hint) {
          hint.textContent = "ще один подарунок";
        }
      }

      else if (clicks === 2) {
        gift.style.transform = "scale(.58)";

        if (hint) {
          hint.textContent = "він стає все меншим";
        }
      }

      else if (clicks === 3) {
        gift.style.transform = "scale(.38)";

        if (hint) {
          hint.textContent = "ще трошки";
        }
      }

      else if (clicks === 4) {

        gift.style.transform = "scale(0)";

        if (hint) {
          hint.style.opacity = "0";
        }

        setTimeout(function () {

          if (content) {
            content.style.opacity = "0";
          }

          if (ring) {
            ring.classList.add("show");
          }

        }, 600);

        setTimeout(function () {
          window.location.href = "./letter.html";
        }, 7800);
      }

    });
  }


  /* СВІЧКИ */

  if (document.body.classList.contains("cake-page")) {

    let blown = false;

    document.body.addEventListener("click", function () {

      if (blown) return;

      blown = true;

      const flames = document.querySelectorAll(".flame");

      flames.forEach(function (flame, index) {

        setTimeout(function () {
          flame.classList.add("blown");
        }, index * 350);

      });

      const text = document.getElementById("candleText");

      if (text) {
        text.textContent =
          "Загадай найзаповітніше бажання ✨";
      }

      setTimeout(function () {
        window.location.href = "./final.html";
      }, 5000);

    });

  }

});
