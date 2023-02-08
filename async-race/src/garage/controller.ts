import View from './view';
import Model from './model';
import { CarData } from './components/interfaces';
class Controller {
    model: Model;
    view: View;
    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
        this.handleCountCars();
        this.renderPagintions();
        this.renderForms();
        this.handleBlockCars();
        this.handleRemoveCar();
    }

    // колличество аавтомобилей
    handleCountCars() {
        this.model.getDefaultCars().then(() => {
            this.view.amountCars(this.model.carData.length);
        });
    }

    renderForms() {
        this.view.createInputCreate();
        this.view.createInputChange();
    }

    renderPagintions() {
        this.view.createPagination();
    }

    // рендер блоков с авто
    handleBlockCars() {
        this.model.getDefaultCars().then(() => {
            this.model.carData.forEach((el: CarData) => this.view.createOneCar(el));
        });
    }

    // удаление одного автомобиля
    handleRemoveCar() {
        this.view.bindRemoveCar();
        //this.handleBlockCars();
    }
}
export default Controller;
