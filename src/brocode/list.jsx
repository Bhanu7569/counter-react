
function list (){
    
    const fruits = [{id:1, name: 'Apple', calories: 95},
                 {id: 2, name: 'banana' , calories: 20}, 
                 {id: 3, name: 'coconut', calories: 92}, 
                 {id:4, name: 'pineapple', calories: 80},
                 {id:5, name: 'guava', calories: 120}];
    
    fruits.sort();

    lowcalfruits = fruits.filter(fruit => fruit.calories >= 100);
    const listitems = lowcalfruits.map(lowcalfruit => <li key={lowcalfruit.id}>{lowcalfruit.name}: <b>{lowcalfruit.calories}</b></li>);

    
    return(<ol>{listitems}</ol>);
}

export default list