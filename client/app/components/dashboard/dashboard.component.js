import template from './dashboard.html';
import DashboardController from './dashboard.controller';
import './dashboard.css';

let dashboardComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller: DashboardController,
  controllerAs: 'vm'
};

export default dashboardComponent;