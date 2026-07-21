console.log("Personal profile website loaded successfully.");
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.addEventListener("click", () => {
        console.log(link.textContent);
    });
});
