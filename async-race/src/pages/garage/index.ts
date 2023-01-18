import Page from '../../core/templtes/page';
import { GARAGE_URL } from '../../urls';
class Garage extends Page {
    static TextObject = {
        Garage: 'Garage',
    };
    constructor(id: string) {
        super(id);
    }

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

    render() {
        const title = this.createHeaderTitle(Garage.TextObject.Garage);
        this.container.append(title);
        this.getDefaultCars();
        return this.container;
    }
}

export default Garage;
