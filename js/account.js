// Account page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    checkLoginStatus();
    
    // Tab switching functionality
    const menuItems = document.querySelectorAll('.account-menu li:not(#logout-btn)');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the tab to show
            const tabToShow = this.getAttribute('data-tab');
            
            // Hide all tabs
            const tabs = document.querySelectorAll('.account-tab');
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Show the selected tab
            document.getElementById(`${tabToShow}-tab`).classList.add('active');
            
            // Load data for the tab if needed
            if (tabToShow === 'bookings') {
                loadBookings();
            } else if (tabToShow === 'reviews') {
                loadReviews();
            } else if (tabToShow === 'favorites') {
                loadFavorites('destinations');
            }
        });
    });
    
    // Logout functionality
    document.getElementById('logout-btn').addEventListener('click', function() {
        logout();
    });
    
    // Profile form submission
    document.getElementById('profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        saveProfile();
    });
    
    // Password form submission
    document.getElementById('password-form').addEventListener('submit', function(e) {
        e.preventDefault();
        changePassword();
    });
    
    // Save notification settings
    document.getElementById('save-notifications').addEventListener('click', function() {
        saveNotificationSettings();
    });
    
    // Delete account
    document.getElementById('delete-account').addEventListener('click', function() {
        confirmDeleteAccount();
    });
    
    // Avatar upload
    document.getElementById('avatar-input').addEventListener('change', function(e) {
        uploadAvatar(e);
    });
    
    // Booking filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter bookings
            const filter = this.getAttribute('data-filter');
            filterBookings(filter);
        });
    });
    
    // Favorites category buttons
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all category buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Load favorites for the selected category
            const category = this.getAttribute('data-category');
            loadFavorites(category);
        });
    });
    
    // Modal tabs
    const modalTabs = document.querySelectorAll('.modal-tab');
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all modal tabs
            modalTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get the form to show
            const formToShow = this.getAttribute('data-tab');
            
            // Hide all forms
            const forms = document.querySelectorAll('.modal-form');
            forms.forEach(form => form.classList.remove('active'));
            
            // Show the selected form
            document.getElementById(`${formToShow}-form`).classList.add('active');
        });
    });
    
    // Close modal
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('login-modal').style.display = 'none';
    });
    
    // Login button
    document.getElementById('login-btn').addEventListener('click', function() {
        login();
    });
    
    // Register button
    document.getElementById('register-btn').addEventListener('click', function() {
        register();
    });
    
    // Load user data if logged in
    loadUserData();
});

// Check if user is logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn) {
        // Show login modal
        document.getElementById('login-modal').style.display = 'flex';
    }
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) {
        alert('Vui lòng nhập email và mật khẩu');
        return;
    }
    
    // In a real application, you would send this data to a server for authentication
    // For demo purposes, we'll just simulate a successful login
    
    // Create a demo user
    const user = {
        name: 'Nguyễn Văn A',
        email: email,
        phone: '0123456789',
        dob: '1990-01-01',
        address: '123 Đường ABC',
        city: 'Nha Trang',
        country: 'Việt Nam',
        gender: 'male',
        bio: 'Tôi là một người yêu thích du lịch và khám phá những điểm đến mới.',
        avatar: 'images/avatar-placeholder.jpg'
    };
    
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Hide login modal
    document.getElementById('login-modal').style.display = 'none';
    
    // Load user data
    loadUserData();
    
    // Load demo data
    loadDemoData();
}

// Register function
function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    if (!name || !email || !password || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp');
        return;
    }
    
    if (!agreeTerms) {
        alert('Vui lòng đồng ý với điều khoản sử dụng');
        return;
    }
    
    // In a real application, you would send this data to a server for registration
    // For demo purposes, we'll just simulate a successful registration
    
    // Create a new user
    const user = {
        name: name,
        email: email,
        phone: '',
        dob: '',
        address: '',
        city: '',
        country: '',
        gender: '',
        bio: '',
        avatar: 'images/avatar-placeholder.jpg'
    };
    
    // Save user data to localStorage
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Hide login modal
    document.getElementById('login-modal').style.display = 'none';
    
    // Load user data
    loadUserData();
    
    // Load demo data
    loadDemoData();
}

