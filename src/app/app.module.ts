import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { MenuModule } from './menu/menu.module';
import { SearchPracticePipe } from './search-practice.pipe';
import { PracticeComponent } from './practice/practice.component';
import { FooterComponent } from './footer/footer.component';
import { Globals } from './Globals';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginModule } from './login/login.module';
import { MenuModule } from './menu/menu.module';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    declarations: [
        AppComponent,
        SearchPracticePipe,
        PracticeComponent,
        FooterComponent,
    ],
    providers: [
        Globals
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MenuModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        // NgbModule
    ]
})
export class AppModule { }
