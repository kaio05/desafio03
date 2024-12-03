import { CarModel } from '@/cars/domain/models/cars.model';
import { ItemModel } from '@/cars/domain/models/items.model';
export declare class Item implements ItemModel {
    id: string;
    name: string;
    car: CarModel;
}
