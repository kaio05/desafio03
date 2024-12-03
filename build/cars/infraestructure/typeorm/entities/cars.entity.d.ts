import { CarModel } from '@/cars/domain/models/cars.model';
import { ItemModel } from '@/cars/domain/models/items.model';
export declare class Car implements CarModel {
    id: string;
    licensePlate: string;
    brand: string;
    model: string;
    mileage?: number;
    year: number;
    price: number;
    registrationDate: Date;
    status: 'ativo' | 'inativo' | 'excluído';
    items: ItemModel[];
}
