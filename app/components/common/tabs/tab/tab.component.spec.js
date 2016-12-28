import Tab from './tab.component';

describe('Tab', () => {
    const sut = new Tab.controller();

    sut.tabs = jasmine.createSpyObj('tabs', ['addTab']);
    sut.label = 'someLabel';

    it('should be initialized', () => {
        sut.$onInit();

        const result = {
            label: 'someLabel',
            selected: false
        };

       expect(sut.tab).toEqual(result);
    });
});