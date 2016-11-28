import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import routers from './routers';
import './app.scss';

export const AppModule = angular
    .module('app', [
        uiRouter,
        CommonModule,
        ComponentsModule
    ])
    .component('app', AppComponent)
    .config(routers)
    .name;