// Cuisine page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Sample cuisine data for Nha Trang
    const cuisines = [
        {
            id: 1,
            name: "Bánh Căn",
            image: "images/banh-can.jpeg",
            description: "Món bánh truyền thống của Nha Trang, được làm từ bột gạo, nướng trong khuôn đặc biệt và ăn kèm nước mắm chua ngọt.",
            ingredients: ["Bột gạo", "Trứng", "Hành lá", "Nước mắm chua ngọt"],
            recipe: "Đổ bột gạo vào khuôn, thêm trứng và hành lá, nướng chín và ăn kèm nước mắm."
        },
        {
            id: 2,
            name: "Bún Cá Nha Trang",
            image: "images/bunca.jpeg",
            description: "Món bún đặc sản với nước dùng ngọt thanh từ cá biển, thêm cá tươi và rau sống.",
            ingredients: ["Bún", "Cá biển", "Cà chua", "Rau sống", "Gia vị"],
            recipe: "Nấu nước dùng từ xương cá, thêm cá phi lê, ăn kèm bún và rau sống."
        },
        {
            id: 3,
            name: "Nem Nướng Ninh Hòa",
            image: "images/nemnuong.jpeg",
            description: "Món nem thịt nướng thơm ngon, ăn kèm với bánh tráng, rau sống và nước chấm đặc biệt.",
            ingredients: ["Thịt lợn", "Tỏi", "Đường", "Nước mắm", "Bánh tráng", "Rau sống"],
            recipe: "Ướp thịt với gia vị, nướng chín, cuốn với bánh tráng và rau sống, chấm nước sốt."
        },
        {
            id: 4,
            name: "Hải Sản Tươi Sống",
            image: "images/Hai-San-Nha-Trang.jpeg",
            description: "Nha Trang nổi tiếng với hải sản tươi ngon, được chế biến đa dạng từ hấp, nướng đến xào.",
            ingredients: ["Tôm hùm", "Cua", "Ốc biển", "Mực", "Cá biển"],
            recipe: "Hải sản tươi sống được chế biến theo nhiều cách: hấp với gừng, nướng mỡ hành, xào với sốt..."
        }
    ];

    // Sample video data
    const videos = [
        {
            id: 1,
            title: "Cách Làm Bánh Căn Nha Trang",
            thumbnail: "images/video_banhcan.png",
            videoUrl: "https://www.youtube.com/watch?v=L_vkzi6qGU0"
        },
        {
            id: 2,
            title: "Hướng Dẫn Nấu Bún Cá Nha Trang",
            thumbnail: "images/video_bunca.png",
            videoUrl: "https://www.youtube.com/watch?v=bpKIiyJuY7s"
        },
        {
            id: 3,
            title: "Bí Quyết Làm Nem Nướng Ninh Hòa",
            thumbnail: "images/video_nemnuong.png",
            videoUrl: "https://www.youtube.com/watch?v=NVzRMbREV_c"
        }
    ];

    // Sample restaurant data
    const restaurants = [
        {
            id: 1,
            name: "Nhà Hàng Hải Sản Trên Biển",
            image: "images/Nhahang.jpeg",
            address: "Bãi biển Nha Trang, Phường Lộc Thọ",
            rating: 4.8,
            priceRange: "$$-$$$",
            specialties: ["Tôm hùm nướng", "Cua rang me", "Ốc hương xào tỏi"],
            reviews: [
                { user: "Minh Anh", rating: 5, comment: "Hải sản tươi ngon, view biển tuyệt đẹp!", date: "15/05/2023" },
                { user: "Hoàng Nam", rating: 4, comment: "Giá hơi cao nhưng chất lượng xứng đáng.", date: "02/06/2023" }
            ]
        },
        {
            id: 2,
            name: "Quán Bánh Căn Cô Ba",
            image: "images/Banhcanh.jpeg",
            address: "123 Nguyễn Thị Minh Khai, Nha Trang",
            rating: 4.5,
            priceRange: "$",
            specialties: ["Bánh căn trứng", "Bánh căn mực", "Bánh căn nhân thịt"],
            reviews: [
                { user: "Thu Hà", rating: 5, comment: "Bánh căn ngon nhất Nha Trang, nước chấm tuyệt vời!", date: "20/04/2023" },
                { user: "Văn Tùng", rating: 4, comment: "Quán đông khách, phải đợi nhưng rất đáng.", date: "10/05/2023" }
            ]
        },
        {
            id: 3,
            name: "Nem Nướng Đặng Văn Quyên",
            image: "images/nemnuongdang.jpeg",
            address: "87 Lê Thánh Tôn, Nha Trang",
            rating: 4.7,
            priceRange: "$-$$",
            specialties: ["Nem nướng", "Chả giò", "Thịt nướng cuốn bánh tráng"],
            reviews: [
                { user: "Lan Anh", rating: 5, comment: "Nem nướng thơm ngon, nước chấm đặc biệt!", date: "05/06/2023" },
                { user: "Quốc Bảo", rating: 4, comment: "Quán sạch sẽ, nhân viên phục vụ tốt.", date: "12/06/2023" }
            ]
        },
        {
            id: 4,
            name: "Quán Bún Cá Năm Beo",
            image: "images/Bunmamcabeo.jpeg",
            address: "156 Nguyễn Trãi, Nha Trang",
            rating: 4.6,
            priceRange: "$",
            specialties: ["Bún cá", "Bún cá sứa", "Bún chả cá"],
            reviews: [
                { user: "Thanh Hương", rating: 5, comment: "Nước dùng ngọt thanh, cá tươi ngon!", date: "01/05/2023" },
                { user: "Đức Minh", rating: 4, comment: "Quán bình dân nhưng chất lượng tuyệt vời.", date: "18/05/2023" }
            ]
        }
    ];

    // Load cuisines
    function loadCuisines() {
        const container = document.getElementById('cuisine-container');
        if (!container) return;
        
        cuisines.forEach(cuisine => {
            const cuisineElement = document.createElement('div');
            cuisineElement.className = 'cuisine-item';
            
            let ingredientsHTML = '';
            cuisine.ingredients.forEach(ingredient => {
                ingredientsHTML += `<li>${ingredient}</li>`;
            });
            
            cuisineElement.innerHTML = `
                <img src="${cuisine.image}" alt="${cuisine.name}">
                <div class="cuisine-info">
                    <h3>${cuisine.name}</h3>
                    <p>${cuisine.description}</p>
                    <div class="ingredients">
                        <h4>Nguyên liệu:</h4>
                        <ul>${ingredientsHTML}</ul>
                    </div>
                    <div class="recipe">
                        <h4>Cách chế biến:</h4>
                        <p>${cuisine.recipe}</p>
                    </div>
                </div>
            `;
            
            container.appendChild(cuisineElement);
        });
    }

    // Load videos
    function loadVideos() {
        const container = document.getElementById('video-container');
        if (!container) return;
        
        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.className = 'video-item';
            videoElement.innerHTML = `
                <div class="video-thumbnail" onclick="playVideo('${video.videoUrl}')">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="play-button"><i class="fas fa-play"></i></div>
                </div>
                <h3>${video.title}</h3>
            `;
            
            container.appendChild(videoElement);
        });
    }

    // Load restaurants
    function loadRestaurants() {
        const container = document.getElementById('restaurant-container');
        if (!container) return;
        
        restaurants.forEach(restaurant => {
            const restaurantElement = document.createElement('div');
            restaurantElement.className = 'restaurant-item';
            
            let specialtiesHTML = '';
            restaurant.specialties.forEach(specialty => {
                specialtiesHTML += `<li>${specialty}</li>`;
            });
            
            // Create star rating
            let ratingHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(restaurant.rating)) {
                    ratingHTML += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= restaurant.rating) {
                    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    ratingHTML += '<i class="far fa-star"></i>';
                }
            }
            
            restaurantElement.innerHTML = `
                <img src="${restaurant.image}" alt="${restaurant.name}">
                <div class="restaurant-info">
                    <h3>${restaurant.name}</h3>
                    <p><i class="fas fa-map-marker-alt"></i> ${restaurant.address}</p>
                    <div class="rating">
                        ${ratingHTML} <span>${restaurant.rating}</span>
                    </div>
                    <p class="price-range">Giá: ${restaurant.priceRange}</p>
                    <div class="specialties">
                        <h4>Món đặc sản:</h4>
                        <ul>${specialtiesHTML}</ul>
                    </div>
                    <button class="btn view-reviews" onclick="showReviews(${restaurant.id})">Xem đánh giá</button>
                </div>
            `;
            
            container.appendChild(restaurantElement);
        });
    }

    // Initialize page
    loadCuisines();
    loadVideos();
    loadRestaurants();
});

