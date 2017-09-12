var total=0;

//Première solution
for(var i = 2; i < process.argv.length; i++){
    total += parseInt(process.argv[i]);
}

console.log(total);

//deuxième solution (avec forEach)
total =0;

process.argv.forEach((item, index)=>{
    if(index > 1){
        total += parseInt(item);
    }
});

console.log(total);

//Troisième solution avec filter map reduce

total = 0;

total = process.argv
    .filter( (item, index) => { return index >1 })
    .map( (item) => { return parseInt(item)})
    .reduce( (acc, current) => { return acc + current});

console.log(total);