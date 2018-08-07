let books = [
    { "title": "MyMathLab -- Standalone Access Card", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9780321199911_p0_v2_s192x300.jpg"  },
    { "title": "Children's Mathematics: Cognitively Guided Instruction", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9780325052878_p0_v2_s192x300.jpg"  },
    { "title": "McDougal Littell Jurgensen Geometry: Student Edition 2000 / Edition 5", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9780395977279_p0_v1_s192x300.jpg"  },
    { "title": "How to Lie with Statistics", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9780393310726_p0_v2_s192x300.jpg"  },
    { "title": "Trigonometry / Edition 11", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9780134217437_p0_v1_s192x300.jpg"  },
    { "title": "Dosage Calculations / Edition 9", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9781439058473_p0_v1_s192x300.jpg"  },
    { "title": "Thinking in Systems: A Primer", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9781603580557_p0_v2_s192x300.jpg"  },
    { "title": "Schaum's Outline of College Algebra,", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9780071821810_p0_v3_s192x300.jpg"  },
    { "title": "Making Number Talks Matter", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9781571109989_p0_v2_s192x300.jpg"  },
    { "title": "Curren's Math for Meds", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9781111540913_p0_v1_s192x300.jpg"  },
    { "title": "Research Design", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9781506386706_p0_v1_s192x300.jpg"  },
    { "title": "Basic Biostatistics ", "author": "", "section": "math", "image": "https://prodimage.images-bn.com/pimages/9781284036015_p0_v1_s192x300.jpg"  }

]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "math") {
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

