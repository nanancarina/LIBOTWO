let books = [
    { "title": "The Other Woman ", "author": " Daniel Silva", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9780062883865_p0_v2_s192x300.jpg"  },
    { "title": "Origin", "author": "Dan Brown", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9780525563709_p0_v1_s192x300.jpg"  },
    { "title": "All We Ever Wanted", "author": "Emily Griffin", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9780399178924_p0_v5_s192x300.jpg"  },
    { "title": "Calypso", "author": "David Sedaris", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9780316392389_p0_v1_s192x300.jpg" },
    { "title": "Educated", "author": "Tara Westover", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9780399590504_p0_v4_s192x300.jpg" },
    { "title": "Fahrenheit 451", "author": "Ray Bradbury", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781451673319_p0_v7_s192x300.jpg" },
    { "title": "Indianapolis", "author": "Lynn Vincent, Sara Vladic", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781501135941_p0_v3_s192x300.jpg" },
    { "title": "The Couple Next Door", "author": "Shari Lapena", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9780525505310_p0_v1_s192x300.jpg" },
    { "title": "The Lying Game", "author": "Ruth Ware", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781501156205_p0_v4_s451x700.jpg" },
    { "title": "A Man Called Ove", "author": "Fredrik Backman", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781476738024_p0_v5_s450x700.jpg" },
    { "title": "Spymaster", "author": "Brad Thor", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781476789415_p0_v3_s460x700.jpg" },
        { "title": "Anna Karenina", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593080273_p0_v4_s192x300.jpg"  },
    { "title": "The War of the Worlds", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593083625_p0_v1_s192x300.jpg"  },
    { "title": "Paradise Lost", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593080952_p0_v4_s192x300.jpg"  },
    { "title": "Les Miserables", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593080662_p0_v4_s192x300.jpg"  },
    { "title": "The Jungle", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593081188_p0_v1_s192x300.jpg"  },
    { "title": "The Iliad", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593082321_p0_v1_s192x300.jpg"  },
    { "title": "The Beautiful and Damned", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593082451_p0_v1_s192x300.jpg"  },
    { "title": "The Age of Innocence", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593081430_p0_v1_s192x300.jpg"  },
    { "title": "The Hunchback of Notre Dame", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593081409_p0_v1_s192x300.jpg"  },
    { "title": "Sense and Sensibility", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593081256_p0_v4_s192x300.jpg"  },
    { "title": "Journey to the Center of the Earth", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593082529_p0_v3_s192x300.jpg"  },
    { "title": "Oliver Twist", "author": " ", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781593082062_p0_v1_s192x300.jpg"  },
    { "title": "When Life Gives You Lululemons ", "author": "Lauren Weisberger", "section": "adults", "image": "https://prodimage.images-bn.com/pimages/9781476778440_p0_v4_s458x700.jpg" }
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "adults") {
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

