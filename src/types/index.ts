export interface Root {
    id: number;
    brand: string;
    name: string;
    price: string;
    price_sign: string;
    currency: string;
    image_link: string;
    product_link: string;
    website_link: string;
    description: string;
    rating: number | null;
    category: string;
    product_type: string;
    tag_list: string[];
    created_at: string;
    updated_at: string;
    product_api_url: string;
    api_featured_image: string;
    product_colors: string[];
    quantity: number;
  }
  

  export interface CurrencyState {
    selected: string; 
}

export interface CartState {
    products: Root[]; 
}

export interface LikeState {
    likedProducts: number[]; 
}

export interface RootState {
    currency: CurrencyState; 
    cart: CartState; 
    like: LikeState; 
}