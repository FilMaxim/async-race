import { GARAGE_URL } from '../../../urls';
import { CarData } from '../../../interfaces/interfaces';
class RenderData {
    static carsData: CarData[] = [];
    static page = 1;
    static allPage = 0;

    static setCarsData = async (array: CarData[]) => {
        RenderData.carsData = [];
        RenderData.carsData.push(...array);
        document.getElementsByTagName('h1')[0].innerHTML = `Garage (${RenderData.carsData.length})`;
        console.log(RenderData.carsData.length);
        RenderData.allPage = Math.ceil(RenderData.carsData.length / 7);
        const allPage1 = document.querySelector('.page-pagination span');
        if (allPage1) allPage1.innerHTML = `${Math.ceil(RenderData.carsData.length / 7)}`;
    };

    async getDefaultCarsPage() {
        try {
            const data = await fetch(`${GARAGE_URL}?_page=${RenderData.page}&_limit=7`);
            const cars = await data.json();
            return cars;
        } catch (e) {
            console.log(e);
        }
    }

    async getDefaultCars() {
        try {
            const data = await fetch(GARAGE_URL);
            const cars = await data.json();
            RenderData.setCarsData(cars);
            console.log(RenderData.carsData.length);
            return cars;
        } catch (e) {
            console.log(e);
        }
    }

    async removeCar(carId: number) {
        try {
            await fetch(GARAGE_URL + carId, {
                method: 'DELETE',
            });
            await this.getDefaultCars();
        } catch (e) {
            console.log(e);
        }
    }
}

export default RenderData;
