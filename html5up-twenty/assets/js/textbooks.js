let books = [
    { "title": "Quick Reference for the Mechanical Engineering PE Exam / Edition 4", "author": "Michael R. Lindeburg PE", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781888577808_p0_v2_s192x300.jpg"  },
    { "title": "The Elements of Statistics with Applications to Economics and the Social textbookss ", "author": "James B. Ramsey", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780534371111_p0_v1_s192x300.jpg"  },
    { "title": "The Atmosphere: An Introduction to Meteorology", "author": " Frederick K. Lutgens, Edward J. Tarbuck, Dennis G Tasa", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780321756312_p0_v1_s192x300.jpg"  },
    { "title": "Goat Medicine", "author": "Mary C.Smith", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780781796439_p0_v1_s192x300.jpg"  },
        { "title": "MytextbooksLab -- Standalone Access Card", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780321199911_p0_v2_s192x300.jpg"  },
            { "title": "The textbooks of the Ancient World", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780393059748_p0_v2_s192x300.jpg"  },
    { "title": "Caesar: Life of a Colossus", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780300126891_p0_v1_s192x300.jpg"  },
    { "title": "On Justice, Power, and Human Nature: ", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780872201682_p0_v2_s192x300.jpg"  },
    { "title": "The Parthenon", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780674055636_p0_v1_s192x300.jpg"  },
    { "title": "Africa in World textbooks ", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780205053995_p0_v1_s192x300.jpg"  },
    { "title": "African Origin of Civilization: Myth or Reality", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781556520723_p0_v1_s192x300.jpg"  },
    { "title": "textbooks of Africa", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780230308473_p0_v4_s192x300.jpg"  },
    { "title": "Serpent in the Sky", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780835606912_p0_v4_s192x300.jpg"  },
    { "title": "Washington's Crossing", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780195181593_p0_v2_s192x300.jpg"  },
    { "title": "The Glorious Cause", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780195315882_p0_v1_s192x300.jpg"  },
    { "title": "Experiencing Architecture", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780262680028_p0_v1_s192x300.jpg"  },
    { "title": "Facing East from Indian Country", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780674011175_p0_v1_s192x300.jpg"  },
    { "title": "Children's textbooksematics: Cognitively Guided Instruction", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780325052878_p0_v2_s192x300.jpg"  },
    { "title": "McDougal Littell Jurgensen Geometry: Student Edition 2000 / Edition 5", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780395977279_p0_v1_s192x300.jpg"  },
    { "title": "How to Lie with Statistics", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780393310726_p0_v2_s192x300.jpg"  },
    { "title": "Trigonometry / Edition 11", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780134217437_p0_v1_s192x300.jpg"  },
    { "title": "Dosage Calculations / Edition 9", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781439058473_p0_v1_s192x300.jpg"  },
    { "title": "Thinking in Systems: A Primer", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781603580557_p0_v2_s192x300.jpg"  },
    { "title": "Schaum's Outline of College Algebra,", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780071821810_p0_v3_s192x300.jpg"  },
    { "title": "Making Number Talks Matter", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781571109989_p0_v2_s192x300.jpg"  },
    { "title": "Curren's textbooks for Meds", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781111540913_p0_v1_s192x300.jpg"  },
    { "title": "Research Design", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781506386706_p0_v1_s192x300.jpg"  },
    { "title": "Basic Biostatistics ", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781284036015_p0_v1_s192x300.jpg"  },
    { "title": "Elementary Algebra for College Students", "author": "Allen R. Angel, Michael Ziegler", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780321653130_p0_v1_s192x300.jpg"  },
    { "title": "Introductory Chemistry: Concepts & Connections", "author": "Charles H. Corwin", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780132321488_p0_v1_s192x300.jpg"  },
    { "title": "Principles of Chemistry: A Molecular Approach", "author": "Nivaldo J. Tro", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780321560049_p0_v1_s192x300.jpg"  },
    { "title": "Atlas of Human Anatomy", "author": "Frank H. Netter", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781455704187_p0_v8_s550x406.jpg"  },
    { "title": "Basic Physics", "author": "Karl F. Kuhn", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780471134473_p0_v3_s192x300.jpg"  },
    { "title": "Laboratory Manual for Biological Chemistry", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9780321811851_p0_v1_s192x300.jpg"  },
    { "title": "Modern Refrigeration and Air Conditioning", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781631263545_p0_v1_s192x300.jpg"  },
    { "title": "Porth's Pathophysiology", "author": "", "section": "textbooks", "image": "https://prodimage.images-bn.com/pimages/9781451146004_p0_v1_s192x300.jpg"  },

]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "textbooks") {
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

