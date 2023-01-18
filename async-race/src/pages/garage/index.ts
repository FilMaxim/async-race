import './style.css';
import Page from '../../core/templtes/page';
import CarsList from './components/carsList';
class Garage extends Page {
    static TextObject = {
        Garage: 'Garage',
    };
    cars: CarsList;
    constructor(id: string) {
        super(id);
        this.cars = new CarsList();
    }

    render() {
        const title = this.createHeaderTitle(Garage.TextObject.Garage + CarsList.lengthData);
        this.container.append(title);
        this.container.append(this.cars.render());
        return this.container;
    }
}

export default Garage;
