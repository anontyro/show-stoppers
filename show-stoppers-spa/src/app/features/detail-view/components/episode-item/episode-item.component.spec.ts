import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EpisodeItemComponent } from './episode-item.component';
import { Episode } from '../../../../models/season.model';
import { DebugElement } from '../../../../../../node_modules/@angular/core';

const mockEpisode: Episode = {
  air_date: new Date(),
  crew: [],
  episode_number: 1,
  guest_stars: [],
  id: 123,
  name: 'episode 1',
  overview: 'an episode',
  production_code: 123456,
  show_id: 666,
  still_path: 'path.jpg',
  vote_average: 4,
  vote_count: 10,
  season_number: 1,
};

describe('EpisodeItemComponent', () => {
  let component: EpisodeItemComponent;
  let fixture: ComponentFixture<EpisodeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeItemComponent);
    component = fixture.componentInstance;
    component.episode = mockEpisode;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the basic row structure', () => {
    const episode: DebugElement = fixture.debugElement.query(By.css('.episode-container'));
    console.log(episode);
    expect(episode).toBeTruthy();
    expect(episode.childNodes.length).toBe(3);

  });
});
