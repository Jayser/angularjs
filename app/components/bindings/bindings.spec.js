import BindingsParentCompoennt from './bindings.component';

describe('bindings parent component', () => {
    const defaultObj = { counter: 100 };
    const defaultPrimitive = true;
    let sut;

    beforeEach(() => {
        sut = new BindingsParentCompoennt.controller();
    });

    it('should initialized with default values', () => {
        expect(sut.obj).toEqual(defaultObj);
        expect(sut.primitive).toEqual(defaultPrimitive);
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
        it('should update sut.obj & sut.primitive values according to provided data', () => {
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
