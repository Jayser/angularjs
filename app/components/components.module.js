import angular from 'angular';
import { TestModule } from './test/test.module';
import { HomeModule } from './home/home.module';

export const ComponentsModule = angular
    .module('app.components', [
        TestModule,
        HomeModule
    ])
    .name;