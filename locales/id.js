// numeral.js locale configuration
// locale : Indonesian (Bahasa Indonesia)
// author : fshdq : https://github.com/w-

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'id', {
        delimiters: {
            thousands: '.',
            decimal: ','
        },
        abbreviations: {
            thousand: 'k',
            million: 'Jt',
            billion: 'M',
            trillion: 'T'
        },
        ordinal: function (number) {
            // The oridnals work by adding a prefix "Ke-" to the number except for when the value is 1.
            // For this case i will return .
            return '.';
        },
        currency: {
            symbol: 'Rp.'
        }
    });
}));