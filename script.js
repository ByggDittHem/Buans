/*
=====================================
 BUAN - script.js
 Version 1.0
=====================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // Mjuk scroll för interna länkar
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    // Scroll-animationer
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .card").forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });

});
/* =====================================
   TILL TOPPEN-KNAPP
===================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* =====================================
   AKTIV MENY
===================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        if (window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});
/* =====================================
   MOBILMENY
===================================== */

const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector("nav");

menuButton.addEventListener("click",()=>{

    navigation.classList.toggle("open");

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        navigation.classList.remove("open");

    });

});
