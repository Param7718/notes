import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordPanelComponent } from './record-panel/record-panel.component';
import { WeeksPanelComponent } from './weeks-panel/weeks-panel.component';
import { WeekTableComponent } from './week-table/week-table.component';
import { DayLineComponent } from './day-line/day-line.component';
import { SettingsComponent } from './settings/settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimeLineComponent } from './time-line/time-line.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordPanelComponent,
    WeeksPanelComponent,
    WeekTableComponent,
    DayLineComponent,
    SettingsComponent,
    CalendarComponent,
    TimeLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
