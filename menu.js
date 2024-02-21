function toggleMenu() {
    var menuToggle = document.getElementById("check");
    var navLinks = document.querySelector("ul");
    
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
    
    // Toggle the active class on the clicked menu item
    var menuItems = document.querySelectorAll("ul li a");
    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // Remove the active class from all menu items
            menuItems.forEach(function(item) {
                item.classList.remove("active");
            });
            // Add the active class to the clicked menu item
            item.classList.add("active");
            
            // Close the menu
            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
}
