import { GARAGE_URL } from '../../../urls';

class RenderData {
    async getDefaultCars() {
        try {
            const data = await fetch(GARAGE_URL);
            const cars = await data.json();
            console.log(cars);
            return cars;
        } catch (e) {
            console.log(e);
        }
    }
}

export default RenderData;
