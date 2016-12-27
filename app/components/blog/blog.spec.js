import BlogComponent from './blog.component';

describe('blog component', () => {
    const defaultPageNum = 1;
    const defaultItemsPerPage = 5;
    const defaultStateName = "blog.list";
    let BlogService;
    let promise;
    let $state;
    let sut;

    function runCbFn(cb) {
        cb();
        return this;
    }

    beforeEach(() => {
        $state = {
            current: {name: defaultStateName},
            params: {page: defaultPageNum},
            transitionTo: function () {}
        };
        BlogService = jasmine.createSpyObj('BlogService', ['getAll']);
        promise = jasmine.createSpyObj('promise', ['then', 'finally']);
        spyOn($state, 'transitionTo');

        sut = new BlogComponent.controller($state, BlogService);
    });


    describe('$onInit', () => {
        beforeEach(() => {
            spyOn(sut, 'fetchBlogList')
        });

        it('should be initialized with defatult values', () => {
            sut.$onInit();

            expect(sut.currentPage).toEqual(defaultPageNum);
            expect(sut.itemsPerPage).toEqual(defaultItemsPerPage);
            expect(sut.posts.length).toEqual(0);
            expect(sut.fetchBlogList).toHaveBeenCalled();
        })
    });

    describe('fetchBlogList', () => {
        beforeEach(() => {
            spyOn(sut, 'onBlogDataReceived');
            sut.BlogService.getAll.and.returnValue(promise);
            sut.currentPage = defaultPageNum;

            promise.then.and.callFake(runCbFn);
        });

        it('should set loading flag to true when function is executed', () => {
            sut.fetchBlogList();
            expect(sut.loading).toEqual(true);
        });

        it('should set loading flag to false when request is finished', () => {
            promise.finally.and.callFake(runCbFn);
            sut.fetchBlogList();

            expect(promise.finally).toHaveBeenCalled();
            expect(sut.loading).toEqual(false);
        });

        it('should call BlogService method with proper page', () => {
            sut.fetchBlogList();
            expect(sut.BlogService.getAll).toHaveBeenCalledWith(defaultPageNum);
        });

        it('should trigger onBlogDataReceived method when data come', () => {
            sut.fetchBlogList();

            expect(promise.then).toHaveBeenCalled();
            expect(sut.onBlogDataReceived).toHaveBeenCalled();
        });
    });

    describe('onBlogDataReceived', () => {
        let data = {
            pages: 10,
            currentPage: 2,
            posts: [{}, {}, {}, {}, {}]
        };

        it('should populate totalItems, currentPage and posts from received object', () => {
            sut.itemsPerPage = defaultItemsPerPage;
            sut.onBlogDataReceived(data);

            expect(sut.totalItems).toEqual(data.pages * defaultItemsPerPage);
            expect(sut.currentPage).toEqual(data.currentPage);
            expect(sut.posts).toEqual(data.posts);
        });
    });

    describe('fetchAndReload', () => {
        beforeEach(() => {
            spyOn(sut, 'fetchBlogList').and.returnValue(promise);
            spyOn(sut, 'reloadState');

            promise.then.and.callFake(runCbFn);
        });

        it('should be call fetchBlogList fn and execute reloadState fn', () => {
            sut.fetchAndReload();

            expect(sut.fetchBlogList).toHaveBeenCalled();
            expect(promise.then).toHaveBeenCalled();
            expect(sut.reloadState).toHaveBeenCalled()
        });
    });

    describe('reloadState', () => {
        it('should reload state with proper parameters', () => {
            sut.currentPage = defaultPageNum;
            sut.reloadState();

            expect(sut.$state.transitionTo).toHaveBeenCalledWith(defaultStateName, {page: defaultPageNum});
        })
    })
});