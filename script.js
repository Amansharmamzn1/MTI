// Micro Tech Instruments Product Data
const products = [
    {
        name: "Automatic Sanitary Napkin Vending Machine",
        desc: "High-capacity automated dispensing solution for commercial and public restrooms.",
        //icon: "fa-box-open" // FontAwesome icon acting as placeholder image
        image: "image/asvm.jpeg"
    },
    {
        name: "Automatic Napkin Incinerator",
        desc: "Eco-friendly, electric disposal system ensuring safe and hygienic waste management.",
        image: "image/inci.jpeg"
    },
    {
        name: "Cloth Bag Vending Machine",
        desc: "Promote sustainability with an automated cloth bag dispenser for retail environments.",
        image: "image/cloth bag.jpeg"
    },
    {
        name: "VSWR & Frequency Meters",
        desc: "Precision microwave and waveguide testing instruments for advanced industrial applications.",
        image: "image/vswr.jpeg"
    },
    {
        name: "Gunn Power Supply",
        desc: "Highly stable and reliable industrial power supplies for technical environments.",
        image: "image/gunn.jpeg"
    },
    {
        name: "Solar Operated Vending Machine",
        desc: "Energy-efficient sanitary dispensing powered purely by solar energy.",
        image: "image/solr.jpeg"
    }
];

// Dynamically Render Products
function renderProducts() {
    const grid = document.getElementById('product-grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" class="product-photo">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <button class="btn btn-primary w-100" onclick="openQuoteModal()">Inquire Now</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Modal Logic
const modal = document.getElementById('quote-modal');

function openQuoteModal() {
    modal.style.display = 'flex';
}

function closeQuoteModal() {
    modal.style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeQuoteModal();
    }
}

// Form Submission handling (Prevent default reload)
/*document.getElementById('quote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to Micro Tech Instruments.");
    closeQuoteModal();
    this.reset();
});*/

// Sticky Header Effect on Scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('navbar');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
        header.style.height = '70px';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        header.style.height = '80px';
    }
});

// Initialize the page
renderProducts();
