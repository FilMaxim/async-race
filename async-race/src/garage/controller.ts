import View from './view';
import Model from './model';
class Controller {
    model: Model;
    view: View;
    constructor(model: Model, view: View) {
        this.model = model;
        this.view = view;
        this.handleCountCars();
        //this.renderPagintions();
        this.renderForms();
        this.handleBlockCars();
        this.view.bindRemoveCar(this.handleRemoveCar);
        this.handleUpdateCar();
        this.handleCreateCar();
        this.handlerCreate100cars();

        this.view.bindStartResetCar(this.model.engineStartStop);
    }

    // колличество автомобилей
    handleCountCars() {
        this.model.getDefaultCarsCount().then((data) => {
            if (this.view.pageCurrent > this.model.countPages) {
                this.view.pageCurrent = this.model.countPages;
                this.handleBlockCars();
            }
            this.view.amountCars(data.length);
            this.view.createPagination(this.model.countPages, this.handleBlockCars);
        });
    }

    renderForms() {
        this.view.createInputCreate();
        this.view.createInputUpdate();
        this.view.createRaceResetGenerateBTN();
    }

    // пагинация
    renderPagintions = () => {
        this.model.getDefaultCarsCount().then((data) => {
            return this.view.createPagination(data.length, this.handleBlockCars);
        });
    };

    // рендер блоков с авто
    handleBlockCars = () => {
        this.model.getDefaultCars(this.view.pageCurrent).then(() => {
            this.view.bindCreateAllCars(this.model.carData);
            this.model.carData;
        });
    };

    // удаление одного автомобиля
    handleRemoveCar = (id: number) => {
        this.model.deleteCar(id).then(() => {
            this.handleCountCars();
            this.handleBlockCars();
        });
    };

    // Изменение одного автомобиля
    handleUpdateCar = () => {
        this.model.getDefaultCars(this.view.pageCurrent).then((data) => {
            this.view.bindUpdateCar(data, this.model.updateCar, this.handleBlockCars.bind(this));
        });
    };

    // Создание одного автомобиля
    handleCreateCar = () => {
        this.view.bindCreateCar(this.model.createCar, this.handleBlockCars.bind(this), this.handleCountCars.bind(this));
    };

    // Cоздание 100 случайных авто
    handlerCreate100cars = () => {
        this.view.bindGenerateCars(
            this.model.create100Cars,
            this.handleBlockCars.bind(this),
            this.handleCountCars.bind(this)
        );
    };
}

export default Controller;
