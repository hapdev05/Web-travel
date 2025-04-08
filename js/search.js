// Search functionality

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', performSearch);
        
        // Also trigger search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        
        if (searchTerm === '') {
            alert('Vui lòng nhập từ khóa tìm kiếm');
            return;
        }
        
        // In a real application, you would search through your data
        // For now, we'll just redirect to a search results page with the query
        window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
    }
});