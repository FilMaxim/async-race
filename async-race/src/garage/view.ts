import { CarData } from './components/interfaces';
class View {
    app: HTMLBodyElement | null;
    headerTitle: HTMLElement;
    carsWrapper: HTMLElement;
    formsWrapper: HTMLElement;
    pagination: HTMLElement;
    car?: HTMLElement;
    spanCountCars: HTMLElement;
    constructor() {
        this.app = document.querySelector('body');
        this.headerTitle = this.createElement('h1', ['title-main']);
        this.headerTitle.textContent = 'Garage';
        this.spanCountCars = this.createElement('span', ['count-cars']);
        this.headerTitle.append(this.spanCountCars);
        this.formsWrapper = this.createElement('div', ['wrapper-forms']);
        this.pagination = this.createElement('div', ['wrapper-pagination']);
        this.carsWrapper = this.createElement('div', ['wrapper-cars']);
        if (this.app) {
            this.app.append(this.headerTitle, this.formsWrapper, this.pagination, this.carsWrapper);
        }
    }

    createElement(tag: string, className: string[]) {
        const element = document.createElement(tag);
        if (className) element.classList.add(...className);
        return element;
    }

    //cчитать колличество автомобилей
    amountCars(count: number) {
        this.spanCountCars.textContent = ` ${count}`;
    }

    createInputChange(name = '', color = 'red') {
        const changeWrapp = this.createElement('div', ['change-wrap']);
        //const inputName: HTMLInputElement = this.createElement('input', ['input-name']);
        const inputName = document.createElement('input');
        inputName.classList.add('input-name');
        inputName.type = 'text';
        inputName.value = name;
        const inputColor = document.createElement('input');
        inputColor.classList.add('input-color');
        inputColor.type = 'color';
        inputColor.value = color;
        const inputBTN = this.createElement('button', ['btn', 'btn-secondary']);
        inputBTN.textContent = 'Change';
        changeWrapp.append(inputName, inputColor, inputBTN);
        this.formsWrapper.append(changeWrapp);
    }

    createInputCreate() {
        const changeWrapp = this.createElement('div', ['change-wrap']);
        const inputName = document.createElement('input');
        inputName.classList.add('input-name');
        inputName.type = 'text';
        inputName.placeholder = 'Enter car model';
        const inputColor = document.createElement('input');
        inputColor.classList.add('input-color');
        inputColor.type = 'color';
        inputColor.value = 'red';
        const inputBTN = this.createElement('button', ['btn', 'btn-secondary']);
        inputBTN.textContent = 'Create';
        changeWrapp.append(inputName, inputColor, inputBTN);
        this.formsWrapper.append(changeWrapp);
    }

    createPagination() {
        const pageNumbers = this.createElement('div', ['page-numbers']);
        const btnNumber1 = document.createElement('button');
        btnNumber1.classList.add('btn-number');
        btnNumber1.textContent = '<';
        const spanNumber = document.createElement('span');
        spanNumber.classList.add('page-pagination');
        spanNumber.innerHTML = ` Page: 1 of <span>22</span> `;
        const btnNumber2 = document.createElement('button');
        btnNumber2.classList.add('btn-number');
        btnNumber2.textContent = '>';
        pageNumbers.append(btnNumber1);
        pageNumbers.append(spanNumber);
        pageNumbers.append(btnNumber2);
        this.pagination.append(pageNumbers);
    }

    //создание блока одного автомобиля
    createOneCar(carData: CarData) {
        this.car = this.createElement('div', ['car']);
        this.car.id = String(carData.id);

        const carToolBar = this.createElement('div', ['car-toolbar']);
        const carChangeBtns = this.createElement('div', ['car-change-btns']);
        const btnChange = this.createElement('button', ['btn', 'btn-success']);
        btnChange.textContent = 'Change';
        btnChange.addEventListener('click', () => {
            const name = 'ggg';
            const color = 'white';
            console.log(name + '=' + color);
            this.createInputChange(name, color);
        });
        const btnRemove = this.createElement('button', ['btn', 'btn-danger']);
        btnRemove.textContent = 'Remove';
        carChangeBtns.append(btnChange);
        carChangeBtns.append(btnRemove);
        const carName = this.createElement('p', ['car__name', 'h3']);
        carName.textContent = carData.name;
        carToolBar.append(carChangeBtns);
        carToolBar.append(carName);
        const moveCar = this.createElement('div', ['move-car']);
        const moveCarStart = this.createElement('div', ['move-car__start']);
        const moveCarBtns = this.createElement('div', ['move-car__btns']);
        const moveCarBtnRight = this.createElement('div', ['btn', 'btn-dark']);
        moveCarBtnRight.textContent = 'A';
        const moveCarBtnLeft = this.createElement('div', ['btn', 'btn-warning']);
        moveCarBtnLeft.textContent = 'B';
        moveCarBtns.append(moveCarBtnRight);
        moveCarBtns.append(moveCarBtnLeft);
        const moveCarImg = this.createElement('div', ['move-car__img']);
        moveCarImg.innerHTML = `<svg class='svg-car' fill=${carData.color} viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="enable-background:new 0 0 122.88 35.03" xml:space="preserve" transform="matrix(1, 0, 0, -1, 0, 0)rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"></path> </g> </g></svg>`;
        moveCarStart.append(moveCarBtns);
        moveCarStart.append(moveCarImg);
        const moveCarFinish = this.createElement('div', ['move-car__finish']);
        const flagFinish = this.createElement('div', ['flag-finish']);
        const flagImg = document.createElement('img');
        flagImg.src = 'https://alyanoyigor.github.io/async-race/assets/svg/flag.svg';
        flagFinish.append(flagImg);
        moveCarFinish.append(flagFinish);
        moveCar.append(moveCarStart);
        moveCar.append(moveCarFinish);
        this.car.append(carToolBar);
        this.car.append(moveCar);
        this.carsWrapper.append(this.car);
    }

    // рендер всех блоков с автомобилями
    bindCreateAllCars(allCarSData: CarData[]) {
        this.carsWrapper.textContent = '';
        allCarSData.forEach((el: CarData) => this.createOneCar(el));
    }

    // клик по кнопке Remove - удаление автомобиля
    bindRemoveCar(handler: { (id: number): void; (arg0: number): void }) {
        this.carsWrapper.addEventListener('click', (event) => {
            const targ = event.target as HTMLElement;
            if (targ.classList.contains('btn-danger')) {
                const elementCar = targ.parentElement?.parentElement?.parentElement;
                if (elementCar) {
                    const id = Number(elementCar.id);
                    console.log(id, 'id');
                    handler(id);
                }
            }
        });
    }
}
export default View;
