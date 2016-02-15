//promises
var uid = 12;
var url = `user/${uid}`;


//Fetch
fetch(url).then(function(res){
	if(res.ok){
		res.json().then(function(data){
			console.log(data.uid);
		});
	}
});

//Templete
var name = "Bob", time = "today";
var html = `Hello ${name}, how are you ${time}?`;
document.getElementById('show').innerHTML = html;


//Generators
function* numbers () {
  yield 1;
  yield 2;
  return 3;
}

var g = numbers();
console.log(g.next());
// <- { done: false, value: 1 }
console.log(g.next());
// <- { done: false, value: 2 }
console.log(g.next());
// <- { done: true, value: 3 }

