import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let NegativenumberPipe = class NegativenumberPipe {
    transform(value, ...args) {
        console.log("negative number display value:" + value);
        return Math.abs(value);
    }
};
NegativenumberPipe = tslib_1.__decorate([
    Pipe({
        name: 'negativenumber'
    })
], NegativenumberPipe);
export { NegativenumberPipe };
//# sourceMappingURL=negativenumber.pipe.js.map