// Logout function
function logout() {
    // In a real application, you would send a request to the server to invalidate the session
    
    // Clear localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('bookings');
    localStorage.removeItem('reviews');
    localStorage.removeItem('favorites');
    
    // Redirect to home page
    window.location.href = 'index.html';
}

// Load user data
function loadUserData() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        // Update user info in sidebar
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-avatar').src = user.avatar;
        
        // Fill profile form
        document.getElementById('full-name').value = user.name;
        document.getElementById('phone').value = user.phone;
        document.getElementById('dob').value = user.dob;
        document.getElementById('address').value = user.address;
        document.getElementById('city').value = user.city;
        document.getElementById('country').value = user.country;
        document.getElementById('bio').value = user.bio;
        
        // Set gender radio button
        if (user.gender) {
            document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;
        }
    }
}

// Save profile
function saveProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        // Update user data
        user.name = document.getElementById('full-name').value;
        user.phone = document.getElementById('phone').value;
        user.dob = document.getElementById('dob').value;
        user.address = document.getElementById('address').value;
        user.city = document.getElementById('city').value;
        user.country = document.getElementById('country').value;
        user.bio = document.getElementById('bio').value;
        
        // Get selected gender
        const genderRadio = document.querySelector('input[name="gender"]:checked');
        if (genderRadio) {
            user.gender = genderRadio.value;
        }
        
        // Save updated user data
        localStorage.setItem('user', JSON.stringify(user));
        
        // Update user info in sidebar
        document.getElementById('user-name').textContent = user.name;
        
        // Show success message
        alert('Thông tin cá nhân đã được cập nhật');
    }
}

// Change password
function changePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Vui lòng điền đầy đủ thông tin');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        alert('Mật khẩu xác nhận không khớp');
        return;
    }
    
    // In a real application, you would send this data to a server to verify the current password and update to the new one
    
    // Show success message
    alert('Mật khẩu đã được cập nhật');
    
    // Clear form
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
}

// Save notification settings
function saveNotificationSettings() {
    const emailNotifications = document.getElementById('email-notifications').checked;
    const promoNotifications = document.getElementById('promo-notifications').checked;
    const bookingNotifications = document.getElementById('booking-notifications').checked;
    
    // In a real application, you would send this data to a server to update the user's notification preferences
    
    // Show success message
    alert('Cài đặt thông báo đã được lưu');
}

// Confirm delete account
function confirmDeleteAccount() {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa tài khoản? Hành động này không thể hoàn tác.');
    
    if (confirmed) {
        // In a real application, you would send a request to the server to delete the user's account
        
        // Clear localStorage
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('bookings');
        localStorage.removeItem('reviews');
        localStorage.removeItem('favorites');
        
        // Redirect to home page
        window.location.href = 'index.html';
    }
}

// Upload avatar
function uploadAvatar(event) {
    const file = event.target.files[0];
    
    if (file) {
        // In a real application, you would upload the file to a server
        
        // For demo purposes, we'll use FileReader to display the selected image
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const user = JSON.parse(localStorage.getItem('user'));
            
            if (user) {
                // Update user avatar
                user.avatar = e.target.result;
                
                // Save updated user data
                localStorage.setItem('user', JSON.stringify(user));
                
                // Update avatar in sidebar
                document.getElementById('user-avatar').src = e.target.result;
            }
        };
        
        reader.readAsDataURL(file);
    }
}

