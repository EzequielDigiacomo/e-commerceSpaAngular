export interface Producto {
    id:             string;
    name:           string;
    description:    string;
    category:       string[];
    imageUrl:       string[];
    precio_venta:   number;
    precio_regular: number;
    create_date:    Date;
    slug?:           string;
    update?:         Date
}