import { User } from "../user/user.class";
import { RequestLine } from "../requestline/requestlines.class";

export class Request {
    id: number = 0;
    description: string ="";
    justification: string ="";
    rejectionReason: string = "";
    deliveryMode: string = "";
    status: string = "NEW";
    total: number = 0.00;
    requestLines!: RequestLine[];
    requests: Request[] = []

    userId: number = 0;
    user: User | null = null;
    userName!: string;
}