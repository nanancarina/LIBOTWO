let books = [
    { "title": "Anna Karenina", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080273_p0_v4_s192x300.jpg"  },
    { "title": "The War of the Worlds", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593083625_p0_v1_s192x300.jpg"  },
    { "title": "Paradise Lost", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080952_p0_v4_s192x300.jpg"  },
    { "title": "Les Miserables", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080662_p0_v4_s192x300.jpg"  },
    { "title": "The Jungle", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081188_p0_v1_s192x300.jpg"  },
    { "title": "The Iliad", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082321_p0_v1_s192x300.jpg"  },
    { "title": "The Beautiful and Damned", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082451_p0_v1_s192x300.jpg"  },
    { "title": "The Age of Innocence", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081430_p0_v1_s192x300.jpg"  },
    { "title": "The Hunchback of Notre Dame", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081409_p0_v1_s192x300.jpg"  },
    { "title": "Sense and Sensibility", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081256_p0_v4_s192x300.jpg"  },
    { "title": "Journey to the Center of the Earth", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082529_p0_v3_s192x300.jpg"  },
    { "title": "Oliver Twist", "author": " ", "section": "adultsClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082062_p0_v1_s192x300.jpg"  }


]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "adultsClassics") {
        //   sectionDiv.innerHTML+=`${book["src"]}`
        bookHolder.innerHTML += `<div id='bookHolder'>
                                    <div class="book">
                                        <div class = "entireBook">
                                        <a href="addToCart.html">
                    					<img src ="${book.image}" height="160" width="110"/>
                    					</a>
                    					<h3 id = "bookTitle">${book.title}</h3>
                    					<h3 id = "bookTitle">Price: $5.00</h3>
                    				</div>
                    				</div>
                    				</div>
                    				`
                    				
    }
})
// document.getElementById("cartButton").addEventListener("click", (e)=>{
//     alert("Item has been sucessfully added to your cart!")
// })

