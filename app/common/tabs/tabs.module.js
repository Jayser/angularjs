import TabComponent from './tab/tab.component';
import TabsComponent from './tabs.component';
import './tabs.scss';

export default angular
    .module('app.common.tabs', [])
    .component('tab', TabComponent)
    .component('tabs', TabsComponent)
    .name;