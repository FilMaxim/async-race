import './style.css';
import Page from '../../core/templtes/page';
import CarsList from './components/carsList';
import RenderData from './components/renderData';
import Paginations from './components/paginations';
class Garage extends Page {
    static long: number = RenderData.carsData.length;
    static TextObject = {
        Garage: 'Garage',
    };
    cars: CarsList;
    paginations: Paginations;
    constructor(id: string) {
        super(id);
        this.cars = new CarsList();
        this.paginations = new Paginations();
    }

    static renderLongData() {
        const span = document.createElement('span');
        span.innerHTML = String(RenderData.carsData.length);
    }

    render() {
        const title = this.createHeaderTitle(Garage.TextObject.Garage);
        this.container.append(title);
        this.container.append(this.paginations.render());
        this.container.append(this.cars.render());
        console.log('render');
        return this.container;
    }
}

export default Garage;
