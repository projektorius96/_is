let {/*default:*/self, name, age, isEmployed} = {
  self: { /* in order to destructure it to default */
      name: (String() || "_"),
      age: (Number() || Number(1)),
      isEmployed: (Boolean() || !Boolean()),
      /* ^1 : other types with placeholder values e.g. function, array, object itself */
  },
  name: (String() || "_"),
  age: (Number() || Number(1)),
  isEmployed: (Boolean() || !Boolean()),
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
      //console.log("correct, it's a type of: ")
        return ["string", this.string];
    }
    else if (typeof this.number == typeof type) {
      //console.log("correct, it's a type of: ")
        return ["number", this.number];
    }
    // BEWARE : in JavaScript Boolean shortcuts [ISSUE TO SOLVED]
    else if (typeof this.boolean == typeof type) {
      //console.log("correct, it's a type of: ")
        return ["boolean", this.boolean];
    }
    // logic flow of the remaining JavaScript types (refer to ^1 above)
    else {
        err()
        return false;
    }
}

    // IMPROVEMENT : BYPASS .CALL() METHOD INVOCATION
    function _is(/* _targetStruct, */ _type){
    selfValueCheck = _type
    return is.call(self, _type);
    }

    // EXAMPLE 2 : if passed for checker(), returned rest values of expected type T type + is(valueItself == selfValueCheck)
    function checker(_is, T, ...rest) {
        if (_is[0] === typeof T) {
            console.log("matched type within resultant values (if any): ", [selfValueCheck, rest].flat())
            return [selfValueCheck, rest].flat();
        }
        else {
            err()
        }
    }

    // EXAMPLE 2 [TESTS] :
    console.log("test1: ")
    checker(_is(1), number/*, comma seperated list of values to return (if any) */)
    console.log("test2: ")
    checker(_is("1"), number/*, comma seperated list list of values to return (if any) */)
    console.log("test3: ")
    checker(_is(true), boolean/*, comma seperated list of values to return (if any) */)
    console.log("test4: ")
    checker(_is("false"), boolean/*, comma seperated list list of values to return (if any) */)
