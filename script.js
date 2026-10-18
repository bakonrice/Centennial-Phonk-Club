const aboutSection = document.querySelector("#about");
const aboutVideo = document.querySelector(".about-video");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutVideo.play();
        } else {
            aboutVideo.pause();
        }
    });
}, {
    threshold: 0.3
});

observer.observe(aboutSection);