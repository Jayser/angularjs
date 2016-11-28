export const AppComponent = {
    template: `
    <header>
        Header
    </header>
    <nav>
        <ul>
            <li><a ui-sref="home">home</a></li>
            <li><a ui-sref="test">Component</a></li>
            <li><a ui-sref="test2">Common component</a></li>
        </ul>
    </nav>
    <main>
        <ui-view></ui-view>
    </main>
    <footer>
        footer
    </footer>
  `
};