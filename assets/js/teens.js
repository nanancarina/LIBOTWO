let books = [
      { "title": "The Adventures of Tom Sawyer", "author": "Mark Twain", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593081393_p0_v1_s192x300.jpg" },
    { "title": "Adventures of Huckleberry Finn", "author": "Mark Twain", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593081126_p0_v1_s192x300.jpg" },
    { "title": "Moby Dick", "author": "Herman Melville", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593080181_p0_v4_s192x300.jpg" },
    { "title": "The Scarlet Letter", "author": "Nathaniel Hawthorne", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593082079_p0_v4_s192x300.jpg" },
    { "title": "The Souls of Black Folk", "author": "W. E. B. Du Bois, Farah Jasmine Griffin (Introduction)", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593080143_p0_v4_s192x300.jpg" },
    { "title": "Little Women", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593081089_p0_v4_s192x300.jpg"  },
    { "title": "Ivanhoe", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593082468_p0_v1_s192x300.jpg"  },
    { "title": "The House of the Seven Gables", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593082314_p0_v1_s192x300.jpg"  },
    { "title": "Treasure Island", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593083687_p0_v1_s192x300.jpg"  },
    { "title": "My Antonia", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593080242_p0_v4_s192x300.jpg"  },
    { "title": "The Woman in White", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593082802_p0_v4_s192x300.jpg"  },
    { "title": "Man in the Iron Mask", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781593082338_p0_v1_s192x300.jpg"  },
     { "title": "Bridge of Clay", "author": "Markus Zusak", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780375845598_p0_v3_s480x700.jpg"  },
    { "title": "Everything, Everything", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780553496673_p0_v3_s470x700.jpg"  },
    { "title": "The Outsiders", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780425290316_p0_v1_s464x700.jpg"  },
    { "title": "Children of Blood and Bone", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781250295446_p0_v6_s467x700.jpg"  },
    { "title": "Into the Wild", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780385486804_p0_v4_s453x700.jpg"  },
    { "title": "The Giver", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780544336261_p0_v4_s465x700.jpg"  },
    { "title": "The Hunger Games", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780439023528_p0_v1_s192x300.jpg"  },
    { "title": "Divergent", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780062387240_p0_v1_s192x300.jpg"  },
    { "title": "The Darkest Minds", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781368023238_p0_v2_s466x700.jpg"  },
    { "title": "Life of Pi", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780156027328_p0_v3_s398x598.jpg"  },
    { "title": "City of Bones", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781481455923_p0_v11_s192x300.jpg"  },
    { "title": "The Maze Runner", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780385737951_p0_v5_s192x300.jpg"  }

]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "teens") {
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

