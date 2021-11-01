function tinggiBadan () {
    var a = 170;
    var b = 155;
    var c = 161;

    var tinggi = [a,b,c];

    if (tinggi == tinggi){
        console.log(Math.max.apply(Math, tinggi));
    }else{
        console.log('Gagal')
    }

    console.log(tinggi.sort(function(a,b){return (b - a)}));
}

tinggiBadan();
