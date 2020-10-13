import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarCategoryComponent } from './search-bar-category.component';

describe('SearchBarCategoryComponent', () => {
  let component: SearchBarCategoryComponent;
  let fixture: ComponentFixture<SearchBarCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
