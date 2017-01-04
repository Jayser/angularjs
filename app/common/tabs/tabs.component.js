import template from './tabs.jade';

export default {
    template: template(),
    bindings: {
        selected: '@'
    },
    transclude: true,
    controller: class Tabs {
        $onInit() {
            this.tabs = [];
        }

        addTab(tab) {
            this.tabs.push(tab);
        }

        selectTab(idx) {
            this.tabs.forEach(tab => {
                tab.selected = false;
            });
            this.tabs[idx].selected = true;
        }

        $postLink() {
            this.selectTab(this.selected);
        }
    }
};