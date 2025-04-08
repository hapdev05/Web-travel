// Destinations page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Sample destination data for Nha Trang
    const destinations = [
        {
            id: 1,
            name: "Vinpearl Land",
            type: "entertainment",
            image: "images/vinpearl.jpeg",
            description: "Khu vui chơi giải trí hiện đại trên đảo Hòn Tre, kết nối với đất liền bằng cáp treo dài nhất thế giới trên biển.",
            activities: ["Công viên nước", "Thủy cung", "Trò chơi cảm giác mạnh", "Biểu diễn nhạc nước"]
        },
        {
            id: 2,
            name: "Bãi biển Nha Trang",
            type: "beach",
            image: "images/Bien-nha-trang-2-jpg.webp",
            description: "Bãi biển cát trắng mịn trải dài 7km dọc theo thành phố, với làn nước trong xanh và nhiều hoạt động thú vị.",
            activities: ["Tắm biển", "Thể thao biển", "Ngắm hoàng hôn", "Dạo bộ trên bờ biển"]
        },
        {
            id: 3,
            name: "Đảo Điệp Sơn",
            type: "island",
            image: "images/Dao-Diep-Son.jpeg",
            description: "Nổi tiếng với con đường đi bộ giữa biển, nối liền các đảo nhỏ khi thủy triều xuống.",
            activities: ["Đi bộ trên con đường giữa biển", "Lặn ngắm san hô", "Cắm trại", "Chèo thuyền kayak"]
        },
        {
            id: 4,
            name: "Tháp Bà Ponagar",
            type: "culture",
            image: "images/thapba.jpeg",
            description: "Di tích lịch sử văn hóa quan trọng, là quần thể đền tháp Chăm Pa cổ được xây dựng từ thế kỷ 7-12.",
            activities: ["Tham quan kiến trúc cổ", "Tìm hiểu văn hóa Chăm", "Ngắm cảnh thành phố từ trên cao"]
        },
        {
            id: 5,
            name: "Hòn Chồng",
            type: "culture",
            image: "images/honchong.jpeg",
            description: "Thắng cảnh thiên nhiên với những tảng đá chồng lên nhau kỳ thú, gắn liền với truyền thuyết dân gian.",
            activities: ["Ngắm cảnh biển", "Chụp ảnh", "Tìm hiểu truyền thuyết"]
        },
        {
            id: 6,
            name: "Đảo Hòn Mun",
            type: "island",
            image: "images/honmun.jpeg",
            description: "Khu bảo tồn biển đầu tiên của Việt Nam, nổi tiếng với hệ sinh thái san hô phong phú và đa dạng.",
            activities: ["Lặn biển ngắm san hô", "Bơi lội", "Tour thuyền đáy kính"]
        }
    ];

    // Gallery images
    const galleryImages = [
        { src: "../images/Bien-nha-trang-2-jpg.webp", alt: "Bãi biển Nha Trang" },
        { src: "../images/vinpearl.jpeg", alt: "Vinpearl Land" },
        { src: "../images/thapba.jpeg", alt: "Tháp Bà Ponagar" },
        { src: "../images/honmun.jpeg", alt: "Đảo Hòn Mun" },
        { src: "../images/Dao-Diep-Son.jpeg", alt: "Đường đi bộ Điệp Sơn" },
        { src: "images/hoanghon.jpeg", alt: "Hoàng hôn Nha Trang" },
        { src: "images/honchong.jpeg", alt: "Hòn Chồng" },
        { src: "images/captreo.jpeg", alt: "Cáp treo Vinpearl" }
    ];

    // Load destinations
    function loadDestinations(filter = 'all') {
        const container = document.getElementById('destinations-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        const filteredDestinations = filter === 'all' 
            ? destinations 
            : destinations.filter(dest => dest.type === filter);
        
        // Add fade-out effect to container before updating
        container.classList.add('fade-out');
        
        setTimeout(() => {
            // Create and append destination elements
            filteredDestinations.forEach((dest, index) => {
                const destElement = document.createElement('div');
                destElement.className = 'destination-item';
                destElement.style.animationDelay = `${index * 0.1}s`;
                
                let activitiesHTML = '';
                dest.activities.forEach(activity => {
                    activitiesHTML += `<li>${activity}</li>`;
                });
                
                // Enhanced HTML structure with badge for destination type
                destElement.innerHTML = `
                    <div class="destination-image">
                        <img src="${dest.image}" alt="${dest.name}">
                        <span class="destination-badge ${dest.type}">${getTypeLabel(dest.type)}</span>
                    </div>
                    <div class="destination-info">
                        <h3>${dest.name}</h3>
                        <p>${dest.description}</p>
                        <div class="activities">
                            <h4>Hoạt động:</h4>
                            <ul>${activitiesHTML}</ul>
                        </div>
                        <a href="#" class="btn" onclick="showDestinationDetail(${dest.id})">
                            <span>Xem chi tiết</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                `;
                
                container.appendChild(destElement);
            });
            
            // Remove fade-out and add fade-in effect
            container.classList.remove('fade-out');
            container.classList.add('fade-in');
            
            // Remove the fade-in class after animation completes
            setTimeout(() => {
                container.classList.remove('fade-in');
            }, 500);
        }, 300);
    }

    // Load gallery with improved lightbox
    function loadGallery() {
        const container = document.getElementById('gallery-container');
        if (!container) return;
        
        galleryImages.forEach((img, index) => {
            const imgElement = document.createElement('div');
            imgElement.className = 'gallery-item';
            imgElement.style.animationDelay = `${index * 0.1}s`;
            
            imgElement.innerHTML = `
                <img src="${img.src}" alt="${img.alt}">
                <div class="gallery-overlay">
                    <div class="gallery-overlay-content">
                        <span>${img.alt}</span>
                        <i class="fas fa-search-plus"></i>
                    </div>
                </div>
            `;
            
            imgElement.addEventListener('click', () => openLightbox(img.src, img.alt));
            container.appendChild(imgElement);
        });
    }

    // Helper function to get type label
    function getTypeLabel(type) {
        switch(type) {
            case 'beach':
                return 'Bãi biển';
            case 'island':
                return 'Đảo';
            case 'entertainment':
                return 'Giải trí';
            case 'culture':
                return 'Văn hóa';
            default:
                return type;
        }
    }

    // Filter destinations with animation
    const filterSelect = document.getElementById('destination-type');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            loadDestinations(this.value);
        });
    }

    // Initialize page
    loadDestinations();
    loadGallery();
    
    // Add scroll animation for elements
    addScrollAnimation();
});

