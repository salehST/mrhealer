const links = document.querySelectorAll("#nav a");
    for (const link of links) {
    link.addEventListener("click", clickHandler);
    }

    function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    const offsetBottom = document.querySelector(href).offsetBottom;

    scroll({
        top: offsetTop,
        bottom: offsetBottom,
        behavior: "smooth"
    });
}