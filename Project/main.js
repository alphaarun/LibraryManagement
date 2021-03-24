class Book {
    constructor(bookName, isbn, author,publish){
        this.name = bookName;
        this.isbn=isbn;
        this.author=author;
        this.publisher=publish
    }

    // get name (){
    //     return this.name;
    // }

    // set name(bookName){
    //     this.name=this.bookName
    // }

    isAvailable(){
        console.log("Not Available");
    }
}

class Author {
    constructor(name,genre,age){
        this.name=name;
        this.genre=genre;
        this.age=age;
    }
}

class Publisher { 
    constructor(name,genre){
        this.genre=genre;
        this.pubName=name;
    }

    getGenre(){
        return this.genre;
    }
    
}

class Genre{
    constructor(genreType){
        this.genreType=genreType;
    }
}

class Library {
    constructor (location, libraryId){
        this.location=location;
        this.libraryId=libraryId
    }

}

// document.getElementById('searchButton').addEventListener('click', function(){
//     console.log("Hello from event");
// });

var  l1 = new Library("Chennai",1);
l1.name="Anna Centenary Library";
var thriller = new Genre("Thriller");
var horror = new Genre("Horror");
var romance = new Genre("Romance");
var fantasy = new Genre("Fantasy");

var publisher1 = new Publisher("Jaico Publishing House",thriller);
var publisher2 = new Publisher("WestLand Publication",horror);
var publisher3 = new Publisher("Rupa Publication",romance);
var publisher4 = new Publisher("Become Shakesphere",fantasy);

var author1 = new Author("Sarah Pekkanen",thriller,40);
var author2 = new Author("S. J. Watson",thriller,41);
var author3 = new Author("Mary Shelley",horror,42);
var author4 = new Author("Bram Stoker",horror,43);
var author5 = new Author("Courtney Mila",romance,44);
var author6 = new Author("Lewis Carroll",fantasy,50);

var book1 = new Book("An Anonymous Girl",12345,author1,publisher1);
var book2 = new Book("Before I Go To Sleep",2345,author2,publisher1);
var book3 = new Book("Frankenstein",3456,author3,publisher2);
var book4 = new Book("Dracula",4567,author4,publisher2);
var book5 = new Book("Hold Me",5678,author5,publisher3);
var book6 = new Book("Alice’s Adventures in Wonderland",6789,author6,publisher4);

var  arrayBooks = [book1,book2,book3,book4,book5,book6];


function myFunctions() {
    var data = document.getElementById("searchBox").value;
    console.log(data);
}            
function clicks(){
      var txt = document.getElementById('searchBox');

      let oldElement = document.getElementById('list');//.remove();
          oldElement.remove();
      let div =  document.createElement('div');
          div.className='bookDetails';
          div.id="list";

      let result =arrayBooks.filter(x => x.name === txt.value );
      if(result.length>0){   
          let book = result[0];
        let detailsDiv = document.createElement('ul');
        const bookElement = document.createElement('li');
        const isbn=document.createElement('li');
        const authorName=document.createElement('li');
        const publisherName=document.createElement('li');
        const genre=document.createElement('li');

        
        bookElement.innerText = "Book Name : "+book.name;
        isbn.innerText = "ISBN : "+book.isbn;
        authorName.innerText = "Author Name : "+book.author.name;
        publisherName.innerText = "Publisher : "+book.publisher.pubName;
        genre.innerText = "Genre : "+book.publisher.getGenre().genreType;

        detailsDiv.appendChild(bookElement);
        detailsDiv.appendChild(isbn);
        detailsDiv.appendChild(authorName);
        detailsDiv.appendChild(publisherName);
        detailsDiv.appendChild(genre);
        
          div.appendChild(detailsDiv);
         document.getElementById('result').appendChild(div);
      }else{
        div.innerHTML = "<b> "+txt.value + " </b> is not avialble! Search any of the below Books";
        let br =document.createElement('BR');
        div.appendChild(br);
        let detailsDiv = document.createElement('ul');
        arrayBooks.forEach(element => {
            let li = document.createElement('li');
            li.innerText=element.name;
            detailsDiv.appendChild(li);
        });
        div.appendChild(detailsDiv);
        document.getElementById('result').appendChild(div);
      }
}
