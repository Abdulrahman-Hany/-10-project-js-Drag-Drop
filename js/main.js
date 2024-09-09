let boxs =document.querySelectorAll(".box"),
    imge = document.querySelector(".imges");

boxs.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.classList.add("beovered");
    })
    box.addEventListener("dragleave", () => {
        box.classList.remove("beovered");
    });
    box.addEventListener("drop", () => {
        box.appendChild(imge);
    })

})