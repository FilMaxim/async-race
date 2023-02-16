import { CarData } from './components/interfaces';
class Model {
    autos: string[] = [
        'Audi',
        'BMW',
        'Ford',
        'Honda',
        'Hyundai',
        'Kia',
        'Tesla',
        'Mazda',
        'Buick',
        'Cadillac',
        'Chevrolet',
        'Chrysler',
        'Dodge',
        'Ford',
    ];
    models: string[] = [
        'S-TYPE',
        'R5',
        'T2',
        'B1',
        'E-TRON',
        'ILX',
        'INTEGRA',
        'LEGEND',
        'MDX',
        'NSX',
        'V12 VANTAGE',
        'VANQUISH',
        'VIRAGE',
    ];

    carData: CarData[];
    limit: number;
    countPages: number;

    constructor() {
        this.carData = [];
        this.limit = 7;
        this.countPages = 1;
    }

    //рамдомное число
    private getRandomNumber(max: number) {
        const ramdom = Math.floor(Math.random() * max);
        return ramdom;
    }

    private getRandomColor() {
        const ramdomColor = '#' + parseInt(String(Math.random() * 0xffffff)).toString(16);
        return ramdomColor;
    }

    // рендер случайного авто
    private getRamdomCarsModels() {
        const autosRamdom = this.autos[this.getRandomNumber(this.autos.length)];
        const modelsRamdom = this.models[this.getRandomNumber(this.models.length)];
        const nameRamdomCar = `${autosRamdom} ${modelsRamdom}`;
        const newCar = {
            name: nameRamdomCar,
            color: this.getRandomColor(),
        };
        return newCar;
    }

    //получить автомобили
    async getDefaultCarsCount() {
        try {
            const data = await fetch('http://127.0.0.1:3000/garage');
            const cars = await data.json();
            this.countPages = await Math.ceil(cars.length / this.limit);
            return cars;
        } catch (e) {
            console.log(e);
        }
    }

    //получить автомобили
    async getDefaultCars(page: number) {
        try {
            const garage = 'http://127.0.0.1:3000/garage';
            const data = await fetch(`${garage}?_limit=${this.limit}&_page=${page}`);
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

    //создать 100 новых авто
    create100Cars = async () => {
        try {
            const datacars = this.getRamdomCarsModels.call(this);
            const data = await fetch(`http://127.0.0.1:3000/garage/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(datacars),
            });
            return data;
        } catch (e) {
            console.log(e);
        }
    };

    //Запуск-остановка двигателя
    engineStartStop = async (id: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=started`, {
                method: 'PATCH',
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                await this.switchEngineDrive(id);

                return data;
            }
        } catch (e) {
            console.log(e);
        }
    };

    //двигатель автомобиля в режим движения
    switchEngineDrive = async (id: number) => {
        try {
            const response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`, {
                method: 'PATCH',
            });
            console.log(response);
            if (response.ok) {
                const data = await response.json();
                console.log(data);

                return data;
            }
        } catch (e) {
            console.log(e);
        }
    };
}
export default Model;
