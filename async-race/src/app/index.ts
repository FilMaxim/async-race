import Page from '../core/templtes/page';
import Garage from '../pages/garage/index';
import Winner from '../pages/winners/index';
import Header from '../core/components/header';

export const enum PageIds {
    Garage = 'garage',
    Winners = 'winners',
}

class App {
    private static container: HTMLElement = document.body;
    private static defaultPageId = 'current-page';
    private initialPage: Garage;
    private header: Header;

    static renderNewPage(idPage: string) {
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
        if (currentPageHTML) {
            currentPageHTML.remove();
        }
        let page: Page | null = null;
        if (idPage === PageIds.Garage) {
            page = new Garage(idPage);
        } else if (idPage === PageIds.Winners) {
            page = new Winner(idPage);
        }
        if (page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.renderNewPage(hash);
        });
    }

    constructor() {
        this.initialPage = new Garage('garage');
        this.header = new Header('header', 'header');
    }

    run() {
        App.container.append(this.header.render());
        App.renderNewPage('garage');
        this.enableRouteChange();
    }
}

export default App;
