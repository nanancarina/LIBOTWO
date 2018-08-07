let books = [
    { "title": "Ghost", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9781481450164_p0_v1_s460x700.jpg"  },
    { "title": "The Burning Maze", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9781368024068_p0_v4_s459x700.jpg"  },
    { "title": "Why Don't We: In the Limelight ", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780062871312_p0_v1_s501x646.jpg"  },
    { "title": "Hatchet", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9781416936473_p0_v1_s402x600.jpg"  },
    { "title": "Roll of Thunder, Hear My Cry", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780140384512_p0_v3_s456x700.jpg"  },
    { "title": "The Lightning Theif", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780786838653_p0_v9_s473x700.jpg"  },
    { "title": "The Wild Robot", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780316381994_p0_v2_s470x700.jpg"  },
    { "title": "The One and Only Ivan", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780061992278_p0_v1_s457x646.jpg"  },
    { "title": "Save Me a Seat ", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780545846615_p0_v3_s482x700.jpg"  },
    { "title": "Number the Stars", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780547577098_p0_v2_s473x700.jpg"  },
    { "title": "Island of the Blue Dolphins", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9780547328614_p0_v2_s470x700.jpg"  },
    { "title": "The Invisible Boy", "author": "", "section": "kidsTwo", "image": "https://prodimage.images-bn.com/pimages/9781582464503_p0_v1_s560x700.jpg"  },
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "kidsTwo") {
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

