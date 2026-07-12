//
// Kingdom City Academy
// Website Interactions
//

// Smooth scrolling for page links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// Simple reveal animation when sections appear

const sections = document.querySelectorAll(".section, .cta");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});


sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all 0.8s ease";

    observer.observe(section);

});


// Current year update in footer

const year = document.querySelector("footer");

if(year){

    year.innerHTML = year.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );

}
