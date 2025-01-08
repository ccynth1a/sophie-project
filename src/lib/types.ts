import type { Timestamp } from "firebase/firestore";

export type Sale = {
    gender: string;
    age: number;
    total_spent: number;
    items_bought: number;
    purchase_date: Timestamp;
    location: string;
    payment_method: string
}
