const backToTopButton = document.getElementById("back-to-top");
const nextButton = document.querySelector('.next');
const backButton = document.querySelector('.back');
const originalContent = document.querySelector('.the-links');
const page2Content = document.querySelector('.page-2');


nextButton.addEventListener('click', function() {
    originalContent.style.display = 'none';
    page2Content.style.display = 'block';  
});

backButton.addEventListener('click', function() {
    page2Content.style.display = 'none'; 
    originalContent.style.display = 'block';
});




window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};


backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
