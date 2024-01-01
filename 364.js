function update(object, key, modify) {
  var value = object[key];
  var newValue = modify(value);
  var newObject = objectSet(object, key, newValue);
  return newObject;
}

var user = {
  firstName: "Joe",
  lastName: "Nash",
  email: "JOE@EXAMPLE.COM"
};


const lower = update(user, 'email', (email) => email.toLowerCase());
console.log(lower);




function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}