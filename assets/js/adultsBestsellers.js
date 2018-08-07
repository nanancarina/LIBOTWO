let books = [
    { "title": "The Other Woman ", "author": " Daniel Silva", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780062883865_p0_v2_s192x300.jpg"  },
    { "title": "Origin", "author": "Dan Brown", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780525563709_p0_v1_s192x300.jpg"  },
    { "title": "All We Ever Wanted", "author": "Emily Griffin", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780399178924_p0_v5_s192x300.jpg"  },
    { "title": "Calypso", "author": "David Sedaris", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780316392389_p0_v1_s192x300.jpg" },
    { "title": "Educated", "author": "Tara Westover", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780399590504_p0_v4_s192x300.jpg" },
    { "title": "Fahrenheit 451", "author": "Ray Bradbury", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781451673319_p0_v7_s192x300.jpg" },
    { "title": "Indianapolis", "author": "Lynn Vincent, Sara Vladic", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781501135941_p0_v3_s192x300.jpg" },
    { "title": "The Couple Next Door", "author": "Shari Lapena", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9780525505310_p0_v1_s192x300.jpg" },
    { "title": "The Lying Game", "author": "Ruth Ware", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781501156205_p0_v4_s451x700.jpg" },
    { "title": "A Man Called Ove", "author": "Fredrik Backman", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781476738024_p0_v5_s450x700.jpg" },
    { "title": "Spymaster", "author": "Brad Thor", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781476789415_p0_v3_s460x700.jpg" },
    { "title": "When Life Gives You Lululemons ", "author": "Lauren Weisberger", "section": "adultsBestsellers", "image": "https://prodimage.images-bn.com/pimages/9781476778440_p0_v4_s458x700.jpg" }
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "adultsBestsellers") {
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

