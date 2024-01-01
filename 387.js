function update(object, key, modify) {
  var value = object[key];
  var newValue = modify(value);
  var newObject = objectSet(object, key, newValue);
  return newObject;
}

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function nestedUpdate(object, keys, modify) {
  if (keys.length === 0)
    return modify(object);
  var key1 = keys[0];
  var restOfKeys = drop_first(keys);
  return update(object, key1, function (value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  });
}

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

function updatePostById(category, id, modifyPost) {
  return nestedUpdate(category, ['posts', id], modifyPost);
}

function updateAuthor(post, modifyUser) {
  return update(post, 'author', modifyUser);
}

function capitalizeUserName(user) {
  return update(user, 'name', capitalize);
}

function capitalize(a) {
  const upperName = a.toUpperCase();
  console.log(upperName);
  return upperName;
}

var blogCategory = {
  posts: {
    '11': { author: { name: 'test' } },
    '12': { author: { name: 'test' } }
  }
}

const id = updatePostById(blogCategory, '12', function (post) {
  return updateAuthor(post, capitalizeUserName);
});


console.log(id['posts']['12']['author']);