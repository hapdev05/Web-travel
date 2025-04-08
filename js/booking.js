// Booking page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters to see if we're booking a specific tour, vehicle, or restaurant
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tour');
    const vehicleId = urlParams.get('vehicle');
    const restaurantId = urlParams.get('restaurant');
    
    // Set the booking type based on URL parameters
    if (tourId) {
        document.getElementById('booking-type-tour').checked = true;
        showBookingForm('tour');
        // In a real app, you would fetch tour details and pre-fill the form
    } else if (vehicleId) {
        document.getElementById('booking-type-vehicle').checked = true;
        showBookingForm('vehicle');
        // In a real app, you would fetch vehicle details and pre-fill the form
    } else if (restaurantId) {
        document.getElementById('booking-type-restaurant').checked = true;
        showBookingForm('restaurant');
        // In a real app, you would fetch restaurant details and pre-fill the form
    }
    
    // Add event listeners to booking type radio buttons
    const bookingTypeInputs = document.querySelectorAll('input[name="booking-type"]');
    bookingTypeInputs.forEach(input => {
        input.addEventListener('change', function() {
            showBookingForm(this.value);
        });
    });
    
    // Add event listener to booking form submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                submitBooking();
            }
        });
    }
    
    // Add date picker functionality
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        input.setAttribute('min', today);
    });
    
    // Initialize time slot selection
    initializeTimeSlots();
});

// Show the appropriate booking form based on type
function showBookingForm(type) {
    const tourFields = document.getElementById('tour-specific-fields');
    const vehicleFields = document.getElementById('vehicle-specific-fields');
    const restaurantFields = document.getElementById('restaurant-specific-fields');
    
    if (type === 'tour') {
        tourFields.style.display = 'block';
        vehicleFields.style.display = 'none';
        restaurantFields.style.display = 'none';
    } else if (type === 'vehicle') {
        tourFields.style.display = 'none';
        vehicleFields.style.display = 'block';
        restaurantFields.style.display = 'none';
    } else if (type === 'restaurant') {
        tourFields.style.display = 'none';
        vehicleFields.style.display = 'none';
        restaurantFields.style.display = 'block';
    }
}

// Initialize time slot selection functionality
function initializeTimeSlots() {
    const timeSlots = document.querySelectorAll('.time-slot');
    const timeInput = document.getElementById('reservation-time');
    
    if (timeSlots.length > 0 && timeInput) {
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Remove selected class from all time slots
                timeSlots.forEach(s => s.classList.remove('selected'));
                
                // Add selected class to clicked time slot
                this.classList.add('selected');
                
                // Update hidden input
                timeInput.value = this.getAttribute('data-time');
            });
        });
    }
}

// Handle booking form submission
function submitBooking() {
    // Get form data
    const bookingType = document.querySelector('input[name="booking-type"]:checked').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    let bookingDetails = '';
    
    if (bookingType === 'tour') {
        const tourName = document.getElementById('tour-name').value;
        const tourDate = document.getElementById('tour-date').value;
        const participants = document.getElementById('participants').value;
        
        bookingDetails = `
            <p><strong>Loại đặt chỗ:</strong> Tour</p>
            <p><strong>Tên tour:</strong> ${tourName}</p>
            <p><strong>Ngày tham gia:</strong> ${formatDate(tourDate)}</p>
            <p><strong>Số người tham gia:</strong> ${participants}</p>
        `;
    } else if (bookingType === 'vehicle') {
        const vehicleType = document.getElementById('vehicle-type').value;
        const pickupDate = document.getElementById('pickup-date').value;
        const returnDate = document.getElementById('return-date').value;
        
        bookingDetails = `
            <p><strong>Loại đặt chỗ:</strong> Thuê xe</p>
            <p><strong>Loại xe:</strong> ${vehicleType}</p>
            <p><strong>Ngày nhận xe:</strong> ${formatDate(pickupDate)}</p>
            <p><strong>Ngày trả xe:</strong> ${formatDate(returnDate)}</p>
        `;
    } else if (bookingType === 'restaurant') {
        const restaurantName = document.getElementById('restaurant-name').value;
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;
        const guests = document.getElementById('guests').value;
        const specialRequests = document.getElementById('special-requests').value;
        
        bookingDetails = `
            <p><strong>Loại đặt chỗ:</strong> Đặt bàn nhà hàng</p>
            <p><strong>Tên nhà hàng:</strong> ${restaurantName}</p>
            <p><strong>Ngày đặt bàn:</strong> ${formatDate(reservationDate)}</p>
            <p><strong>Giờ đặt bàn:</strong> ${reservationTime}</p>
            <p><strong>Số khách:</strong> ${guests}</p>
        `;
        
        if (specialRequests) {
            bookingDetails += `<p><strong>Yêu cầu đặc biệt:</strong> ${specialRequests}</p>`;
        }
    }
    
    // Create confirmation message
    const confirmationHTML = `
        <div class="booking-confirmation">
            <h2>Xác nhận đặt chỗ</h2>
            <p>Cảm ơn bạn đã đặt chỗ với chúng tôi!</p>
            <div class="booking-details">
                <p><strong>Tên:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Số điện thoại:</strong> ${phone}</p>
                ${bookingDetails}
            </div>
            <p>Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đặt chỗ.</p>
            <button class="btn" onclick="window.location.href='index.html'">Về trang chủ</button>
        </div>
    `;
    
    // Replace form with confirmation
    document.querySelector('.booking-container').innerHTML = confirmationHTML;
    
    // In a real application, you would send this data to a server
    console.log('Booking submitted:', {
        type: bookingType,
        name,
        email,
        phone,
        details: getBookingDetails(bookingType)
    });
}

