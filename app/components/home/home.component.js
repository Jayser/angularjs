import templateUrl from './home.jade';

export const HomeComponent = {
    template: templateUrl(),
    controller: class HomeComponent {
        constructor() {
        }
        $onInit() {
            console.log('Home => ng init');
        }
    }
};