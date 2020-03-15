import { TestBed } from '@angular/core/testing';
import CalculationService from './CalculationService';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const PLAN_MOCK = {
    plan: "FaleMais 60",
    time: "60"
};

const PRICINGS_MOCK = [
    {
        origin: "011",
        destiny: "017",
        price: "1.70"
    }
];

describe('services/CalculationService', () => {

    let calculationService : CalculationService;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule], 
        providers: [CalculationService]
    }));

    it('should be created', () => {
        const service: CalculationService = TestBed.get(CalculationService);
        expect(service).toBeTruthy();
    });

    beforeEach(() => {
        TestBed
        .configureTestingModule({
            providers: [
                CalculationService
            ]
        })
        .compileComponents()
        .then(() => {
            calculationService = TestBed.get(CalculationService);
        });
    });

    it(`should return true when parameters are valid for calculation`, () => {
        const isValid = calculationService.areParametersValidForCalculation('011', '017', 100);
        expect(isValid).toBeTruthy();
    });
  
    it(`should return total fee without plan`, () => {
        const calculationResult = calculationService.calcNoPlanPrice(PRICINGS_MOCK, '011', '017', 100);
        expect(calculationResult).toBe(170);
    });

    it(`calculationResult returns 0 when duration doesn't exceed total plan`, () => {
        //nesse caso, a chamada do DDD 11 para o 17, para o plano FALE MAIS 60 
        //deverá ser 0 caso tenhamos menos de 60 minutos
        const calculationResult = calculationService.calcPlanPrice(PLAN_MOCK, PRICINGS_MOCK, '011', '017', 59);
        expect(calculationResult).toBe(0);
    });

  
});
