"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsTypeormRepository = void 0;
const typeorm_1 = require("typeorm");
const app_error_1 = require("../../../../common/domain/errors/app-error");
class CarsTypeormRepository {
    carsRepository;
    constructor(carsRepository) {
        this.carsRepository = carsRepository;
    }
    async findByLicensePlate(licensePlate) {
        return await this.carsRepository.findOne({
            where: { licensePlate, status: (0, typeorm_1.In)(['ativo', 'inativo']) },
        });
    }
    async findAllAndFilter(params) {
        const { orderBy, page, per_page, model, brand, licensePlateFinalDigits, mileage, untilYear, fromYear, minPrice, maxPrice, items, status, } = params;
        const options = {};
        if (items) {
            const itemsToFind = [...items];
            options.items = { name: (0, typeorm_1.In)(itemsToFind) };
        }
        if (model)
            options.model = model;
        if (brand)
            options.brand = brand;
        if (untilYear && fromYear)
            options.year = (0, typeorm_1.Between)(fromYear, untilYear);
        else if (untilYear)
            options.year = (0, typeorm_1.LessThanOrEqual)(untilYear);
        else if (fromYear)
            options.year = (0, typeorm_1.MoreThanOrEqual)(fromYear);
        if (minPrice && maxPrice)
            options.price = (0, typeorm_1.Between)(minPrice, maxPrice);
        else if (minPrice)
            options.price = (0, typeorm_1.MoreThanOrEqual)(minPrice);
        else if (maxPrice)
            options.price = (0, typeorm_1.LessThanOrEqual)(maxPrice);
        if (licensePlateFinalDigits)
            options.licensePlate = (0, typeorm_1.Like)(`%${licensePlateFinalDigits}`);
        if (mileage)
            options.mileage = (0, typeorm_1.LessThanOrEqual)(mileage);
        options.status = status ? (0, typeorm_1.In)([status]) : (0, typeorm_1.In)(['ativo', 'inativo']);
        let take = 0;
        let skip = 0;
        take = per_page ? per_page : 10;
        skip = page ? (page - 1) * take : 0;
        const order = {};
        if (orderBy)
            orderBy.forEach((criteria) => {
                order[`${criteria}`] = 'ASC';
            });
        const [data, count] = await this.carsRepository.findAndCount({
            order,
            where: { ...options },
            relations: ['items'],
            skip,
            take,
        });
        if (data.length === 0)
            throw new app_error_1.AppError("Car don't exist", 404);
        let filteredCount = 0;
        const ids = data.map((car) => {
            if (items) {
                if (car.items.length === items.length) {
                    filteredCount++;
                    return car.id;
                }
            }
            filteredCount++;
            return car.id;
        });
        console.log(ids);
        const cars = await this.carsRepository.find({
            where: { id: (0, typeorm_1.In)(ids) },
            relations: ['items'],
            order,
        });
        return {
            per_page: take,
            page: page ? page : 1,
            count: filteredCount,
            data: cars,
        };
    }
    create(props) {
        return this.carsRepository.create(props);
    }
    async insert(model) {
        return await this.carsRepository.save(model);
    }
    async findById(id) {
        return await this.carsRepository.findOne({
            where: { id: id },
            relations: { items: true },
        });
    }
    async update(model) {
        return await this.carsRepository.save(model);
    }
    async delete(model) {
        return await this.carsRepository.save(model);
    }
}
exports.CarsTypeormRepository = CarsTypeormRepository;
//# sourceMappingURL=cars-typeorm.repository.js.map