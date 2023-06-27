import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProductoComponent } from './listar-producto.component';

describe('ListarProductoComponent', () => {
  let component: ListarProductoComponent;
  let fixture: ComponentFixture<ListarProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProductoComponent]
    });
    fixture = TestBed.createComponent(ListarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
