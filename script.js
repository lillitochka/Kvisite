document.addEventListener("DOMContentLoaded", () => {

  const inputs = [
    document.getElementById("c1"),
    document.getElementById("c2"),
    document.getElementById("c3")
  ];

  if (inputs.length === 3 && inputs.every(Boolean)) {

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

            document.body.classList.add("page-leaving");

            setTimeout(() => {
              window.location.href = "fireworks.html";
            }, 800);

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


  /* САЛЮТ */

  if (document.body.classList.contains("fireworks-page")) {

    setTimeout(() => {
      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = "date.html";
      }, 900);

    }, 4300);

  }


  /* ДАТА */

  if (document.body.classList.contains("date-page")) {

    setTimeout(() => {
      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = "photos.html";
      }, 900);

    }, 5000);

  }


  /* ФОТО */

  if (document.body.classList.contains("photos-page")) {

    setTimeout(() => {
      document.body.classList.add("page-leaving");

      setTimeout(() => {
        window.location.href = "gift.html";
      }, 900);

    }, 6500);

  }


  /* ПОДАРОК */

  const gift = document.getElementById("gift");

  if (gift) {

    let clicks = 0;

    const hint = document.getElementById("giftHint");
    const content = document.getElementById("giftContent");
    const ring = document.getElementById("ringContent");

    gift.addEventListener("click", () => {

      clicks++;

      if (clicks === 1) {
        gift.style.transform = "scale(.78)";
        gift.classList.add("opened");
        hint.textContent = "ще один подарунок";
      }

      if (clicks === 2) {
        gift.style.transform = "scale(.58)";
        hint.textContent = "він стає все меншим";
      }

      if (clicks === 3) {
        gift.style.transform = "scale(.38)";
        hint.textContent = "ще трошки";
      }

      if (clicks === 4) {

        gift.style.transform = "scale(0)";
        hint.style.opacity = "0";

        setTimeout(() => {
          content.style.opacity = "0";
          ring.classList.add("show");
        }, 600);

        setTimeout(() => {

          document.body.classList.add("page-leaving");

          setTimeout(() => {
            window.location.href = "letter.html";
          }, 900);

        }, 7200);

      }

    });

  }


  /* СВЕЧИ */

  const cake = document.querySelector(".cake-page");

  if (cake) {

    let blown = false;

    cake.addEventListener("click", () => {

      if (blown) return;

      blown = true;

      document.querySelectorAll(".flame").forEach((flame, index) => {

        setTimeout(() => {
          flame.classList.add("blown");
        }, index * 350);

      });

      const text = document.getElementById("candleText");

      if (text) {
        text.textContent = "Загадай найзаповітніше бажання ✨";
      }

      setTimeout(() => {

        document.body.classList.add("page-leaving");

        setTimeout(() => {
          window.location.href = "final.html";
        }, 900);

      }, 4000);

    });

  }

});
