import template from './tab.jade';

export default {
    template: template(),
    bindings: {
        label: '@'
    },
    require: {
        tabs: '^^tabs'
    },
    transclude: true,
    controller: class Tab {
        $onInit() {
            this.tab = {
                label: this.label,
                selected: false
            };
            this.tabs.addTab(this.tab);
        }
    }
};