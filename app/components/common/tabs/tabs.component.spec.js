import Tabs from './tabs.component';

describe('Tabs', () => {
    const sut = new Tabs.controller();
    const SECOND_TAB_INDEX = 1;

    it('should be initialized', () => {
        sut.$onInit();

        expect(sut.tabs).toEqual([]);
    });

    it('should be able add tab', () => {
        const tab = {
            label: 'someLabel',
            selected: false
        };

        sut.addTab(tab);

        expect(sut.tabs.pop()).toEqual(tab);
    });

    beforeEach(() => {
        sut.tabs = [
            {
                label: 'someLabel-1',
                selected: true
            },
            {
                label: 'someLabel-2',
                selected: false
            }
        ];
    });

    it('should be change selected tab', () => {
        sut.selectTab(SECOND_TAB_INDEX);

        expect(sut.tabs.pop().selected).toBe(true);
        expect(sut.tabs.pop().selected).toBe(false);
    });

    it('should be set selected tab at the init', () => {
        spyOn(sut, 'selectTab');

        sut.$postLink();

        expect(sut.selectTab).toHaveBeenCalled();
    });
});