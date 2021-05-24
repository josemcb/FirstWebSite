function bringInfo(){
    var contenido = document.querySelector("#contenido");    
    fetch('data/info1.txt')
    .then(res => res.text())
    .then(data =>{
        //console.log(data)
        contenido.innerHTML = data;
    });
}

function bringInfoJSON(){
    var title = document.querySelector("#title");
    var title2 = document.querySelector("#title2");
    //var image = document.querySelector("#image");
    var contenido = document.querySelector("#contenido");    
    fetch('data/catalogo.json')
    .then(res => res.json())
    .then(data =>{
        //console.log(data)
        var name = data.catalogo['0'].product.name
        var author = data.catalogo['0'].product.author
        //var image = "<img src=" + data.catalogo['0'].product.image + "alt='imagen del producto' class='cover'>"
        var about = "<p>" + data.catalogo['0'].product.about + "</p>"
        var price = "<p class='infoText'>Price: $" + data.catalogo['0'].product.price
        var type = "<p class='infoText'>Type: " + data.catalogo['0'].product.type
        var b_lenght = "<p class='infoText'>Length: " + data.catalogo['0'].product.b_lenght
        var language = "<p class='infoText'>Language: " + data.catalogo['0'].product.language
        var publisher = "<p class='infoText'>Publisher: " + data.catalogo['0'].product.publisher
        var pub_date = "<p class='infoText'>Publication date: " + data.catalogo['0'].product.pub_date
        title.innerHTML = name;
        title2.innerHTML = author;
        //image.innerHTML = image;
        contenido.innerHTML = about + price + type + b_lenght + language + publisher + pub_date;
    });
}