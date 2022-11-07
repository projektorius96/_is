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
      //console.log("correct, it's a type of: ")
        return /* [ */"string"/* , this.string *//* ] */;
    }
    else if (typeof this.number == typeof type) {
      //console.log("correct, it's a type of: ")
        return /* [ */"number"/* , this.number *//* ] */;
    }
    // BEWARE : in JavaScript Boolean shortcuts [ISSUE TO SOLVED]
    else if (typeof this.boolean == typeof type) {
      //console.log("correct, it's a type of: ")
        return /* [ */"boolean"/* , this.boolean *//* ] */;
    }
    // logic flow of the remaining JavaScript types (refer to ^1 above)
    else {
        err()
        return false;
    }
}

    // IMPROVEMENT : BYPASS .CALL() METHOD INVOCATION
    function _is(_type){
    /* console.log("_type?", _type); */
    selfValueCheck = _type
    return is.call(self, _type); // DEV_NOTE: such calling inside is() function swaps e.g. this.number with self.number
    }

    function checker(_is, T/*, ...rest */) {
        /* console.log("_is[0]?", _is[0]) */
        if (_is/*[0]*/ === typeof T) {
            return selfValueCheck/* [selfValueCheck, rest].flat() */;
        }
        else {
            err()
        }
    }
    
    console.log("test1: ")
      console.log(checker(_is(1), number/*, comma seperated list of values to return (if any) */))
    console.log("test2: ")
      console.log(checker(_is("1"), number/*, comma seperated list list of values to return (if any) */))
    console.log("test3: ")
      console.log(checker(_is(true), boolean/*, comma seperated list of values to return (if any) */));
    console.log("test4: ")
      console.log(checker(_is("false"), boolean/*, comma seperated list list of values to return (if any) */))