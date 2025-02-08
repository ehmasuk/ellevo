export type District = {
    district: string;
    districtbn: string;
};

export type CheckoutFormTypes = {
    name?: string;
    email?: string;
    mobile?: number;
    division?: string;
    district?: string;
    addrsss?: string;
    color?: string;
    size?: string;
    quantity?: number;
};

export type Order = {
    _id: string;
    name: string;
    mobile: number;
    division: string;
    district: string;
    upozilla: string;
    address: string;
    email?: string;
    size: string;
    color: string;
    quantity: number;
    totalPrice: number;
    createdAt?: string;
    updatedAt?: string;
    status: string;
};
