import { CarData } from './components/interfaces';
class Model {
    carData: CarData[];
    constructor() {
        this.carData = [];
    }

    async getDefaultCars() {
        try {
            const data = await fetch('http://127.0.0.1:3000/garage');
            const cars = await data.json();
            this.carData = cars;
            return cars;
        } catch (e) {
            console.log(e);
        }
    }

    async deleteCar(id: number) {
        try {
            const data = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
                method: 'DELETE',
            });
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
export default Model;
