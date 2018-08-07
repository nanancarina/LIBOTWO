let books = [
    { "title": "Adventures of Tom Sawyer", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081393_p0_v1_s192x300.jpg"  },
    { "title": "Treasure Island", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082475_p0_v4_s192x300.jpg"  },
    { "title": "Little Women", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081089_p0_v4_s192x300.jpg"  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "The Hunchback of Notre Dame", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081409_p0_v1_s192x300.jpg"  },
    { "title": "Man in the Iron Mask", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082338_p0_v1_s192x300.jpg"  },
    { "title": "The Woman in White", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082802_p0_v4_s192x300.jpg"  },
    { "title": "Ivanhoe", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082468_p0_v1_s192x300.jpg"  },
    { "title": "", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593082109_p0_v1_s192x300.jpg"  },
    { "title": "The Jungle Book", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593081096_p0_v1_s192x300.jpg"  },
    { "title": "Vanity Fair", "author": "", "section": "teensClassics", "image": "https://prodimage.images-bn.com/pimages/9781593080716_p0_v4_s192x300.jpg"  }

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

