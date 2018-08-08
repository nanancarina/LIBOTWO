let books = [
     { "title": "The Adventures of Tom Sawyer", "author": "Mark Twain", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081393_p0_v1_s192x300.jpg" },
    { "title": "Adventures of Huckleberry Finn", "author": "Mark Twain", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081126_p0_v1_s192x300.jpg" },
    { "title": "Moby Dick", "author": "Herman Melville", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080181_p0_v4_s192x300.jpg" },
    { "title": "The Scarlet Letter", "author": "Nathaniel Hawthorne", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082079_p0_v4_s192x300.jpg" },
    { "title": "The Souls of Black Folk", "author": "W. E. B. Du Bois, Farah Jasmine Griffin (Introduction)", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080143_p0_v4_s192x300.jpg" },
    { "title": "Little Women", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081089_p0_v4_s192x300.jpg"  },
    { "title": "Ivanhoe", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082468_p0_v1_s192x300.jpg"  },
    { "title": "The House of the Seven Gables", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082314_p0_v1_s192x300.jpg"  },
    { "title": "Treasure Island", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593083687_p0_v1_s192x300.jpg"  },
    { "title": "My Antonia", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080242_p0_v4_s192x300.jpg"  },
    { "title": "The Woman in White", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082802_p0_v4_s192x300.jpg"  },
    { "title": "Man in the Iron Mask", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082338_p0_v1_s192x300.jpg"  }
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "teensClassics") {
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

