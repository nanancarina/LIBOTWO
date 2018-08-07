let books = [
    { "title": "Quick Reference for the Mechanical Engineering PE Exam / Edition 4", "author": "Michael R. Lindeburg PE", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9781888577808_p0_v2_s192x300.jpg"  },
    { "title": "The Elements of Statistics with Applications to Economics and the Social Sciences ", "author": "James B. Ramsey", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780534371111_p0_v1_s192x300.jpg"  },
    { "title": "The Atmosphere: An Introduction to Meteorology", "author": " Frederick K. Lutgens, Edward J. Tarbuck, Dennis G Tasa", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780321756312_p0_v1_s192x300.jpg"  },
    { "title": "Goat Medicine", "author": "Mary C.Smith", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780781796439_p0_v1_s192x300.jpg"  },
    { "title": "Elementary Algebra for College Students", "author": "Allen R. Angel, Michael Ziegler", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780321653130_p0_v1_s192x300.jpg"  },
    { "title": "Introductory Chemistry: Concepts & Connections", "author": "Charles H. Corwin", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780132321488_p0_v1_s192x300.jpg"  },
    { "title": "Principles of Chemistry: A Molecular Approach", "author": "Nivaldo J. Tro", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780321560049_p0_v1_s192x300.jpg"  },
    { "title": "Atlas of Human Anatomy", "author": "Frank H. Netter", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9781455704187_p0_v8_s550x406.jpg"  },
    { "title": "Basic Physics", "author": "Karl F. Kuhn", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780471134473_p0_v3_s192x300.jpg"  },
    { "title": "Laboratory Manual for Biological Chemistry", "author": "", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9780321811851_p0_v1_s192x300.jpg"  },
    { "title": "Modern Refrigeration and Air Conditioning", "author": "", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9781631263545_p0_v1_s192x300.jpg"  },
    { "title": "Porth's Pathophysiology", "author": "", "section": "science", "image": "https://prodimage.images-bn.com/pimages/9781451146004_p0_v1_s192x300.jpg"  },

]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "science") {
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

