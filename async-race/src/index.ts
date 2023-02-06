import './global.css';
import View from './garage/view';
import Model from './garage/model';
import Controller from './garage/controller';
new Controller(new Model(), new View());
