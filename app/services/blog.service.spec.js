import BlogService from './blog.service';

describe('BlogService', () => {
    const CONSTANTS = {
        URLS: {
            POSTS: '/api/posts'
        }
    };
    const $http = jasmine.createSpyObj('$http', ['get']);
    const promise = jasmine.createSpyObj('promise', ['then']);

    const sut = new BlogService($http, CONSTANTS);

    beforeEach(() => {
        $http.get.and.returnValue(promise);
    });

    describe('.getAll', () => {
        const resMock = {
            data: {
                status: true,
                responses: {}
            }
        };
        let returnedValue;

        beforeEach(() => {
            promise.then.and.callFake(function (cb) {
                return returnedValue = cb(resMock);
            });
        });

        it('should be called with default arguments', () => {
            sut.getAll();

            expect($http.get).toHaveBeenCalledWith(CONSTANTS.URLS.POSTS, {params: {page: 1}});
            expect(promise.then).toHaveBeenCalled();
            expect(returnedValue).toBe(resMock.data.responses);
        });

        it('should be called with provided page number', () => {
            const pageNum = 10;
            sut.getAll(pageNum);

            expect($http.get).toHaveBeenCalledWith(CONSTANTS.URLS.POSTS, {params: {page: pageNum}});
        })
    });

    describe('.getById', () => {
        const resMock = {data: {}};
        const blogId = '57fb24011074ac2018ffcd6e';
        let returnedValue;

        beforeEach(() => {
            promise.then.and.callFake(function (cb) {
                return returnedValue = cb(resMock);
            });
        });

        it('should be called with provided blogId', ()=> {
            sut.getById(blogId);

            expect($http.get).toHaveBeenCalledWith(`${CONSTANTS.URLS.POSTS}/${blogId}`);
            expect(promise.then).toHaveBeenCalled();
            expect(returnedValue).toBe(resMock.data);
        })
    })


});