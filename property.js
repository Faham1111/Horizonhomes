const properties = [
    // Property in India
    {
        id: 1,
        name: "Luxury Apartment in Mumbai",
        location: "Mumbai, India",
        description: "Spacious and luxurious apartment in South Mumbai with sea views.",
        price: "₹2.8 Crore",
        images: ["images/img_1.jpg", "images/img_2.jpg", "images/img_3.jpg"],
        agent: {
            name: "Rajesh Patel",
            title: "Real Estate Agent",
            bio: "Expert in Mumbai's luxury real estate market.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 2,
        name: "3BHK Villa in Bangalore",
        location: "Bangalore, India",
        description: "Beautiful 3BHK villa in a gated community with top-notch amenities.",
        price: "₹1.5 Crore",
        images: ["images/img_4.jpg", "images/img_5.jpg", "images/img_6.jpg"],
        agent: {
            name: "Neha Sharma",
            title: "Property Consultant",
            bio: "Helping families find the perfect home in Bangalore.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 3,
        name: "Penthouse in Delhi",
        location: "New Delhi, India",
        description: "Luxurious penthouse in the heart of New Delhi with stunning city views.",
        price: "₹3 Crore",
        images: ["images/img_7.jpg", "images/img_8.jpg", "images/img_9.jpg"],
        agent: {
            name: "Rohit Kapoor",
            title: "Luxury Real Estate Expert",
            bio: "Specializing in high-end properties in Delhi.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },

    // Properties in Dubai
    {
        id: 4,
        name: "Luxury Villa in Palm Jumeirah",
        location: "Dubai, UAE",
        description: "A stunning villa with beachfront access in Palm Jumeirah.",
        price: "₹2.5 Crore",
        images: ["images/img_10.jpg", "images/img_11.jpg", "images/img_12.jpg"],
        agent: {
            name: "Ahmed Ali",
            title: "Real Estate Specialist",
            bio: "Specializing in luxury homes in Dubai's top locations.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 5,
        name: "Penthouse in Downtown Dubai",
        location: "Dubai, UAE",
        description: "An exclusive penthouse with panoramic views of the Burj Khalifa.",
        price: "₹3 Crore",
        images: ["images/img_13.jpg", "images/img_14.jpg", "images/img_15.jpg"],
        agent: {
            name: "Laila Hassan",
            title: "Luxury Property Consultant",
            bio: "Expert in Dubai’s prime real estate market for luxury properties.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },

    // Properties in America
    {
        id: 6,
        name: "Beachfront Villa in Miami",
        location: "Miami, United States",
        description: "Luxury beachfront villa with a private pool.",
        price: "₹2.7 Crore",
        images: ["images/img_16.jpg", "images/img_17.jpg", "images/img_18.jpg"],
        agent: {
            name: "Lucas Gray",
            title: "Property Manager",
            bio: "Helping clients find their dream vacation homes.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 7,
        name: "Penthouse in San Francisco",
        location: "San Francisco, United States",
        description: "Exclusive penthouse with panoramic city views.",
        price: "₹2.9 Crore",
        images: ["images/img_19.jpg", "images/img_20.jpg", "images/img_1.jpg"],
        agent: {
            name: "David Lee",
            title: "Top Real Estate Broker",
            bio: "Providing access to the best properties in SF.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },

    // Other Properties
    {
        id: 8,
        name: "Modern House in Los Angeles",
        location: "Los Angeles, United States",
        description: "Modern home with breathtaking city views.",
        price: "₹2.1 Crore",
        images: ["images/img_2.jpg", "images/img_3.jpg", "images/img_4.jpg"],
        agent: {
            name: "Sarah Miller",
            title: "Senior Real Estate Consultant",
            bio: "Specializing in luxury homes in LA.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 9,
        name: "Luxury Condo in Las Vegas",
        location: "Las Vegas, United States",
        description: "Exclusive luxury condo near the Strip.",
        price: "₹1.9 Crore",
        images: ["images/img_5.jpg", "images/img_6.jpg", "images/img_7.jpg"],
        agent: {
            name: "Mason King",
            title: "Luxury Real Estate Specialist",
            bio: "Exclusive properties in Las Vegas and the surrounding area.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 10,
        name: "Suburban Home in Florida",
        location: "Florida, United States",
        description: "Spacious suburban home with a large garden.",
        price: "₹1.2 Crore",
        images: ["images/img_8.jpg", "images/img_9.jpg", "images/img_10.jpg"],
        agent: {
            name: "Ethan Carter",
            title: "Certified Real Estate Professional",
            bio: "Specializing in family homes in Florida.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 11,
        name: "Seaside Villa in Goa",
        location: "Goa, India",
        description: "A charming seaside villa with direct beach access and modern amenities.",
        price: "₹1.8 Crore",
        images: ["images/img_11.jpg", "images/img_12.jpg", "images/img_13.jpg"],
        agent: {
            name: "Priya Desai",
            title: "Luxury Property Consultant",
            bio: "Specializing in beachside villas in Goa.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 12,
        name: "Modern Penthouse in Singapore",
        location: "Singapore",
        description: "A luxurious penthouse with a panoramic city skyline view.",
        price: "₹2.9 Crore",
        images: ["images/img_14.jpg", "images/img_15.jpg", "images/img_16.jpg"],
        agent: {
            name: "Jonathan Tan",
            title: "Senior Real Estate Specialist",
            bio: "Providing access to the most luxurious properties in Singapore.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 13,
        name: "Country Villa in Tuscany",
        location: "Tuscany, Italy",
        description: "A rustic and elegant country villa in the heart of Tuscany’s wine country.",
        price: "₹2.3 Crore",
        images: ["images/img_17.jpg", "images/img_18.jpg", "images/img_19.jpg"],
        agent: {
            name: "Giovanni Russo",
            title: "Luxury Property Advisor",
            bio: "Specializing in countryside villas across Italy.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 14,
        name: "Beachfront Apartment in Sydney",
        location: "Sydney, Australia",
        description: "A stunning beachfront apartment with amazing views of the ocean.",
        price: "₹2.5 Crore",
        images: ["images/img_20.jpg", "images/img_1.jpg", "images/img_2.jpg"],
        agent: {
            name: "Emily White",
            title: "Real Estate Consultant",
            bio: "Helping clients find beautiful beachfront properties in Sydney.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
    {
        id: 15,
        name: "Ski Chalet in Aspen",
        location: "Aspen, United States",
        description: "Exclusive ski-in/ski-out chalet in Aspen’s premier mountain resort.",
        price: "₹4.0 Crore",
        images: ["images/img_3.jpg", "images/img_4.jpg", "images/img_5.jpg"],
        agent: {
            name: "Jack Hamilton",
            title: "Luxury Chalet Expert",
            bio: "Specializing in ski properties and mountain retreats in Aspen.",
            social: {
                instagram: "#",
                twitter: "#",
                facebook: "#",
                linkedin: "#"
            }
        }
    },
];




// Get the property ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const propertyId = parseInt(urlParams.get('id'));

// Find the property based on the ID
const property = properties.find(p => p.id === propertyId);

// Function to display the property details
function displayPropertyDetails() {
    if (property) {
        // Set Property Title, Description, and Agent Details
        document.getElementById('property-price').textContent = property.price;
        document.getElementById('property-title').textContent = property.name;
        document.getElementById('property-name').textContent = property.name;
        document.getElementById('property-location').textContent = property.location;
        document.getElementById('property-description').textContent = property.description;

        // Set Property Images
        const imageContainer = document.getElementById('property-images');
        property.images.forEach(imageSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            imgElement.alt = property.name;
            imgElement.classList.add('img-fluid');
            imageContainer.appendChild(imgElement);
        });

        // Set Agent Info
        document.getElementById('agent-name').textContent = property.agent.name;
        document.getElementById('agent-title').textContent = property.agent.title;
        document.getElementById('agent-bio').textContent = property.agent.bio;
        document.getElementById('agent-social').innerHTML = `
            <li class="me-1"><a href="${property.agent.social.instagram}"><span class="icon-instagram"></span></a></li>
            <li class="me-1"><a href="${property.agent.social.twitter}"><span class="icon-twitter"></span></a></li>
            <li class="me-1"><a href="${property.agent.social.facebook}"><span class="icon-facebook"></span></a></li>
            <li class="me-1"><a href="${property.agent.social.linkedin}"><span class="icon-linkedin"></span></a></li>
        `;
    }
}

// Call the function to display property details
displayPropertyDetails();
