export interface ICategory {
  id: string;
  title: string;
}
export interface IPost {
  id: string;
  title: string;
  content: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
  category: ICategory;
}

export interface IDirectory {
  id: string
  two_letter_abbreviation: string
  full_name_locale: string
}
// export interface IProducts {
//   items:[
//     {
//       id: string
//       sku: string
//       name: string
//       price: number
//       status: number
//     }
//   ]
//   total_count: number
// }

export interface IProducts {
  id: string
  sku: string
  name: string
  price: number
  status: number
  created_at: string
  updated_at: string
  
}

export interface IDirectoryProduct {
  items: [IProducts]
  total_count: number
}

export interface IProductsFilterVariables {
  q?: string
  created_at: string
}