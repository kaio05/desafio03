import { CarModel } from '@/cars/domain/models/cars.model';
import { CarsRepository, CreateCarProps, findParams, findResults } from '@/cars/domain/repositories/cars.repository';
import { Repository } from 'typeorm';
import { Car } from '../entities/cars.entity';
export declare class CarsTypeormRepository implements CarsRepository {
    private carsRepository;
    constructor(carsRepository: Repository<Car>);
    findByLicensePlate(licensePlate: string): Promise<CarModel>;
    findAllAndFilter(params: findParams): Promise<findResults>;
    create(props: CreateCarProps): CarModel;
    insert(model: CarModel): Promise<CarModel>;
    findById(id: string): Promise<CarModel>;
    update(model: CarModel): Promise<CarModel>;
    delete(model: CarModel): Promise<CarModel>;
}