// Play video function
function playVideo(videoUrl) {
    const videoModal = document.createElement('div');
    videoModal.className = 'video-modal';
    videoModal.innerHTML = `
        <div class="video-modal-content">
            <span class="close" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    
    document.body.appendChild(videoModal);
}

// Show reviews function
function showReviews(restaurantId) {
    // Find the restaurant data
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    // Create modal for reviews
    const reviewModal = document.createElement('div');
    reviewModal.className = 'review-modal';
    
    // Generate HTML for existing reviews
    let reviewsHTML = '';
    if (restaurant.reviews && restaurant.reviews.length > 0) {
        restaurant.reviews.forEach(review => {
            // Generate stars for this review
            let reviewStars = '';
            for (let i = 1; i <= 5; i++) {
                reviewStars += i <= review.rating 
                    ? '<i class="fas fa-star"></i>' 
                    : '<i class="far fa-star"></i>';
            }
            
            reviewsHTML += `
                <div class="review-item">
                    <div class="review-header">
                        <div class="review-user">
                            <i class="fas fa-user-circle"></i>
                            <span>${review.user}</span>
                        </div>
                        <div class="review-date">${review.date}</div>
                    </div>
                    <div class="review-rating">${reviewStars}</div>
                    <div class="review-comment">${review.comment}</div>
                </div>
            `;
        });
    } else {
        reviewsHTML = '<p class="no-reviews">Chưa có đánh giá nào.</p>';
    }
    
    // Create the modal content
    reviewModal.innerHTML = `
        <div class="review-modal-content">
            <span class="close" onclick="closeReviewModal()">&times;</span>
            <div class="review-modal-header">
                <h2>Đánh giá - ${restaurant.name}</h2>
                <div class="restaurant-overall-rating">
                    <div class="rating">
                        ${generateRatingStars(restaurant.rating)} 
                        <span>${restaurant.rating}</span>
                    </div>
                </div>
            </div>
            <div class="review-list">
                ${reviewsHTML}
            </div>
            <div class="add-review-form">
                <h3>Thêm đánh giá của bạn</h3>
                <div class="form-group">
                    <label for="review-name">Tên của bạn:</label>
                    <input type="text" id="review-name" placeholder="Nhập tên của bạn">
                </div>
                <div class="form-group">
                    <label>Đánh giá:</label>
                    <div class="rating-input">
                        <i class="far fa-star" data-rating="1" onclick="setRating(1)"></i>
                        <i class="far fa-star" data-rating="2" onclick="setRating(2)"></i>
                        <i class="far fa-star" data-rating="3" onclick="setRating(3)"></i>
                        <i class="far fa-star" data-rating="4" onclick="setRating(4)"></i>
                        <i class="far fa-star" data-rating="5" onclick="setRating(5)"></i>
                    </div>
                </div>
                <div class="form-group">
                    <label for="review-comment">Nhận xét:</label>
                    <textarea id="review-comment" placeholder="Chia sẻ trải nghiệm của bạn"></textarea>
                </div>
                <button class="btn submit-review" onclick="submitReview(${restaurantId})">Gửi đánh giá</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(reviewModal);
    
    // Add animation class after a small delay
    setTimeout(() => {
        reviewModal.classList.add('show');
    }, 10);
}

