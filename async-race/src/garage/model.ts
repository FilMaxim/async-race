import { CarData } from './components/interfaces';
class Model {
    carData: CarData[];
    constructor() {
        this.carData = [];
    }

    //получить автомобили
    async getDefaultCars() {
        try {
            const data = await fetch('http://127.0.0.1:3000/garage');
            const cars = await data.json();
            this.carData = cars;
            console.log(this);
            return cars;
        } catch (e) {
            console.log(e);
        }
    }

    //удалить автомобиль
    async deleteCar(id: number) {
        try {
            const data = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
                method: 'DELETE',
            });
            await this.getDefaultCars();
            console.log(this.carData);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    //изменить автомобиль
    async updateCar(id: number, updateObj: { name: string | undefined; color: string | undefined }) {
        try {
            const data = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateObj),
            });
            await this.getDefaultCars();
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
export default Model;
