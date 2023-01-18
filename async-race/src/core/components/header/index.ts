import Component from '../../templtes/components';
import { PageIds } from '../../../app/index';

const Buttons = [
    {
        id: PageIds.Garage,
        text: 'Garage',
    },
    {
        id: PageIds.Winners,
        text: 'Winners',
    },
];

class Header extends Component {
    constructor(tagName: string, className: string) {
        super(tagName, className);
    }

    renderPageButtons() {
        const pageButtons = document.createElement('div');
        Buttons.forEach((button) => {
            const btn = document.createElement('button');
            btn.classList.add('btn-header');
            btn.addEventListener('click', () => {
                window.location.href = `#${button.id}`;
            });
            const buttonHTML = document.createElement('a');
            buttonHTML.innerText = button.text;
            btn.append(buttonHTML);
            pageButtons.append(btn);
        });
        this.container.append(pageButtons);
    }

    render() {
        this.renderPageButtons();
        return this.container;
    }
}

export default Header;