// Load bookings
function loadBookings() {
    const bookingsContainer = document.getElementById('bookings-list');
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    
    if (bookings.length === 0) {
        bookingsContainer.innerHTML = '<p class="empty-message">Bạn chưa có đặt chỗ nào.</p>';
        return;
    }
    
    // Sort bookings by date (newest first)
    bookings.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Generate HTML for each booking
    let bookingsHTML = '';
    
    bookings.forEach(booking => {
        let statusClass = '';
        let statusText = '';
        
        switch (booking.status) {
            case 'confirmed':
                statusClass = 'confirmed';
                statusText = 'Đã xác nhận';
                break;
            case 'completed':
                statusClass = 'completed';
                statusText = 'Đã hoàn thành';
                break;
            case 'cancelled':
                statusClass = 'cancelled';
                statusText = 'Đã hủy';
                break;
            default:
                statusClass = 'pending';
                statusText = 'Đang chờ xác nhận';
        }
        
        let typeClass = '';
        let typeText = '';
        
        switch (booking.type) {
            case 'tour':
                typeClass = 'tour';
                typeText = 'Tour';
                break;
            case 'vehicle':
                typeClass = 'vehicle';
                typeText = 'Phương tiện';
                break;
            case 'restaurant':
                typeClass = 'restaurant';
                typeText = 'Nhà hàng';
                break;
        }
        
        bookingsHTML += `
            <div class="booking-item" data-type="${booking.type}">
                <div class="booking-header">
                    <div>
                        <span class="booking-type ${typeClass}">${typeText}</span>
                        <span class="booking-status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="booking-date">
                        <i class="far fa-calendar-alt"></i> ${formatDate(booking.date)}
                    </div>
                </div>
                <div class="booking-details">
                    <h4>${booking.name}</h4>
                    <div class="booking-meta">
                        ${booking.type === 'tour' ? `<span><i class="far fa-calendar"></i> ${booking.tourDate}</span>` : ''}
                        ${booking.type === 'tour' ? `<span><i class="fas fa-users"></i> ${booking.participants} người</span>` : ''}
                        ${booking.type === 'vehicle' ? `<span><i class="far fa-calendar"></i> ${booking.pickupDate} - ${booking.returnDate}</span>` : ''}
                        ${booking.type === 'restaurant' ? `<span><i class="far fa-calendar"></i> ${booking.reservationDate}</span>` : ''}
                        ${booking.type === 'restaurant' ? `<span><i class="far fa-clock"></i> ${booking.reservationTime}</span>` : ''}
                        ${booking.type === 'restaurant' ? `<span><i class="fas fa-users"></i> ${booking.guests} người</span>` : ''}
                    </div>
                </div>
                <div class="booking-actions">
                    <button class="btn-view" onclick="viewBookingDetails(${booking.id})">Chi tiết</button>
                    ${booking.status === 'pending' ? `<button class="btn-cancel" onclick="cancelBooking(${booking.id})">Hủy đặt chỗ</button>` : ''}
                    ${booking.status === 'completed' && !booking.reviewed ? `<button class="btn-review" onclick="addReview(${booking.id})">Đánh giá</button>` : ''}
                </div>
            </div>
        `;
    });
    
    bookingsContainer.innerHTML = bookingsHTML;
}

// Filter bookings
function filterBookings(filter) {
    const bookingItems = document.querySelectorAll('.booking-item');
    
    bookingItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-type') === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Load reviews
function loadReviews() {
    const reviewsContainer = document.getElementById('reviews-list');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    
    if (reviews.length === 0) {
        reviewsContainer.innerHTML = '<p class="empty-message">Bạn chưa có đánh giá nào.</p>';
        return;
    }
    
    // Sort reviews by date (newest first)
    reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Generate HTML for each review
    let reviewsHTML = '';
    
    reviews.forEach(review => {
        // Generate rating stars
        let ratingHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= review.rating) {
                ratingHTML += '<i class="fas fa-star"></i>';
            } else {
                ratingHTML += '<i class="far fa-star"></i>';
            }
        }
        
        reviewsHTML += `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-target">${review.targetName}</div>
                    <div class="review-date">${formatDate(review.date)}</div>
                </div>
                <div class="review-rating">
                    ${ratingHTML} <span>${review.rating}/5</span>
                </div>
                <div class="review-content">
                    <p>${review.content}</p>
                </div>
                <div class="review-actions">
                    <button class="btn-edit" onclick="editReview(${review.id})">Chỉnh sửa</button>
                    <button class="btn-delete" onclick="deleteReview(${review.id})">Xóa</button>
                </div>
            </div>
        `;
    });
    
    reviewsContainer.innerHTML = reviewsHTML;
}

