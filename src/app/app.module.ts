import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatRollInputComponent } from './components/stat-roll-input/stat-roll-input.component';
import { SkillComponent } from './components/skill/skill.component';
import { ClassSelectorComponent } from './components/class-selector/class-selector.component';
import { RaceSelectorComponent } from './components/race-selector/race-selector.component';
import { LevelSelectorComponent } from './components/level-selector/level-selector.component';
import { BackgroundSelectorComponent } from './components/background-selector/background-selector.component';
@NgModule({
  declarations: [
    AppComponent,
    StatRollInputComponent,
    SkillComponent,
    ClassSelectorComponent,
    RaceSelectorComponent,
    LevelSelectorComponent,
    BackgroundSelectorComponent,
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
