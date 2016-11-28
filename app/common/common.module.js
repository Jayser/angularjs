import angular from 'angular';
import { TestModule } from './test2/test2.module';

export const CommonModule = angular
    .module('app.common', [
        TestModule
    ])
    .name;