// Load favorites
function loadFavorites(category) {
    const favoritesContainer = document.getElementById('favorites-list');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Filter favorites by category
    const filteredFavorites = favorites.filter(fav => fav.category === category);
    
    if (filteredFavorites.length === 0) {
        favoritesContainer.innerHTML = '<p class="empty-message">Bạn chưa có mục yêu thích nào trong danh mục này.</p>';
        return;
    }
    
    // Generate HTML for each favorite
    let favoritesHTML = '';
    
    filteredFavorites.forEach(favorite => {
        favoritesHTML += `
            <div class="favorite-item">
                <div class="favorite-image">
                    <img src="${favorite.image}" alt="${favorite.name}">
                </div>
                <div class="favorite-info">
                    <h4>${favorite.name}</h4>
                    <div class="favorite-meta">
                        <div class="favorite-rating">
                            <i class="fas fa-star"></i> ${favorite.rating}
                        </div>
                        <button class="btn-remove-favorite" onclick="removeFavorite(${favorite.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    favoritesContainer.innerHTML = favoritesHTML;
}

// View booking details
function viewBookingDetails(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return;
    
    // In a real application, you would show a modal with the booking details
    alert(`Chi tiết đặt chỗ: ${booking.name}`);
}

// Cancel booking
function cancelBooking(bookingId) {
    const confirmed = confirm('Bạn có chắc chắn muốn hủy đặt chỗ này?');
    
    if (confirmed) {
        const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        const bookingIndex = bookings.findIndex(b => b.id === bookingId);
        
        if (bookingIndex !== -1) {
            // Update booking status
            bookings[bookingIndex].status = 'cancelled';
            
            // Save updated bookings
            localStorage.setItem('bookings', JSON.stringify(bookings));
            
            // Reload bookings
            loadBookings();
        }
    }
}

// Add review
function addReview(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings.find(b => b.id === bookingId);
    
    if (!booking) return;
    
    // In a real application, you would show a modal with a form to add a review
    const rating = prompt('Đánh giá (1-5 sao):', '5');
    const content = prompt('Nhận xét của bạn:', '');
    
    if (rating && content) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        
        // Create new review
        const newReview = {
            id: Date.now(),
            bookingId: booking.id,
            targetId: booking.targetId,
            targetName: booking.name,
            rating: parseInt(rating),
            content: content,
            date: new Date().toISOString()
        };
        
        // Add review to reviews array
        reviews.push(newReview);
        
        // Save updated reviews
        localStorage.setItem('reviews', JSON.stringify(reviews));
        
        // Update booking
        booking.reviewed = true;
        
        // Save updated bookings
        localStorage.setItem('bookings', JSON.stringify(bookings));
        
        // Reload bookings
        loadBookings();
        
        // Show success message
        alert('Cảm ơn bạn đã đánh giá!');
    }
}

// Edit review
function editReview(reviewId) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const review = reviews.find(r => r.id === reviewId);
    
    if (!review) return;
    
    // In a real application, you would show a modal with a form to edit the review
    const rating = prompt('Đánh giá (1-5 sao):', review.rating);
    const content = prompt('Nhận xét của bạn:', review.content);
    
    if (rating && content) {
        // Update review
        review.rating = parseInt(rating);
        review.content = content;
        
        // Save updated reviews
        localStorage.setItem('reviews', JSON.stringify(reviews));
        
        // Reload reviews
        loadReviews();
        
        // Show success message
        alert('Đánh giá đã được cập nhật');
    }
}

// Delete review
function deleteReview(reviewId) {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa đánh giá này?');
    
    if (confirmed) {
        const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        const reviewIndex = reviews.findIndex(r => r.id === reviewId);
        
        if (reviewIndex !== -1) {
            // Remove review from reviews array
            reviews.splice(reviewIndex, 1);
            
            // Save updated reviews
            localStorage.setItem('reviews', JSON.stringify(reviews));
            
            // Reload reviews
            loadReviews();
        }
    }
}

// Remove favorite
function removeFavorite(favoriteId) {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa mục này khỏi danh sách yêu thích?');
    
    if (confirmed) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const favoriteIndex = favorites.findIndex(f => f.id === favoriteId);
        
        if (favoriteIndex !== -1) {
            // Get the category of the favorite being removed
            const category = favorites[favoriteIndex].category;
            
            // Remove favorite from favorites array
            favorites.splice(favoriteIndex, 1);
            
            // Save updated favorites
            localStorage.setItem('favorites', JSON.stringify(favorites));
            
            // Reload favorites
            loadFavorites(category);
        }
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Load demo data
function loadDemoData() {
    // Check if demo data already exists
    if (localStorage.getItem('bookings') && localStorage.getItem('reviews') && localStorage.getItem('favorites')) {
        return;
    }
    
    // Demo bookings
    const bookings = [
        {
            id: 1,
            type: 'tour',
            name: 'Tour 4 Đảo',
            targetId: 1,
            date: '2023-06-15T10:30:00',
            tourDate: '20/06/2023',
            participants: 2,
            status: 'completed',
            reviewed: true
        },
        {
            id: 2,
            type: 'tour',
            name: 'Tour Vinpearl Land',
            targetId: 2,
            date: '2023-07-05T14:45:00',
            tourDate: '10/07/2023',
            participants: 3,
            status: 'completed',
            reviewed: false
        },
        {
            id: 3,
            type: 'vehicle',
            name: 'Xe máy Honda Wave',
            targetId: 1,
            date: '2023-07-20T09:15:00',
            pickupDate: '25/07/2023',
            returnDate: '27/07/2023',
            status: 'confirmed'
        },
        {
            id: 4,
            type: 'restaurant',
            name: 'Nhà hàng Hải Sản Nha Trang',
            targetId: 1,
            date: '2023-08-01T18:30:00',
            reservationDate: '05/08/2023',
            reservationTime: '19:00',
            guests: 4,
            status: 'pending'
        }
    ];
    
    // Demo reviews
    const reviews = [
        {
            id: 1,
            bookingId: 1,
            targetId: 1,
            targetName: 'Tour 4 Đảo',
            rating: 5,
            content: 'Tour tuyệt vời! Hướng dẫn viên nhiệt tình, cảnh đẹp, thức ăn ngon. Sẽ quay lại lần sau.',
            date: '2023-06-21T15:20:00'
        }
    ];
    
    // Demo favorites
    const favorites = [
        {
            id: 1,
            category: 'destinations',
            name: 'Vịnh Nha Trang',
            image: 'images/vinh-nha-trang.jpg',
            rating: 4.8
        },
        {
            id: 2,
            category: 'tours',
            name: 'Tour 4 Đảo',
            image: 'images/tour4dao.jpg',
            rating: 4.7
        },
        {
            id: 3,
            category: 'restaurants',
            name: 'Nhà hàng Hải Sản Nha Trang',
            image: 'images/nha-hang-hai-san.jpg',
            rating: 4.5
        }
    ];
    
    // Save demo data to localStorage
    localStorage.setItem('bookings', JSON.stringify(bookings));
    localStorage.setItem('reviews', JSON.stringify(reviews));
    localStorage.setItem('favorites', JSON.stringify(favorites));
}