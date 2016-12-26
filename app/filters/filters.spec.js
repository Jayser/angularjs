import cutFilter from "./cut.filter";

describe('cutFilter', () => {
    let testString,
        sut;

    beforeEach(() => {
        sut = new cutFilter();
        testString = new Array(1000).join('a');
    });

    it('should cut long string', () => {
        let filteredSting = sut(testString);
        expect(filteredSting.length).toBeLessThanOrEqual(153)
    });

    it('should add \'...\' when sting length is more then 150', () => {
        let filteredSting = sut(testString);
        expect(filteredSting.lastIndexOf('...')).toBe(150);
    });

    it('should return the same string when its length is less then 150', () => {
        testString = new Array(100).join('a');
        let filteredSting = sut(testString);
        expect(filteredSting).toEqual(testString)
    });

    it('should return undefined if no arguments provided', () => {
        let filteredSting = sut();
        expect(filteredSting).toBeUndefined()
    })

});