export interface Product{
    id: number; 
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    images: string[];
    link: string;
}

// export interface Product {
//   id: number;           уникальный ID
//   name: string;         название товара
//   description: string;  описание 2-3 предложения
//   price: number;        цена в KZT
//   rating: number;       рейтинг 1-5 (например 4.7)
//   image: string;        главная картинка
//   images: string[];     галерея (минимум 3)
//   link: string;         ссылка на kaspi.kz
// }
