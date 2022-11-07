let {/*default:*/self, string, number, boolean} = {
  self: { /* in order to destructure it to default */
      string: "",
      number: 123,
      boolean: (false || true),
      /* ^1 : other types with placeholder values e.g. function, array, object itself */
  },
  string: "",
  number: 123,
  boolean: (false || true),
  /* ^1 : other types with placeholder values e.g. function, array, object itself */
}

  let selfValueCheck = undefined ;
  
  function err() {
    console.error("invalid JavaScript type")
  }
  
  // NOTE : is() function MUST CONFORM the STRUCT object defined above !
  function is(type){
    if (false) {/* switch to else if :....... */}
    else if (typeof this.string == typeof type) {
        return "string";
    }
    else if (typeof this.number == typeof type) {
        return "number";
    }
    // BEWARE : in JavaScript Boolean shortcuts [ISSUE TO SOLVED]
    else if (typeof this.boolean == typeof type) {
        return "boolean";
    }
    // logic flow of the remaining JavaScript types (refer to ^1 above)
    else {
        err()
        return false;
    }
}

    // IMPROVEMENT : BYPASS .CALL() METHOD INVOCATION
    function _if(_type){
    selfValueCheck = _type
    return is.call(self, _type); // DEV_NOTE: such calling inside is() function swaps e.g. this.number with self.number
    }

    function check(_if, T/*, ...rest */) {
        if (_if/*[0]*/ === typeof T) {
            return selfValueCheck/* [selfValueCheck, rest].flat() */;
        }
        else {
            err()
        }
    }
    
    // [TESTS] :
    // console.log("test1: ")
    //   console.log(check(_if(1), number/*, comma seperated list of values to return (if any) */))
    // console.log("test2: ")
    //   console.log(check(_if("1"), number/*, comma seperated list list of values to return (if any) */))
    // console.log("test3: ")
    //   console.log(check(_if(true), boolean/*, comma seperated list of values to return (if any) */));
    // console.log("test4: ")
    //   console.log(check(_if("false"), boolean/*, comma seperated list list of values to return (if any) */))