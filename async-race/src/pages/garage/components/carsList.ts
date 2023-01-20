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
        this.getDefaultCars();
        this.getDefaultCarsPage().then((cars) => {
            cars.forEach((car: CarData) => {
                console.log(car);
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
