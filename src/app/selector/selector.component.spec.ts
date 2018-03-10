import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent } from './selector.component';
import { WindowRefService } from '../shared/window-ref.service';
import { Store } from '@ngrx/store';
import createSpyObj = jasmine.createSpyObj;
import { ACTIONS } from './constant';

describe('SelectorComponent', () => {
    let component: SelectorComponent;
    let fixture: ComponentFixture<SelectorComponent>;
    let mockStore;
    let mockWindowRefService;

    beforeEach(async(() => {
        mockStore = createSpyObj('Store', ['dispatch']);
        mockWindowRefService = createSpyObj('windowRef', {
            getWindow: {
                getSelection() {
                    return {
                        anchorOffset: 'myAnchorOffset',
                        focusOffset: 'myFocusOffset',
                        toString() {
                            return 'myString';
                        }
                    };
                }
            }
        });
        TestBed.configureTestingModule({
            declarations: [SelectorComponent],
            providers: [
                { provide: WindowRefService, useValue: mockWindowRefService },
                { provide: Store, useValue: mockStore }
            ]
        });

        TestBed.overrideTemplate(SelectorComponent, '');
        TestBed.compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('handleMouseUp', () => {
        it('should dispatch correct event to store', () => {
            component.handleMouseUp();
            expect(mockWindowRefService.getWindow).toHaveBeenCalled();
            expect(mockStore.dispatch).toHaveBeenCalledWith({
                type: ACTIONS.SELECTED_HIGHLIGHT,
                payload: {
                    start: 'myAnchorOffset',
                    end: 'myFocusOffset',
                    value: 'myString'
                }
            });
        });
    });
});
