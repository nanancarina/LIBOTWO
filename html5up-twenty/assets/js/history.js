let books = [
    { "title": "The History of the Ancient World", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780393059748_p0_v2_s192x300.jpg"  },
    { "title": "Caesar: Life of a Colossus", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780300126891_p0_v1_s192x300.jpg"  },
    { "title": "On Justice, Power, and Human Nature: ", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780872201682_p0_v2_s192x300.jpg"  },
    { "title": "The Parthenon", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780674055636_p0_v1_s192x300.jpg"  },
    { "title": "Africa in World History ", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780205053995_p0_v1_s192x300.jpg"  },
    { "title": "African Origin of Civilization: Myth or Reality", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9781556520723_p0_v1_s192x300.jpg"  },
    { "title": "History of Africa", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780230308473_p0_v4_s192x300.jpg"  },
    { "title": "Serpent in the Sky", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780835606912_p0_v4_s192x300.jpg"  },
    { "title": "Washington's Crossing", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780195181593_p0_v2_s192x300.jpg"  },
    { "title": "The Glorious Cause", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780195315882_p0_v1_s192x300.jpg"  },
    { "title": "Experiencing Architecture", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780262680028_p0_v1_s192x300.jpg"  },
    { "title": "Facing East from Indian Country", "author": "", "section": "history", "image": "https://prodimage.images-bn.com/pimages/9780674011175_p0_v1_s192x300.jpg"  }

]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "history") {
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

