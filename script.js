document.addEventListener("DOMContentLoaded", () => {

  /* ПЛАВНЫЙ ПЕРЕХОД МЕЖДУ СТРАНИЦАМИ */

  function goTo(page, delay = 0) {

    setTimeout(() => {

      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = page;
      }, 900);

    }, delay);

  }


  /* =========================
     КОД
  ========================= */

  const inputs = [
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3")
  ].filter(Boolean);

  if (inputs.length === 3) {

    inputs[0].focus();

    inputs.forEach((input, index) => {

      input.addEventListener("input", () => {

        input.value = input.value.replace(/\D/g, "");

        if (input.value && index < 2) {
          inputs[index + 1].focus();
        }

        if (inputs.every(item => item.value.length === 1)) {

          const code = inputs.map(item => item.value).join("");

          if (code === "123") {

            const music = document.getElementById("music");

            if (music) {
              music.play().catch(() => {});
            }

            localStorage.setItem("birthdayMusic", "1");

            goTo("fireworks.html", 300);

          } else {

            const wrong = document.getElementById("wrong");

            if (wrong) {
              wrong.classList.add("show");
            }

            inputs.forEach(item => {
              item.classList.add("shake");
            });

            setTimeout(() => {

              inputs.forEach(item => {
                item.value = "";
                item.classList.remove("shake");
              });

              if (wrong) {
                wrong.classList.remove("show");
              }

              inputs[0].focus();

            }, 700);

          }

        }

      });

    }

  }


  /* =========================
     АВТОПЕРЕХОДЫ
  ========================= */

  if (document.body.classList.contains("fireworks-page")) {
    goTo("date.html", 4300);
  }

  if (document.body.classList.contains("date-page")) {
    goTo("photos.html", 5000);
  }

  if (document.body.classList.contains("photos-page")) {
    goTo("gift.html", 6500);
  }


  /* =========================
     ПОДАРОК
  ========================= */

  const gift = document.getElementById("gift");

  if (gift) {

    let clicks = 0;

    const giftHint = document.getElementById("giftHint");
    const giftContent = document.getElementById("giftContent");
    const ringContent = document.getElementById("ringContent");

    gift.addEventListener("click", () => {

      clicks++;

      if (clicks === 1) {

        gift.style.transform = "scale(.78)";
        gift.classList.add("opened");
        giftHint.textContent = "ще один подарунок";

      }

      if (clicks === 2) {

        gift.style.transform = "scale(.58)";
        giftHint.textContent = "він стає все меншим";

      }

      if (clicks === 3) {

        gift.style.transform = "scale(.38)";
        giftHint.textContent = "ще трошки";

      }

      if (clicks === 4) {

        gift.style.transform = "scale(0)";
        giftHint.style.opacity = "0";

        setTimeout(() => {

          giftContent.style.opacity = "0";
          ringContent.classList.add("show");

        }, 600);

        setTimeout(() => {
          goTo("letter.html");
        }, 7200);

      }

    });

  }


  /* =========================
     СВЕЧИ
  ========================= */

  const cakePage = document.querySelector(".cake-page");

  if (cakePage) {

    let blown = false;

    cakePage.addEventListener("click", () => {

      if (blown) return;

      blown = true;

      const flames = document.querySelectorAll(".flame");

      flames.forEach((flame, index) => {

        setTimeout(() => {
          flame.classList.add("blown");
        }, index * 350);

      });

      const text = document.getElementById("candleText");

      if (text) {
        text.textContent = "Загадай найзаповітніше бажання ✨";
      }

      setTimeout(() => {
        goTo("final.html");
      }, 4000);

    });

  }

});
