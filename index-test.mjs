import {check, _if, self} from './index.mjs' ; const {string, number, boolean} = self;

function typeFactory(ID, DATE, isEMPLOYED) {
    let _this = {};
    if (
        
        ( _this.ID = check( _if(ID), string) ) &&
        ( _this.DATE = check( _if(DATE), number) ) &&
        ( _this.isEMPLOYED = check( _if(isEMPLOYED), boolean) )
        
    ) return _this;
}

console.log(new typeFactory("Me", 2022, true)); // [PASSED]
console.log(new typeFactory("Me", "2022", true)); // [FAILED] # expected tho !