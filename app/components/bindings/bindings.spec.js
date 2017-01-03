import BindingsParentCompoennt from './parent';
import BindingsChildComponent from './child';

describe('bindings parent component', () => {
    const defaultObj = { counter: 100 };
    const defaultPrimitive = true;
    let sut;

    beforeEach(() => {
        sut = new BindingsParentCompoennt.controller();
        sut.$onInit();
    });

    describe('$onInit', () => {
        it('should initialized with default values', () => {
            expect(sut.obj).toEqual(defaultObj);
            expect(sut.primitive).toEqual(defaultPrimitive);
        })
    });

    describe('increment', () => {
        it('should increment counter value +1', ()=> {
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

    describe('update', () => {
        it('should update sut.obj & sut.primitive values according to provided data', ()=>{
            const event = {
                obj: { counter: 300},
                primitive: false
            };

            sut.update(event);
            expect(sut.obj).toEqual(event.obj);
            expect(sut.primitive).toEqual(event.primitive);
        })
    })
});

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