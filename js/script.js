console.log("JavaScript is working");

// =============================================
//  JOIN BUTTON
// =============================================
const joinButton = document.querySelector(".join-btn");

if (joinButton) {
    joinButton.addEventListener("click", function () {
        window.location.href = "#membership";
    });
}

// =============================================
//  NAVBAR SCROLL EFFECT
// =============================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// =============================================
//  ACTIVE NAV LINK
// =============================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// =============================================
//  HAMBURGER MENU
// =============================================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar ul");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// =============================================
//  SMOOTH SCROLL
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =============================================
// INTERSECTION OBSERVERS
// =============================================
// Features
const featuresSection = document.querySelector(".features");
if (featuresSection) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(featuresSection);
}

// About
const aboutSection = document.querySelector(".about");
if (aboutSection) {
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 }).observe(aboutSection);
}

// Classes
const classesSection = document.querySelector(".classes");
if (classesSection) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(classesSection);
}

// Trainers
const trainersSection = document.querySelector(".trainers");
if (trainersSection) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(trainersSection);
}

// Gallery
const gallerySection = document.querySelector(".gallery");
if (gallerySection) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(gallerySection);
}

// Testimonials
const testimonialsSection = document.querySelector(".testimonials");
if (testimonialsSection) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(testimonialsSection);
}

// Membership
const membershipSection = document.querySelector(".membership");
if (membershipSection) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(membershipSection);
}

// =============================================
//  SCHEDULE TABLE
// =============================================
const columns = document.querySelectorAll(".schedule-table th");
const today = new Date().getDay();

if (columns[today + 1]) {
    columns[today + 1].style.background = "#16a34a";
}

const scheduleTable = document.querySelector(".schedule-table");
if (scheduleTable) {
    new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }).observe(scheduleTable);
}

// =============================================
//  TRAINER BUTTONS 
// =============================================
const trainerButtons = document.querySelectorAll(".trainer-card button");

trainerButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
       
        const trainerCard = this.closest('.trainer-card');
        const trainerName = trainerCard.querySelector('h3').textContent;
        
        
        const sourceData = {
            type: 'trainer',
            name: trainerName,
            display: `👨‍🏫 Contacting Trainer: ${trainerName}`
        };
        
        sessionStorage.setItem('contactSource', JSON.stringify(sourceData));
        
       
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
        
        
        setTimeout(updateSourceDisplay, 500);
    });
});

// =============================================
//  MEMBERSHIP PLAN BUTTONS 
// =============================================
const planButtons = document.querySelectorAll(".plan-card button");

planButtons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
       
        const planCard = this.closest('.plan-card');
        const planName = planCard.querySelector('h3').textContent;
        const planPrice = planCard.querySelector('h1')?.textContent || '';
        
        const sourceData = {
            type: 'plan',
            name: planName,
            price: planPrice,
            display: `💳 You selected: ${planName} Plan ${planPrice}`
        };
        
        sessionStorage.setItem('contactSource', JSON.stringify(sourceData));
        
        
        document.querySelector("#contact").scrollIntoView({
            behavior: "smooth"
        });
        
        
        setTimeout(updateSourceDisplay, 500);
    });
});


function updateSourceDisplay() {
    const sourceDisplay = document.getElementById('sourceDisplay');
    const sourceMessage = document.getElementById('sourceMessage');
    const sourceInput = document.getElementById('source-input');
    
    if (!sourceDisplay || !sourceMessage) return;
    
   
    const storedData = sessionStorage.getItem('contactSource');
    
    if (storedData) {
        try {
            const data = JSON.parse(storedData);
            
            
            if (data.type === 'trainer') {
                sourceMessage.innerHTML = `👨‍🏫 Contacting Trainer: <span class="source-highlight">${data.name}</span>`;
                sourceDisplay.className = 'source-display trainer';
                sourceDisplay.style.display = 'flex';
            } else if (data.type === 'plan') {
                sourceMessage.innerHTML = `💳 You selected: <span class="source-highlight">${data.name} Plan</span> ${data.price}`;
                sourceDisplay.className = 'source-display plan';
                sourceDisplay.style.display = 'flex';
            } else {
                sourceMessage.textContent = data.display || 'Contact Us';
                sourceDisplay.className = 'source-display general';
                sourceDisplay.style.display = 'flex';
            }
            
            
            if (sourceInput) {
                sourceInput.value = data.display || `${data.type}: ${data.name}`;
            }
            
        } catch (e) {
           
            sourceMessage.textContent = storedData;
            sourceDisplay.className = 'source-display general';
            sourceDisplay.style.display = 'flex';
            if (sourceInput) {
                sourceInput.value = storedData;
            }
        }
    } else {
     
        sourceDisplay.style.display = 'none';
        if (sourceInput) {
            sourceInput.value = '';
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateSourceDisplay();
});


const contactSection = document.querySelector('#contact');
if (contactSection) {
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateSourceDisplay();
            }
        });
    }, { threshold: 0.1 });
    
    contactObserver.observe(contactSection);
}

// =============================================
// CONTACT FORM 
// =============================================
const form = document.querySelector(".contact-form");

if (form) {
    const button = form.querySelector("button");
    const sourceInput = document.querySelector("#source-input");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();
        const sourceValue = sourceInput?.value || "";

        const nameHasNumbers = /\d/.test(name);

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Please fill all fields");
            return;
        }

        if (nameHasNumbers) {
            alert("❌ Name should not contain numbers");
            return;
        }

        if (!email.includes("@")) {
            alert("❌ Please enter a valid email");
            return;
        }

        button.innerText = "Sending...";
        button.disabled = true;

        setTimeout(() => {
            let successMessage = "✅ Message sent successfully! 🚀";
            
            if (sourceValue) {
                successMessage += `\n\n📌 ${sourceValue}`;
            }
            
            alert(successMessage);

          
            sessionStorage.removeItem('contactSource');
            if (sourceInput) {
                sourceInput.value = "";
            }
            
         
            const sourceDisplay = document.getElementById('sourceDisplay');
            if (sourceDisplay) {
                sourceDisplay.style.display = 'none';
            }

            button.innerText = "Send Message";
            button.disabled = false;

            form.reset();
        }, 1500);
    });
}


function clearContactSource() {
    sessionStorage.removeItem('contactSource');
    const sourceDisplay = document.getElementById('sourceDisplay');
    const sourceInput = document.getElementById('source-input');
    
    if (sourceDisplay) {
        sourceDisplay.style.display = 'none';
    }
    if (sourceInput) {
        sourceInput.value = '';
    }
}