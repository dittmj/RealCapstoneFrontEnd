import { Product } from "src/app/product/product.class";
import { Request } from "src/app/request/request.class";

export class RequestLine{
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    quantity: number = 0;
    requests: Request[] = []

    request: Request | null = null;
    product: Product | null = null;


}