export interface Product {
  id: number
  name: string
  description: {
    String: string
    Valid: boolean
  }
  price: number
  quantity: number
  created_at: {
    Time: string
    Valid: boolean
  }
  image_url: {
    String: string
    Valid: boolean
  }
}

export interface ProductResponse {
  items: Product[]
  total: number
}
