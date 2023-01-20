import RenderData from './renderData';
import App from '../../../app';

class Paginations extends RenderData {
    container: HTMLElement;
    constructor() {
        super();
        this.container = document.createElement('div');
    }

    createPagination() {
        const pageNumbers = document.createElement('div');
        pageNumbers.classList.add('page-numbers');
        const btnNumber1 = document.createElement('button');
        btnNumber1.classList.add('btn-number');
        btnNumber1.innerHTML = '<';
        btnNumber1.addEventListener('click', () => {
            if (RenderData.page > 1) {
                RenderData.page -= 1;
                spanNumber.innerHTML = ` Page: ${RenderData.page} of ${RenderData.allPage} `;
                this.getDefaultCarsPage();
                App.renderNewPage('garage');
            }
        });
        const spanNumber = document.createElement('span');
        spanNumber.classList.add('page-pagination');
        spanNumber.innerHTML = ` Page: ${RenderData.page} of <span>${RenderData.allPage}</span> `;
        const btnNumber2 = document.createElement('button');
        btnNumber2.classList.add('btn-number');
        btnNumber2.innerHTML = '>';
        btnNumber2.addEventListener('click', () => {
            console.log(RenderData.allPage);
            if (RenderData.page < RenderData.allPage) {
                RenderData.page += 1;
                spanNumber.innerHTML = ` Page: ${RenderData.page} of ${RenderData.allPage} `;
                this.getDefaultCarsPage();
                App.renderNewPage('garage');
            }
        });
        pageNumbers.append(btnNumber1);
        pageNumbers.append(spanNumber);
        pageNumbers.append(btnNumber2);
        return pageNumbers;
    }

    render() {
        const paginations = this.createPagination();
        this.container.append(paginations);
        return this.container;
    }
}
export default Paginations;
