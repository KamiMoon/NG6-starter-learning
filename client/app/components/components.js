import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Dashboard from './dashboard/dashboard';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Dashboard.name
]);

export default componentModule;
