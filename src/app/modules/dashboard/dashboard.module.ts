import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StoriesComponent } from './components/stories/stories.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FollowComponent } from './components/follow/follow.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostActivityCardComponent } from './components/post-activity-card/post-activity-card.component';
import { FooterComponent } from 'src/app/core/footer/footer.component';
import { AddStoryComponent } from './components/add-story/add-story.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StoriesComponent,
    SettingsComponent,
    FollowComponent,
    PostCardComponent,
    PostActivityCardComponent,
    FooterComponent,
    AddStoryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
