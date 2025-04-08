// Services page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Tour data
    const tours = [
        {
            id: 1,
            name: "Tour 4 Đảo",
            type: "island",
            image: "images/tour4dao.jpeg",
            duration: "1 ngày",
            price: "300.000 VND",
            rating: 4.8,
            description: "Khám phá 4 hòn đảo xinh đẹp của Nha Trang: Hòn Mun, Hòn Một, Hòn Tằm và Hòn Miễu với các hoạt động lặn biển, tắm biển và thưởng thức hải sản tươi ngon.",
            highlights: ["Lặn ngắm san hô tại Hòn Mun", "Tắm biển tại Hòn Một", "Thưởng thức bữa trưa hải sản", "Tham quan làng chài"]
        },
        {
            id: 2,
            name: "Tour Vinpearl Land",
            type: "entertainment",
            image: "images/tour-vinpearl.jpeg",
            duration: "1 ngày",
            price: "800.000 VND",
            rating: 4.7,
            description: "Trải nghiệm một ngày tại khu vui chơi giải trí Vinpearl Land với nhiều trò chơi hấp dẫn, công viên nước, thủy cung và các show diễn đặc sắc.",
            highlights: ["Đi cáp treo vượt biển dài nhất thế giới", "Tham gia các trò chơi cảm giác mạnh", "Khám phá thủy cung", "Xem show diễn nhạc nước"]
        },
        {
            id: 3,
            name: "Tour Thành Phố Nha Trang",
            type: "city",
            image: "images/tour-city.jpeg",
            duration: "Nửa ngày",
            price: "200.000 VND",
            rating: 4.5,
            description: "Khám phá các điểm tham quan nổi tiếng trong thành phố Nha Trang như Tháp Bà Ponagar, Nhà thờ đá, Chùa Long Sơn và chợ Đầm.",
            highlights: ["Tham quan Tháp Bà Ponagar", "Viếng thăm Chùa Long Sơn", "Chiêm ngưỡng Nhà thờ đá", "Mua sắm tại chợ Đầm"]
        },
        {
            id: 4,
            name: "Tour Thác Yang Bay",
            type: "adventure",
            image: "images/tour-yangbay.jpeg",
            duration: "1 ngày",
            price: "450.000 VND",
            rating: 4.6,
            description: "Khám phá vẻ đẹp hoang sơ của thác Yang Bay, tham gia các hoạt động mạo hiểm và tìm hiểu văn hóa dân tộc bản địa.",
            highlights: ["Tắm thác Yang Bay", "Tham gia trò chơi dân gian", "Xem biểu diễn văn nghệ dân tộc", "Thưởng thức ẩm thực địa phương"]
        },
        {
            id: 5,
            name: "Tour Vịnh Nha Phu - Đảo Khỉ",
            type: "island",
            image: "images/tour-monkey-island.jpeg",
            duration: "1 ngày",
            price: "400.000 VND",
            rating: 4.4,
            description: "Khám phá vịnh Nha Phu xinh đẹp và tham quan đảo Khỉ với hàng trăm chú khỉ hoang dã cùng các show biểu diễn thú vị.",
            highlights: ["Xem show biểu diễn của khỉ", "Tham quan vườn thú", "Tắm biển tại bãi biển riêng", "Chèo thuyền kayak"]
        },
        {
            id: 6,
            name: "Tour VIP Đảo Điệp Sơn",
            type: "luxury",
            image: "images/tour-diep-son.jpeg",
            duration: "1 ngày",
            price: "1.200.000 VND",
            rating: 4.9,
            description: "Trải nghiệm tour cao cấp đến đảo Điệp Sơn với con đường đi bộ giữa biển độc đáo, dịch vụ sang trọng và riêng tư.",
            highlights: ["Đi bộ trên con đường giữa biển", "Dùng bữa trưa hải sản cao cấp", "Tắm biển tại bãi biển riêng", "Dịch vụ đưa đón riêng"]
        }
    ];

    // Vehicle rental data
    const vehicles = [
        {
            id: 1,
            name: "Xe máy Honda Wave",
            type: "motorbike",
            image: "images/honda-wave.jpeg",
            price: "150.000 VND/ngày",
            details: "Xe số phổ thông, tiết kiệm nhiên liệu, phù hợp cho 2 người.",
            features: ["Mũ bảo hiểm", "Bảo hiểm xe", "Hỗ trợ sửa chữa 24/7", "Giao nhận tận nơi"]
        },
        {
            id: 2,
            name: "Xe máy Honda Air Blade",
            type: "motorbike",
            image: "images/air-blade.jpeg",
            price: "200.000 VND/ngày",
            details: "Xe tay ga hiện đại, thiết kế thể thao, phù hợp cho 2 người.",
            features: ["Mũ bảo hiểm", "Bảo hiểm xe", "Hỗ trợ sửa chữa 24/7", "Giao nhận tận nơi"]
        },
        {
            id: 3,
            name: "Ô tô Toyota Vios",
            type: "car",
            image: "images/toyota-vios.jpeg",
            price: "800.000 VND/ngày",
            details: "Sedan 4 chỗ, tiết kiệm nhiên liệu, phù hợp cho gia đình nhỏ.",
            features: ["Bảo hiểm xe", "Hỗ trợ sửa chữa 24/7", "Giao nhận tận nơi", "GPS"]
        },
        {
            id: 4,
            name: "Ô tô Toyota Innova",
            type: "car",
            image: "images/toyota-innova.jpeg",
            price: "1.000.000 VND/ngày",
            details: "MPV 7 chỗ, rộng rãi, phù hợp cho gia đình lớn hoặc nhóm bạn.",
            features: ["Bảo hiểm xe", "Hỗ trợ sửa chữa 24/7", "Giao nhận tận nơi", "GPS"]
        },
        {
            id: 5,
            name: "Xe đạp thể thao Giant",
            type: "bicycle",
            image: "images/giant-bike.jpeg",
            price: "100.000 VND/ngày",
            details: "Xe đạp thể thao cao cấp, nhẹ, phù hợp cho việc khám phá thành phố.",
            features: ["Mũ bảo hiểm", "Khóa chống trộm", "Giao nhận tận nơi", "Bơm xe"]
        },
        {
            id: 6,
            name: "Thuyền kayak đôi",
            type: "boat",
            image: "images/kayak.jpeg",
            price: "300.000 VND/ngày",
            details: "Thuyền kayak 2 chỗ, ổn định, phù hợp cho việc khám phá vịnh và các đảo gần bờ.",
            features: ["Áo phao", "Mái chèo", "Hướng dẫn sử dụng", "Hỗ trợ vận chuyển"]
        }
    ];

    // Load tours
    function loadTours(filter = 'all') {
        const container = document.getElementById('tours-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        const filteredTours = filter === 'all' 
            ? tours 
            : tours.filter(tour => tour.type === filter);
        
        filteredTours.forEach(tour => {
            const tourElement = document.createElement('div');
            tourElement.className = 'tour-item';
            
            // Generate highlights HTML
            let highlightsHTML = '';
            tour.highlights.forEach(highlight => {
                highlightsHTML += `<li><i class="fas fa-check-circle"></i> ${highlight}</li>`;
            });
            
            // Generate rating stars
            let ratingHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= Math.floor(tour.rating)) {
                    ratingHTML += '<i class="fas fa-star"></i>';
                } else if (i - 0.5 <= tour.rating) {
                    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    ratingHTML += '<i class="far fa-star"></i>';
                }
            }
            
            tourElement.innerHTML = `
                <div class="tour-image">
                    <img src="${tour.image}" alt="${tour.name}">
                    <div class="tour-badge ${tour.type}">${getTourTypeLabel(tour.type)}</div>
                </div>
                <div class="tour-info">
                    <h3>${tour.name}</h3>
                    <div class="tour-meta">
                        <span><i class="far fa-clock"></i> ${tour.duration}</span>
                        <span><i class="fas fa-tag"></i> ${tour.price}</span>
                    </div>
                    <div class="tour-rating">
                        ${ratingHTML}
                        <span>${tour.rating}</span>
                    </div>
                    <p>${tour.description}</p>
                    <div class="tour-highlights">
                        <h4>Điểm nổi bật:</h4>
                        <ul>${highlightsHTML}</ul>
                    </div>
                    <button class="btn book-tour" onclick="bookTour(${tour.id})">Đặt tour</button>
                </div>
            `;
            
            container.appendChild(tourElement);
        });
    }

    // Load vehicles
    function loadVehicles(filter = 'all') {
        const container = document.getElementById('vehicles-container');
        if (!container) return;
        
        container.innerHTML = '';
        
        const filteredVehicles = filter === 'all' 
            ? vehicles 
            : vehicles.filter(vehicle => vehicle.type === filter);
        
        filteredVehicles.forEach(vehicle => {
            const vehicleElement = document.createElement('div');
            vehicleElement.className = 'vehicle-item';
            
            // Generate features HTML
            let featuresHTML = '';
            vehicle.features.forEach(feature => {
                featuresHTML += `<li><i class="fas fa-check"></i> ${feature}</li>`;
            });
            
            vehicleElement.innerHTML = `
                <div class="vehicle-image">
                    <img src="${vehicle.image}" alt="${vehicle.name}">
                    <div class="vehicle-badge ${vehicle.type}">${getVehicleTypeLabel(vehicle.type)}</div>
                </div>
                <div class="vehicle-info">
                    <h3>${vehicle.name}</h3>
                    <p class="vehicle-price"><i class="fas fa-tag"></i> ${vehicle.price}</p>
                    <p>${vehicle.details}</p>
                    <div class="vehicle-features">
                        <h4>Tính năng:</h4>
                        <ul>${featuresHTML}</ul>
                    </div>
                    <button class="btn rent-vehicle" onclick="rentVehicle(${vehicle.id})">Thuê ngay</button>
                </div>
            `;
            
            container.appendChild(vehicleElement);
        });
    }

    // Helper function to get tour type label
    function getTourTypeLabel(type) {
        switch(type) {
            case 'island':
                return 'Tour đảo';
            case 'city':
                return 'Tour thành phố';
            case 'adventure':
                return 'Tour mạo hiểm';
            case 'entertainment':
                return 'Giải trí';
            case 'luxury':
                return 'Cao cấp';
            default:
                return type;
        }
    }

    // Helper function to get vehicle type label
    function getVehicleTypeLabel(type) {
        switch(type) {
            case 'motorbike':
                return 'Xe máy';
            case 'car':
                return 'Ô tô';
            case 'bicycle':
                return 'Xe đạp';
            case 'boat':
                return 'Thuyền';
            default:
                return type;
        }
    }

    // Filter tours
    const tourFilter = document.getElementById('tour-filter');
    if (tourFilter) {
        tourFilter.addEventListener('change', function() {
            loadTours(this.value);
        });
    }

    // Filter vehicles
    const vehicleFilter = document.getElementById('vehicle-filter');
    if (vehicleFilter) {
        vehicleFilter.addEventListener('change', function() {
            loadVehicles(this.value);
        });
    }

    // Initialize page
    loadTours();
    loadVehicles();
    
    // Add to window object for access from HTML
    window.bookTour = bookTour;
    window.rentVehicle = rentVehicle;
});

// Book tour function
function bookTour(tourId) {
    // In a real application, this would redirect to a booking page or open a booking modal
    // For now, we'll just show an alert
    alert(`Bạn đã chọn đặt tour với ID: ${tourId}. Chúng tôi sẽ chuyển bạn đến trang đặt tour.`);
    window.location.href = `booking.html?type=tour&id=${tourId}`;
}

// Rent vehicle function
function rentVehicle(vehicleId) {
    // In a real application, this would redirect to a rental page or open a rental modal
    // For now, we'll just show an alert
    alert(`Bạn đã chọn thuê phương tiện với ID: ${vehicleId}. Chúng tôi sẽ chuyển bạn đến trang đặt xe.`);
    window.location.href = `booking.html?type=vehicle&id=${vehicleId}`;
}