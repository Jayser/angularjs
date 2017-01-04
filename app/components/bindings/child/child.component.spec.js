import BindingsChildComponent from './child.component';

describe('bindings child component', () => {
    const defaultObj = {counter: 100};
    const defaultPrimitive = true;
    const changes = {
        obj: {
            currentValue: {counter: 500}
        }
    };
    const defaultOnUpdateFn = function () {};
    let sut;

    beforeEach(() => {
        sut = new BindingsChildComponent.controller();
        sut.obj = angular.copy(defaultObj);
        sut.primitive = defaultPrimitive;
        sut.onUpdate = defaultOnUpdateFn;
    });

    describe('increment', ()=>{
        it('should increment counter value +1', ()=>{
            sut.increment();
            expect(sut.obj.counter).toEqual(defaultObj.counter + 1);
        })
    });

    describe('togglePrimitive', () => {
        it('should toggle primitive state (bool)', () => {
            sut.togglePrimitive();
            expect(sut.primitive).toEqual(!defaultPrimitive)
        })
    });

    describe('sendDataBack', () => {
        beforeEach(() => {
            spyOn(sut, 'onUpdate');
        });

        it('should trigger onUpdate function and pass correct params', () => {
            sut.sendDataBack();
            expect(sut.onUpdate).toHaveBeenCalledWith({event: {
                obj: defaultObj,
                primitive: defaultPrimitive
            }})
        });
    });

    describe('$onChanges', () => {
        it('should change sut.obj object when $onChanges event was fired ', ()=>{
            sut.$onChanges(changes);

            // expect(sut.obj).toEqual(changes.obj.currentValue);
        })
    })
});