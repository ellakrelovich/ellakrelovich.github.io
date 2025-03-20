var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'It was 20 fahrenheit in the ice house, so :insertx: made a fire. The fire got lit too close to the :inserty:, and it started to burn, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: often buys things that are too light for fire, this :inserty: weighs 5 pounds, and it was a big fire.';
var insertX = ['Fred', 'Goober', 'Ra the Sun God'];
var insertY = ['carpet', 'literal ice house', 'tapastry'];
var insertZ = ['turned into a fairy and flew away','made an underground volcano explode','melted the ice, duh'];

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(5 * 0.0714286) + ' stone';
    var temperature =  Math.round((20-32)* (5/9)) + ' centigrade';
    newStory = newStory.replace('5 pounds', weight);
    newStory = newStory.replace('20 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
