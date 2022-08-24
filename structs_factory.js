  // IMAGINATIVE EXPORT IMPORT OF _is() utility [--START--] :
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

  function err() {
    console.error("invalid JavaScript type")
  }
  
  // NOTE : is() function MUST CONFORM the STRUCT object defined above !
  function is(type){
    if (false) {/* switch to else if :....... */}
    else if (typeof this.name == typeof type) {
      //console.log("correct, it's a type of: ")
        return ["string", this.name];
    }
    else if (typeof this.age == typeof type) {
      //console.log("correct, it's a type of: ")
        return ["number", this.age];
    }
    // BEWARE : in JavaScript Boolean shortcuts [ISSUE TO SOLVED]
    else if (typeof this.isEmployed == typeof type) {
      //console.log("correct, it's a type of: ")
        return ["boolean", this.isEmployed];
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

    // EXAMPLE 2 : if passed for checker(), when make instances , otherwise prevent instantiation with (refer below - ^2)
    function checker (_is, T, ...rest) {
        if (_is[0] === typeof T) {
            console.log("matched type within resultant values (if any): ", [selfValueCheck, rest].flat())
            return [selfValueCheck, rest].flat();
        }
        else {
            err()
            return;
        }
    }

// _is() utility [--ENDS--]

function factoryPerson(n /* string */, a /* int */, iE /* bool */) /* Person */ {
	var thisPerson = {}
  thisPerson.name = checker(_is(n), name)
  thisPerson.age = checker(_is(a), age)
  thisPerson.isEmployed = checker(_is(iE), isEmployed)
  return thisPerson;

}

function main() {
	person1 = new factoryPerson("", 0, false)
	person2 = new factoryPerson("Doe", "456", false)
	person3 = new factoryPerson("Moh", 789, "Boolean")
	console.log(person1, person2, person3)
}
main()