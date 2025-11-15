// Global state management
const AppState = {
products: [],
cart: [],
favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
isLoggedIn: false,
currentUser: null,
currentFilter: 'all',
currentSort: 'featured',
currentView: 'grid',
searchQuery: '',
productsLoaded: 0,
productsPerPage: 12
};
// Sample product data
const sampleProducts = [
{
id: 1,
title: "Серебряное кольцо с гранатом",
price: 2500,
category: "jewelry",
image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop",
rating: 4.8,
reviews: 24,
seller: {
name: "Мастер Анна",
avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0ad?w=100&h=100&fit=crop&crop=face",
location: "Москва, Россия"
},
description: "Уникальное серебряное кольцо с натуральным гранатом. Ручная работа с использованием традиционных техник ювелирного искусства."
},
{
id: 2,
title: "Керамическая ваза",
price: 1800,
category: "decor",
image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop",
rating: 4.9,
reviews: 18,
seller: {
name: "Гончарная мастерская",
avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
location: "Санкт-Петербург, Россия"
},
description: "Ручная керамическая ваза с уникальной глазурью. Идеальна для интерьера в стиле минимализм или бохо."
},
{
id: 3,
title: "Золотые серьги-пусеты",
price: 4200,
category: "jewelry",
image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop",
rating: 4.7,
reviews: 32,
seller: {
name: "Ювелирная мастерская Злато",
avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
location: "Екатеринбург, Россия"
},
description: "Элегантные золотые серьги-пусеты с минималистичным дизайном. Подходят для ежедневной носки и особых случаев."
},
{
id: 4,
title: "Вязаный плед",
price: 3500,
category: "decor",
image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop",
rating: 4.6,
reviews: 15,
seller: {
name: "Теплые руки",
avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
location: "Новосибирск, Россия"
},
description: "Мягкий вязаный плед из натуральной шерсти. Создает уютную атмосферу в любом интерьере."
},
{
id: 5,
title: "Кожаный браслет",
price: 1200,
category: "accessories",
image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop",
rating: 4.5,
reviews: 41,
seller: {
name: "Кожевенная мастерская",
avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
location: "Казань, Россия"
},
description: "Ручной кожаный браслет с латунной фурнитурой. Стильный аксессуар для мужчин и женщин."
},
{
id: 6,
title: "Акварельная картина",
price: 2800,
category: "art",
image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop",
rating: 4.9,
reviews: 7,