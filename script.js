
// Menü öğeleri listesi
const menu = [
    { id: 1, name: "Lazanya", category: "Ana Yemekler", price: 45 },
    { id: 2, name: "Tiramisu", category: "Tatlılar", price: 25 },
    { id: 3, name: "Pizza", category: "Ana Yemekler", price: 55 },
    { id: 4, name: "Çay", category: "İçecekler", price: 10 },
    { id: 5, name: "Kola", category: "İçecekler", price: 15 },
    { id: 6, name: "Baklava", category: "Tatlılar", price: 30 },
    { id: 7, name: "Hamburger", category: "Ana Yemekler", price: 40 }
];

// Menü öğelerini görüntüleme fonksiyonu
function displayMenu(items) {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = ""; // Önce mevcut içeriği temizle

    items.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Kategori: ${item.category}</p>
        <p>Fiyat: ${item.price} TL</p>
      `;
        menuContainer.appendChild(menuItem);
    });
}

// Filtreleme fonksiyonu
function filterMenu(category) {
    if (category === "Hepsi") {
        displayMenu(menu);
    } else {
        const filteredItems = menu.filter(item => item.category === category);
        displayMenu(filteredItems);
    }
}

// Sayfa yüklendiğinde tüm menüyü göster
window.onload = () => {
    displayMenu(menu);
};
