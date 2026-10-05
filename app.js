console.log("Network Engineer Handbook Started");


/*
=========================================
  Search System
=========================================
*/

const searchInput =
    document.querySelector(".search input");


searchInput.addEventListener(
    "keyup",
    function () {

        const keyword =
            searchInput.value.toLowerCase();


        const cards =
            document.querySelectorAll(
                ".card"
            );


        cards.forEach(function (card) {

            const text =
                card.innerText.toLowerCase();


            if (text.includes(keyword)) {

                card.style.display =
                    "block";

            } else {

                card.style.display =
                    "none";

            }

        });

    }
);