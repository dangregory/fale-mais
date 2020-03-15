import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PLANS_URL, DETAILS_URL, PRICING_URL } from '../common/services';

@Injectable()
    export default class CalculationService {
    constructor(private http: HttpClient) { }

    getPlans() {
        return this.http.get(PLANS_URL).toPromise();
    }

    getCityCodes() {
        return this.http.get(DETAILS_URL).toPromise();
    }

    getTaxes() {
        return this.http.get(PRICING_URL).toPromise();
    }

    calcPlanPrice(plan: any, pricings: any, origin: string, destiny: string, duration: number) {
        let totalPrice = 0;

        if (!this.areParametersValidForCalculation(origin, destiny, duration)) { return totalPrice; }

        const callPrice = pricings.find((pricing) => {
            return (pricing.origin === origin &&  pricing.destiny === destiny);
        });

        if (!callPrice) { return totalPrice; }

        const planLimit = Number(plan.time);
        const pricingRate = Number(callPrice.price);
        const extraMinutes = (duration > planLimit);

        if (extraMinutes) {
        const exceedingMinutes = (duration - planLimit);
        const exceedingRate = (pricingRate + (pricingRate / 100 * 10))
        const exceedingValue = (exceedingMinutes * exceedingRate);
            totalPrice = parseFloat(exceedingValue.toFixed(2));
        }

        return totalPrice;
    }

    calcNoPlanPrice(pricings: any, origin: string, destiny: string, duration: number) {
        let totalPrice = 0;

        if (!this.areParametersValidForCalculation(origin, destiny, duration)) {
            return totalPrice; 
        }

        const callPrice = pricings.find((pricing) => {
        return (pricing.origin === origin &&  pricing.destiny === destiny);
        });

        if (!callPrice) { return totalPrice; }

        const pricingRate = Number(callPrice.price);
        const exceedingValue = (duration * pricingRate);
        totalPrice = parseFloat(exceedingValue.toFixed(2));

        return totalPrice;
    }

  areParametersValidForCalculation(origin: string, destiny: string, duration: number) : boolean {
    return Boolean(origin && destiny && duration);
  }
}
