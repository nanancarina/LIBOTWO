let books = [
    { "title": "Girl, Wash Your Face", "author": "Rachel Hollis", "section": "general", "price": "$5.00", "image": "https://prodimage.images-bn.com/pimages/9781400201655_p0_v7_s459x700.jpg"  },
    { "title": "Crazy Rich Asians", "author": "Kevin Kwan", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780345803788_p0_v4_s454x700.jpg" },
    { "title": "Becoming", "author": "Michelle Obama", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9781524763138_p0_v3_s460x700.jpg" },
    { "title": "The Hate U Give", "author": "Angie Thomas", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780062853332_p0_v1_s463x700.jpg" },
    { "title": "Sharp Objects", "author": " Gillian Flynn", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780307341556_p0_v9_s426x700.jpg" },
    { "title": "The Alchemist", "author": " Paulo Coelho", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780062315007_p0_v2_s427x646.jpg" },
    { "title": "Rich People Problems", "author": "Kevin Kwan", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780525432371_p0_v4_s454x700.jpg" },
    { "title": "China Rich Girlfriend ", "author": "Kwvin Kwan", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780804172066_p0_v2_s453x700.jpg" },
    { "title": "Eleanor Oliphant Is Completely Fine", "author": " Gail Honeyman", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780735220690_p0_v1_s465x700.jpg" },
    { "title": "Outliers: The Story of Success ", "author": "Malcolm Gladwell", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780316017930_p0_v1_s395x600.jpg" },
    { "title": "Cottage by the Sea", "author": "Debbie Macomber", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9781984800565_p0_v1_s421x642.jpg" },
     { "title": "A Long Walk to Water ", "author": "Linda Sue Park", "section": "general",  "image": "https://prodimage.images-bn.com/pimages/9780547577319_p0_v1_s397x600.jpg" },
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "general") {
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

