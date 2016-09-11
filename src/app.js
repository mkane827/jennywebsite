import 'babel-polyfill';
import angular from 'angular';
import 'angular-ui-router';
import './style.css';

const app = angular.module('app', ['ui.router']);

export default app;
