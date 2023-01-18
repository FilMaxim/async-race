import CarsListOne from './carsListOne';
import RenderData from './renderData';
import { CarData } from '../../../interfaces/interfaces';

class CarsList extends RenderData {
    static lengthData: number;
    container: HTMLElement;
    constructor() {
        super();
        this.container = document.createElement('div');
    }

    createListCars() {
        const carWrapper = document.createElement('div');
        carWrapper.classList.add('cars-wrapper');
        this.getDefaultCars().then((cars) => {
            CarsList.lengthData = cars.length;
            console.log(CarsList.lengthData);
            cars.forEach((car: CarData) => {
                const auto = new CarsListOne(car);
                carWrapper.append(auto.render());
            });
        });
        return carWrapper;
    }

    render() {
        const listCar = this.createListCars();
        this.container.append(listCar);
        return this.container;
    }
}

export default CarsList;
