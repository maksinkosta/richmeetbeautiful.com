import {Selector, Role} from 'testcafe';

export default class Page {
    constructor () {

        // HTML selectors
        this.div = Selector('div');
        this.a = Selector('a');
        this.span = Selector('span');
        this.label = Selector('label');
        this.button = Selector('button');
        this.li = Selector('li');
        this.h1 = Selector('h1');

        // Custom + HTML child selectors
        this.changeLanguage = Selector('.language-select');
        this.selectHungarian = this.a.withText('Magyar');
        /*
        this.loginButton = this.button.withText('Log in');
        this.loginUserName = Selector('#email');
        this.password = Selector('#password');
        this.staffModule = this.li.withAttribute('title','Staff');
        this.addEmployee = this.button.withText('Add Employees');
        this.enterName = Selector('#_asf1').nth(0);
        this.enterLastName = Selector('#_asl1').nth(0);
        this.enterEmail = Selector('#_ase1'). nth(0);
        this.saveEmployee = Selector('#_as_save_multiple');
        this.clockModule = this.li.withAttribute('title','Time Clock');
        this.clockIn = Selector('#tc_tl_ci');
        this.clickOut = Selector('#tc_tl_co');
        this.avatar = Selector('#tr_avatar');
        this.logOut = this.div.withText('Sign Out');
        */
    }
}