// Add scroll animation to elements
function addScrollAnimation() {
    const elements = document.querySelectorAll('.destination-item, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Show destination detail with improved modal
function showDestinationDetail(id) {
    const destination = document.querySelector(`.destination-item:nth-child(${id})`);
    if (!destination) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'destination-modal';
    
    // Find the destination data
    const destData = window.destinations ? window.destinations.find(d => d.id === id) : null;
    const destName = destData ? destData.name : destination.querySelector('h3').textContent;
    const destImage = destData ? destData.image : destination.querySelector('img').src;
    const destDesc = destData ? destData.description : destination.querySelector('p').textContent;
    
    // Get map coordinates based on destination name
    const mapLocation = getMapLocation(destName);
    
    modal.innerHTML = `
        <div class="destination-modal-content">
            <span class="close-modal">&times;</span>
            <div class="modal-header">
                <h2>${destName}</h2>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${destImage}" alt="${destName}">
                </div>
                <div class="modal-info">
                    <p>${destDesc}</p>
                    <div class="modal-activities">
                        ${destination.querySelector('.activities').innerHTML}
                    </div>
                    <div class="modal-map">
                        <h4>Vị trí trên bản đồ</h4>
                        <iframe 
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=${encodeURIComponent(mapLocation)}" 
                            width="100%" 
                            height="300" 
                            style="border:0; border-radius:10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add animation class after a small delay
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal when clicking on close button or outside the modal
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

// Helper function to get map location based on destination name
function getMapLocation(destName) {
    // Map destination names to specific locations in Nha Trang
    const locationMap = {
        "Vinpearl Land": "Vinpearl Land Nha Trang, Hon Tre Island, Nha Trang, Vietnam",
        "Bãi biển Nha Trang": "Nha Trang Beach, Tran Phu, Nha Trang, Vietnam",
        "Đảo Điệp Sơn": "Diep Son Island, Van Ninh, Khanh Hoa, Vietnam",
        "Tháp Bà Ponagar": "Po Nagar Cham Towers, 2 Thang 4 Street, Nha Trang, Vietnam",
        "Hòn Chồng": "Hon Chong Promontory, Phuong Sai, Nha Trang, Vietnam",
        "Đảo Hòn Mun": "Hon Mun Island, Nha Trang, Vietnam"
    };
    
    // Return the specific location or fallback to the destination name + Nha Trang
    return locationMap[destName] || `${destName}, Nha Trang, Vietnam`;
}

// Enhanced lightbox functionality
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close">&times;</span>
            <img src="${src}" alt="${alt || 'Lightbox image'}">
            <div class="lightbox-caption">${alt || ''}</div>
            <div class="lightbox-controls">
                <button class="lightbox-prev"><i class="fas fa-chevron-left"></i></button>
                <button class="lightbox-next"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    // Add animation class after a small delay
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    
    // Close lightbox
    const closeBtn = lightbox.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            lightbox.remove();
        }, 300);
    });
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightbox.remove();
            }, 300);
        }
    });
    
    // Navigation buttons
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox('prev', src);
    });
    
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox('next', src);
    });
}

// Navigate through lightbox images
function navigateLightbox(direction, currentSrc) {
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item img'));
    const currentIndex = galleryItems.findIndex(img => img.src === currentSrc);
    
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % galleryItems.length;
    } else {
        newIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    }
    
    const newSrc = galleryItems[newIndex].src;
    const newAlt = galleryItems[newIndex].alt;
    
    // Update lightbox image with fade effect
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    
    lightboxImg.style.opacity = '0';
    setTimeout(() => {
        lightboxImg.src = newSrc;
        lightboxImg.alt = newAlt;
        lightboxCaption.textContent = newAlt;
        lightboxImg.style.opacity = '1';
    }, 300);
}