import { Directive, ElementRef, Input } from '@angular/core';
import {
  NEXTAIL_GRID_COLUMN_CLASS,
  NEXTAIL_GRID_COLUMN_LG_CLASS,
  NEXTAIL_GRID_COLUMN_LG_OFFSET_CLASS,
  NEXTAIL_GRID_COLUMN_MD_CLASS,
  NEXTAIL_GRID_COLUMN_MD_OFFSET_CLASS,
  NEXTAIL_GRID_COLUMN_NO_GUTTER_CLASS,
  NEXTAIL_GRID_COLUMN_SIZE_AUTO_CLASS,
  NEXTAIL_GRID_COLUMN_SIZE_DEFAULT_CLASS,
  NEXTAIL_GRID_COLUMN_SM_CLASS,
  NEXTAIL_GRID_COLUMN_SM_OFFSET_CLASS,
  NEXTAIL_GRID_COLUMN_XS_CLASS,
  NEXTAIL_GRID_COLUMN_XS_OFFSET_CLASS,
  NextailColSize,
} from './column.config';

@Directive({
  selector: '[nextailCol]',
})
export class NextailColumnDirective {
  private currentColXS: string | undefined | null;
  private currentColSM: string | undefined | null;
  private currentColMD: string | undefined | null;
  private currentColLG: string | undefined | null;

