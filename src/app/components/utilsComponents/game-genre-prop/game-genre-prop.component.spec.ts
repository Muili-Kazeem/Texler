import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGenrePropComponent } from './game-genre-prop.component';

describe('GameGenrePropComponent', () => {
  let component: GameGenrePropComponent;
  let fixture: ComponentFixture<GameGenrePropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameGenrePropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGenrePropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
