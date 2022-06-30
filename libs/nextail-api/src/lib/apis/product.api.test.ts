import { fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { NextailProductsApi } from './products.api';
import { NextailApiModule } from '../nextail-api.module';
import { NextailProduct } from '../entities/product.entity';
import { NEXTAIL_PRODUCTS } from '../data/products.data';
import { NextailProductExtended } from '../entities/product-extended.entity';

describe('NextailProductsApi', () => {
  let service: NextailProductsApi | undefined | null;
  let sortedProducts: NextailProduct[] | undefined | null;
  let extendedProducts: NextailProductExtended[] | undefined | null;

  beforeEach(waitForAsync(() => {
    tearUp();
  }));

  afterEach(() => {
    tearDown();
  });

  describe('getProducts', () => {
    it('should return correct value', fakeAsync(() => {
      service?.getProducts().subscribe((result) => {
        expect(result).toEqual(sortedProducts);
      });
      flush();
    }));
  });

  describe('getProductsExtended', () => {
    it('should return correct value', fakeAsync(() => {
      service?.getProductsExtended().subscribe((result) => {
        expect(result).toEqual(extendedProducts);
      });
      flush();
    }));
  });

  function tearUp(): void {
    initTestModule();
    initMocks();
  }
  function initTestModule(): void {
    TestBed.configureTestingModule({
      imports: [NextailApiModule.forRoot()],
    }).compileComponents();
  }
  function initMocks(): void {
    service = TestBed.inject(NextailProductsApi);
    sortedProducts = [...NEXTAIL_PRODUCTS];
    sortedProducts.sort(function (a, b) {
      return a.sales_ranking - b.sales_ranking;
    });
    extendedProducts = sortedProducts.map((item) => {
      return service!['formatProductExtended'](item);
    });
  }

  function tearDown(): void {
    cleanMocks();
  }
  function cleanMocks(): void {
    service = null;
    sortedProducts = null;
  }
});