  private currentColXSOffset: string | undefined | null;
  private currentColSMOffset: string | undefined | null;
  private currentColMDOffset: string | undefined | null;
  private currentColLGOffset: string | undefined | null;

  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add(NEXTAIL_GRID_COLUMN_CLASS);
  }

  /**
   * Set the size of the element inside a row component.
   * Possible values:
   * - auto: adapt automatically to fit the maximum space available
   * - default: currently no apply any size
   */
  @Input() set nextailCol(value: NextailColSize | undefined) {
    this.el.nativeElement.classList.remove(NEXTAIL_GRID_COLUMN_SIZE_AUTO_CLASS, NEXTAIL_GRID_COLUMN_SIZE_DEFAULT_CLASS);
    switch (value) {
      case 'auto':
        this.el.nativeElement.classList.add(NEXTAIL_GRID_COLUMN_SIZE_AUTO_CLASS);
        break;
      case 'default':
      default:
        this.el.nativeElement.classList.add(NEXTAIL_GRID_COLUMN_SIZE_DEFAULT_CLASS);
    }
  }

  /**
   * Set the custom size in xs container
   */
  @Input() set nextailColXs(value: number) {
    if (this.currentColXS) {
      this.currentColXS.split(' ').forEach((currentColXsItem) => {
        this.el.nativeElement.classList.remove(currentColXsItem);
      });
      this.currentColXS = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColXS = `${NEXTAIL_GRID_COLUMN_XS_CLASS}${value.toString()}`;
      this.currentColXS.split(' ').forEach((currentColXsItem) => {
        this.el.nativeElement.classList.add(currentColXsItem);
      });
    }
  }
  /**
   * Set the offset size in xs container
   */
  @Input() set nextailColXsOffset(value: number) {
    if (this.currentColXSOffset) {
      this.currentColXSOffset.split(' ').forEach((currentColXSOffsetItem) => {
        this.el.nativeElement.classList.remove(currentColXSOffsetItem);
      });
      this.currentColXSOffset = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColXSOffset = `${NEXTAIL_GRID_COLUMN_XS_OFFSET_CLASS}${value.toString()}`;
      this.currentColXSOffset.split(' ').forEach((currentColXSOffsetItem) => {
        this.el.nativeElement.classList.add(currentColXSOffsetItem);
      });
    }
  }

  /**
   * Set the custom size in sm container
   */
  @Input() set nextailColSm(value: number) {
    if (this.currentColSM) {
      this.currentColSM.split(' ').forEach((currentColSMItem) => {
        this.el.nativeElement.classList.remove(currentColSMItem);
      });
      this.currentColSM = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColSM = `${NEXTAIL_GRID_COLUMN_SM_CLASS}${value.toString()}`;
      this.currentColSM.split(' ').forEach((currentColSMItem) => {
        this.el.nativeElement.classList.add(currentColSMItem);
      });
    }
  }
  /**
   * Set the offset size in sm container
   */
  @Input() set nextailColSmOffset(value: number) {
    if (this.currentColSMOffset) {
      this.currentColSMOffset.split(' ').forEach((currentColSMOffsetItem) => {
        this.el.nativeElement.classList.remove(currentColSMOffsetItem);
      });
      this.currentColSMOffset = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColSMOffset = `${NEXTAIL_GRID_COLUMN_SM_OFFSET_CLASS}${value.toString()}`;
      this.currentColSMOffset.split(' ').forEach((currentColSMOffsetItem) => {
        this.el.nativeElement.classList.add(currentColSMOffsetItem);
      });
    }
  }

  /**
   * Set the custom size in md container
   */
  @Input() set nextailColMd(value: number) {
    if (this.currentColMD) {
      this.currentColMD.split(' ').forEach((currentColMDItem) => {
        this.el.nativeElement.classList.remove(currentColMDItem);
      });
      this.currentColMD = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColMD = `${NEXTAIL_GRID_COLUMN_MD_CLASS}${value.toString()}`;
      this.currentColMD.split(' ').forEach((currentColMDItem) => {
        this.el.nativeElement.classList.add(currentColMDItem);
      });
    }
  }
  /**
   * Set the offset size in md container
   */
  @Input() set nextailColMdOffset(value: number) {
    if (this.currentColMDOffset) {
      this.currentColMDOffset.split(' ').forEach((currentColMDOffsetItem) => {
        this.el.nativeElement.classList.remove(currentColMDOffsetItem);
      });
      this.currentColMDOffset = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColMDOffset = `${NEXTAIL_GRID_COLUMN_MD_OFFSET_CLASS}${value.toString()}`;
      this.currentColMDOffset.split(' ').forEach((currentColMDOffsetItem) => {
        this.el.nativeElement.classList.add(currentColMDOffsetItem);
      });
    }
  }

  /**
   * Set the custom size in lg container
   */
  @Input() set nextailColLg(value: number) {
    if (this.currentColLG) {
      this.currentColLG.split(' ').forEach((currentColLGItem) => {
        this.el.nativeElement.classList.remove(currentColLGItem);
      });
      this.currentColLG = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColLG = `${NEXTAIL_GRID_COLUMN_LG_CLASS}${value.toString()}`;
      this.currentColLG.split(' ').forEach((currentColLGItem) => {
        this.el.nativeElement.classList.add(currentColLGItem);
      });
    }
  }
  /**
   * Set the offset size in lg container
   */
  @Input() set nextailColLgOffset(value: number) {
    if (this.currentColLGOffset) {
      this.currentColLGOffset.split(' ').forEach((currentColLGOffsetItem) => {
        this.el.nativeElement.classList.remove(currentColLGOffsetItem);
      });
      this.currentColLGOffset = null;
    }

    value = typeof value !== 'number' ? parseInt(value) : value;
    if (!isNaN(value)) {
      this.currentColLGOffset = `${NEXTAIL_GRID_COLUMN_LG_OFFSET_CLASS}${value.toString()}`;
      this.currentColLGOffset.split(' ').forEach((currentColLGOffsetItem) => {
        this.el.nativeElement.classList.add(currentColLGOffsetItem);
      });
    }
  }

  /**
   * @param setHasGutters value
   * if the values is false add no-gutter class
   */
  @Input() set hasGutters(value: boolean) {
    this.el.nativeElement.classList.remove(NEXTAIL_GRID_COLUMN_NO_GUTTER_CLASS);
    if (value === false) {
      this.el.nativeElement.classList.add(NEXTAIL_GRID_COLUMN_NO_GUTTER_CLASS);
    }
  }
}
