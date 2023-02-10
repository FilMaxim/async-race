import View from './view';
import Model from './model';
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
        this.view.bindRemoveCar(this.handleRemoveCar); //неработает
        //this.view.bindRemoveCar(this.model.deleteCar); //работает
    }

    // удаление одного автомобиля
    handleRemoveCar = (id: number) => {
        console.log(this);
        this.model.deleteCar(id);
        this.handleCountCars();
        this.handleBlockCars();
    };
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
            this.view.bindCreateAllCars(this.model.carData);
        });
    }
}
export default Controller;
