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