// Helper function to get booking details based on type
function getBookingDetails(bookingType) {
    if (bookingType === 'tour') {
        return {
            tourName: document.getElementById('tour-name').value,
            tourDate: document.getElementById('tour-date').value,
            participants: document.getElementById('participants').value
        };
    } else if (bookingType === 'vehicle') {
        return {
            vehicleType: document.getElementById('vehicle-type').value,
            pickupDate: document.getElementById('pickup-date').value,
            returnDate: document.getElementById('return-date').value
        };
    } else if (bookingType === 'restaurant') {
        return {
            restaurantName: document.getElementById('restaurant-name').value,
            reservationDate: document.getElementById('reservation-date').value,
            reservationTime: document.getElementById('reservation-time').value,
            guests: document.getElementById('guests').value,
            specialRequests: document.getElementById('special-requests').value
        };
    }
    return {};
}

// Format date to DD/MM/YYYY
function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Validate form fields
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    let isValid = true;
    let errorMessage = '';
    
    if (!name) {
        isValid = false;
        errorMessage += 'Vui lòng nhập tên của bạn.\n';
    }
    
    if (!email) {
        isValid = false;
        errorMessage += 'Vui lòng nhập email của bạn.\n';
    } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += 'Vui lòng nhập email hợp lệ.\n';
    }
    
    if (!phone) {
        isValid = false;
        errorMessage += 'Vui lòng nhập số điện thoại của bạn.\n';
    }
    
    const bookingType = document.querySelector('input[name="booking-type"]:checked').value;
    
    if (bookingType === 'tour') {
        const tourName = document.getElementById('tour-name').value;
        const tourDate = document.getElementById('tour-date').value;
        const participants = document.getElementById('participants').value;
        
        if (!tourName) {
            isValid = false;
            errorMessage += 'Vui lòng chọn tour.\n';
        }
        
        if (!tourDate) {
            isValid = false;
            errorMessage += 'Vui lòng chọn ngày tham gia tour.\n';
        }
        
        if (!participants || participants < 1) {
            isValid = false;
            errorMessage += 'Vui lòng nhập số người tham gia hợp lệ.\n';
        }
    } else if (bookingType === 'vehicle') {
        const vehicleType = document.getElementById('vehicle-type').value;
        const pickupDate = document.getElementById('pickup-date').value;
        const returnDate = document.getElementById('return-date').value;
        
        if (!vehicleType) {
            isValid = false;
            errorMessage += 'Vui lòng chọn loại xe.\n';
        }
        
        if (!pickupDate) {
            isValid = false;
            errorMessage += 'Vui lòng chọn ngày nhận xe.\n';
        }
        
        if (!returnDate) {
            isValid = false;
            errorMessage += 'Vui lòng chọn ngày trả xe.\n';
        } else if (new Date(returnDate) <= new Date(pickupDate)) {
            isValid = false;
            errorMessage += 'Ngày trả xe phải sau ngày nhận xe.\n';
        }
    } else if (bookingType === 'restaurant') {
        const restaurantName = document.getElementById('restaurant-name').value;
        const reservationDate = document.getElementById('reservation-date').value;
        const reservationTime = document.getElementById('reservation-time').value;
        const guests = document.getElementById('guests').value;
        
        if (!restaurantName) {
            isValid = false;
            errorMessage += 'Vui lòng chọn nhà hàng.\n';
        }
        
        if (!reservationDate) {
            isValid = false;
            errorMessage += 'Vui lòng chọn ngày đặt bàn.\n';
        }
        
        if (!reservationTime) {
            isValid = false;
            errorMessage += 'Vui lòng chọn giờ đặt bàn.\n';
        }
        
        if (!guests || guests < 1) {
            isValid = false;
            errorMessage += 'Vui lòng chọn số lượng khách.\n';
        }
    }
    
    if (!isValid) {
        alert(errorMessage);
    }
    
    return isValid;
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}