// Close review modal
function closeReviewModal() {
    const modal = document.querySelector('.review-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Generate rating stars
function generateRatingStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 <= rating) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    return starsHTML;
}

// Set rating in the form
function setRating(rating) {
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.className = 'fas fa-star';
        } else {
            star.className = 'far fa-star';
        }
    });
    
    // Store the selected rating as a data attribute
    document.querySelector('.rating-input').setAttribute('data-selected-rating', rating);
}

// Submit review
function submitReview(restaurantId) {
    const nameInput = document.getElementById('review-name');
    const commentInput = document.getElementById('review-comment');
    const ratingInput = document.querySelector('.rating-input');
    
    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();
    const rating = parseInt(ratingInput.getAttribute('data-selected-rating') || 0);
    
    // Validate inputs
    if (!name) {
        alert('Vui lòng nhập tên của bạn');
        return;
    }
    
    if (rating === 0) {
        alert('Vui lòng chọn số sao đánh giá');
        return;
    }
    
    if (!comment) {
        alert('Vui lòng nhập nhận xét của bạn');
        return;
    }
    
    // Format current date
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    
    // Create new review
    const newReview = {
        user: name,
        rating: rating,
        comment: comment,
        date: formattedDate
    };
    
    // Find the restaurant and add the review
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (restaurant) {
        if (!restaurant.reviews) {
            restaurant.reviews = [];
        }
        
        // Add the new review at the beginning
        restaurant.reviews.unshift(newReview);
        
        // Recalculate average rating
        const totalRating = restaurant.reviews.reduce((sum, review) => sum + review.rating, 0);
        restaurant.rating = (totalRating / restaurant.reviews.length).toFixed(1);
        
        // Close and reopen the modal to show the updated reviews
        closeReviewModal();
        setTimeout(() => {
            showReviews(restaurantId);
        }, 300);
        
        // Update the restaurant display in the list
        updateRestaurantDisplay(restaurant);
    }
}

// Update restaurant display after new review
function updateRestaurantDisplay(restaurant) {
    const restaurantElement = document.querySelector(`.restaurant-item:nth-child(${restaurant.id})`);
    if (!restaurantElement) return;
    
    const ratingElement = restaurantElement.querySelector('.rating');
    if (ratingElement) {
        ratingElement.innerHTML = `${generateRatingStars(restaurant.rating)} <span>${restaurant.rating}</span>`;
    }
}
