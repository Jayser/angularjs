import templateUrl from './home.jade';

export const HomeComponent = {
    template: templateUrl(),
    controller: class HomeComponent {
        constructor($log) {
            this.$log = $log;
        }
        $onInit() {
            this.$log('Home => ng init');
        }
    }
};