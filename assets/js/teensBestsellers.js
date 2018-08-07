let books = [
    { "title": "Bridge of Clay", "author": "Markus Zusak", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780375845598_p0_v3_s480x700.jpg"  },
    { "title": "Everything, Everything", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780553496673_p0_v3_s470x700.jpg"  },
    { "title": "The Outsiders", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780425290316_p0_v1_s464x700.jpg"  },
    { "title": "Children of Blood and Bone", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781250295446_p0_v6_s467x700.jpg"  },
    { "title": "Into the Wild", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780385486804_p0_v4_s453x700.jpg"  },
    { "title": "The Giver", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780544336261_p0_v4_s465x700.jpg"  },
    { "title": "The Hunger Games", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780439023528_p0_v1_s192x300.jpg"  },
    { "title": "Divergent", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780062387240_p0_v1_s192x300.jpg"  },
    { "title": "The Darkest Minds", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781368023238_p0_v2_s466x700.jpg"  },
    { "title": "Life of Pi", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780156027328_p0_v3_s398x598.jpg"  },
    { "title": "City of Bones", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781481455923_p0_v11_s192x300.jpg"  },
    { "title": "The Maze Runner", "author": "", "section": "teensBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780385737951_p0_v5_s192x300.jpg"  }
  

]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "teensBestsellers") {
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

