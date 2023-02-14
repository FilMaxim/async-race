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
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    //создать новый автомобиль
    async createCar(createObj: { name: string | undefined; color: string | undefined }) {
        try {
            const data = await fetch(`http://127.0.0.1:3000/garage/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(createObj),
            });
            return data;
        } catch (e) {
            console.log(e);
        }
    }
}
export default Model;
