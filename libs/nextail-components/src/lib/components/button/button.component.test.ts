import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NextailButtonComponent } from './button.component';
import { NextailButtonType } from './button.config';
import { NextailButtonModule } from './button.module';

@Component({
  template: `
    <nextail-button #defaultParamsBtn></nextail-button>
    <nextail-button [type]="type" [disabled]="disabled" #fullParamsBtn>Some text</nextail-button>
  `,
})
class NextailButtonTestComponent {
  @ViewChild('defaultParamsBtn', { static: false, read: ElementRef }) defaultParamsBtnRef: ElementRef | undefined;
  @ViewChild('fullParamsBtn', { static: false }) fullParamsBtnComponent: NextailButtonComponent | undefined;
  @ViewChild('fullParamsBtn', { static: false, read: ElementRef }) fullParamsBtnRef: ElementRef | undefined;

  type: NextailButtonType = 'secondary';
  disabled = true;
}

describe('NextailButtonComponent', () => {
  let fixture: ComponentFixture<NextailButtonTestComponent> | null;
  let testComponent: NextailButtonTestComponent | null;
  let defaultParamsBtnEl: HTMLElement | null;
  let fullParamsBtnEl: HTMLElement | null;
  let buttonComponent: NextailButtonComponent | null | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let executeEventSpy: any;

  beforeEach(waitForAsync(() => {
    tearUp();
  }));

  afterEach(() => {
    tearDown();
  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
    expect(defaultParamsBtnEl).toBeTruthy();
    expect(fullParamsBtnEl).toBeTruthy();
    expect(buttonComponent).toBeTruthy();
  });

  describe('type param', () => {
    it('should set default when no input', () => {
      expect(defaultParamsBtnEl?.querySelector('.nextail-button--primary')).toBeTruthy();
    });

    it('should set value when input', () => {
      expect(fullParamsBtnEl?.querySelector('.nextail-button--secondary')).toBeTruthy();
    });

    it('should update value', () => {
      expect(fullParamsBtnEl?.querySelector('.nextail-button--secondary')).toBeTruthy();
      (testComponent as NextailButtonTestComponent).type = 'primary';
      fixture?.detectChanges();
      expect(fullParamsBtnEl?.querySelector('.nextail-button--primary')).toBeTruthy();
    });
  });

  describe('disabled param', () => {
    it('should set default when no input', () => {
      expect(defaultParamsBtnEl?.querySelector('.nextail-button--disabled')).toBeFalsy();
    });

    it('should set value when input', () => {
      expect(fullParamsBtnEl?.querySelector('.nextail-button--disabled')).toBeTruthy();
    });

    it('should update value', () => {
      expect(fullParamsBtnEl?.querySelector('.nextail-button--disabled')).toBeTruthy();
      (testComponent as NextailButtonTestComponent).disabled = false;
      fixture?.detectChanges();
      expect(fullParamsBtnEl?.querySelector('.nextail-button--disabled')).toBeFalsy();
    });
  });

  describe('text param', () => {
    it('should be empty when no content', () => {
      expect(defaultParamsBtnEl?.querySelector('.nextail-button__text')?.innerHTML).toBe('');
    });
    it('should set content', () => {
      expect(fullParamsBtnEl?.querySelector('.nextail-button__text')?.innerHTML).toBe('Some text');
    });
  });

  describe('execute event', () => {
    it('should no emit when disabled', () => {
      buttonComponent?.onClick(null);
      fixture?.detectChanges();
      expect(executeEventSpy).not.toHaveBeenCalled();
    });
    it('should no emit when disabled', () => {
      (testComponent as NextailButtonTestComponent).disabled = false;
      fixture?.detectChanges();
      buttonComponent?.onClick(null);
      fixture?.detectChanges();
      expect(executeEventSpy).toHaveBeenCalled();
    });
  });

  function tearUp(): void {
    initTestModule();
    initMocks();
  }
  function initTestModule(): void {
    TestBed.configureTestingModule({
      imports: [NextailButtonModule],
      declarations: [NextailButtonTestComponent],
    }).compileComponents();
  }
  function initMocks(): void {
    fixture = TestBed.createComponent(NextailButtonTestComponent);
    fixture.detectChanges();
    testComponent = fixture.componentInstance;
    defaultParamsBtnEl = testComponent.defaultParamsBtnRef?.nativeElement;
    fullParamsBtnEl = testComponent.fullParamsBtnRef?.nativeElement;
    buttonComponent = testComponent.fullParamsBtnComponent;
    executeEventSpy = jest.spyOn((buttonComponent as NextailButtonComponent)?.execute, 'emit');
  }

  function tearDown(): void {
    cleanMocks();
  }
  function cleanMocks(): void {
    fixture = null;
    testComponent = null;
    defaultParamsBtnEl = null;
    fullParamsBtnEl = null;
    executeEventSpy = null;
    buttonComponent = null;
  }
});
