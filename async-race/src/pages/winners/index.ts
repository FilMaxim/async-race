import Page from '../../core/templtes/page';
class Winners extends Page {
    static TextObject = {
        Winner: 'Winner',
    };
    constructor(id: string) {
        super(id);
    }

    render() {
        const title = this.createHeaderTitle(Winners.TextObject.Winner);
        this.container.append(title);
        return this.container;
    }
}

export default Winners;
