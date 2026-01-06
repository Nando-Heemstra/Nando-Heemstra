window.addEventListener("load", () => {
    // Run slide animations for main content
    document.querySelectorAll('.slide-left, .slide-right').forEach(el => {
        el.classList.add('show');
    });

    // Animate FAQ items appearing on the page
    document.querySelectorAll(".faq-item").forEach((item, index) => {
        setTimeout(() => {
            item.classList.add("entry-show");
        }, index * 100);
    });
});

// Accordion Open / Close Logic
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle("active");
    });
});

function toggleDescription(skillElement) {
    const desc = skillElement.querySelector(".skill-description");

    // Toggle logic
    if (desc.style.maxHeight && desc.style.maxHeight !== "0px") {
        desc.style.maxHeight = "0px";
        desc.style.marginTop = "0px";
    } else {
        // Set to scrollHeight to allow dynamic expansion
        desc.style.maxHeight = desc.scrollHeight + "px";
        desc.style.marginTop = "10px";
    }
}

// Ensure entry animations for the rest of the site work
window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.slide-left, .slide-right').forEach(el => {
        el.classList.add('show');
    });
});