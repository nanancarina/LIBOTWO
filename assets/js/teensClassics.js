let books = [
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  },
    { "title": "", "author": "", "section": "teensClassics", "image": ""  }
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

