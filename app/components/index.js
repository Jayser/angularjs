import HeaderModule from './header'
import FooterModule from './footer'
import NavbarModule from './navbar'
import BlogModule   from './blog'

export default angular
    .module('app.components', [
        HeaderModule,
        FooterModule,
        NavbarModule,
        BlogModule
    ])
    .name;