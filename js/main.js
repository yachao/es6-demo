import Immutable from 'immutable';
import {Map} from 'immutable';
import {List} from 'immutable';

//promises
let uid = 12;
let url = `user/${uid}`;


//Fetch
fetch(url).then(function(res){
	if(res.ok){
		res.json().then(function(data){
			// console.log(data.uid);
		});
	}
});

//Templete
let name = "Bob", time = "today";
let html = `Hello ${name}, how are you ${time}?`;
document.getElementById('show').innerHTML = html;


let map1 = Map({a:1, b:2, c:3});
let map2 = map1.set('b', 50);
let a = map1.map((v, k) => k.toUpperCase()).join('');
// console.log(a);
// console.log(map2.get('b'));

let map3 = Map({a:1, b:2, c:3, d:4});
let map4 = Map({c:10, a:20, t:30});
let obj = {d:100, o:200, g:300};
let map5 = map3.merge(map4, obj);
// console.log(map5.toObject());

let deep = Map({a:1, b:2, c:List.of(3, 4, 5)});
// console.log(deep.toObject())
// console.log(deep.toArray())
// console.log(deep.toJS())
// console.log(JSON.stringify(deep))

let nested = Immutable.fromJS({a:{b:{c:[3,4,5]}}});
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }
let nested2 = nested.mergeDeep({a:{b:{d:6}}});
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }
nested2.getIn(['a', 'b', 'd']); // 6
let nested3 = nested2.updateIn(['a', 'b', 'd'], value => value + 1);
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }
let nested4 = nested3.updateIn(['a', 'b', 'c'], list => list.push(6));
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }

let oddSquares = Immutable.Seq.of(1,2,3,4,5,6,7,8).filter(x => x % 2).map(x => x * x);
console.log(oddSquares.get(1)); //9

let seq = Immutable.Map({a:1, b:1, c:1}).toSeq();
seq.flip().map(key => key.toUpperCase()).flip().toObject();
// Map { A: 1, B: 1, C: 1 }


function aa(){
	var x = 1;
	if(true){
		var x = 3;
		console.log(x)
	}
	console.log(x)
}
aa();