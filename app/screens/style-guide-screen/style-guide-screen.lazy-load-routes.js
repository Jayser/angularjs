import lazyLoadCounterComponent from '../../components/lazy-load-counter/lazy-load-counter.lazy-load-export';
import lazyLoadTabsComponent from '../../components/common/tabs/tabs.lazy-load-export';

export const lazyLoadCounter = ['LazyLoadService', LazyLoadService => LazyLoadService.load(lazyLoadCounterComponent)];
export const lazyLoadTabs    = ['LazyLoadService', LazyLoadService => LazyLoadService.load(lazyLoadTabsComponent)];