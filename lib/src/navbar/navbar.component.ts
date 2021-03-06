import { Component, OnInit, Input, QueryList, ContentChildren } from '@angular/core';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';

@Component({
    selector: 'hc-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    @Input() user: string = '';

    @Input() appIcon: string = '';

    @Input() homeUri: string = '';

    @Input() fixedTop: boolean = false;

    @ContentChildren(NavbarMenuComponent) mobileMenu: QueryList <NavbarMenuComponent>;

    menuOpen: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleMobileMenu() {
        if ( this.mobileMenu.first ) {
            if ( this.menuOpen ) {
                this.mobileMenu.first.hide();
                this.menuOpen = false;
            } else {
                this.mobileMenu.first.show();
                this.menuOpen = true;
            }
        }
    }

    menuClick( event: any ) {
        let clickTarget: string = event.target.classList[0];

        // Verify that the click in the mobile menu came from a navigation item
        if ( clickTarget.indexOf('menu-dropdown') === -1 ) {
            this.toggleMobileMenu();
        }
    }

    get mobileMenuIcon(): string {
        return this.menuOpen ? 'fa-times' : 'fa-bars';
    }
}
