let books = [
    { "title": "Ghost", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781481450164_p0_v1_s460x700.jpg"  },
    { "title": "The Burning Maze", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781368024068_p0_v4_s459x700.jpg"  },
    { "title": "Why Don't We: In the Limelight ", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780062871312_p0_v1_s501x646.jpg"  },
    { "title": "Hatchet", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781416936473_p0_v1_s402x600.jpg"  },
    { "title": "Roll of Thunder, Hear My Cry", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780140384512_p0_v3_s456x700.jpg"  },
    { "title": "The Lightning Theif", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780786838653_p0_v9_s473x700.jpg"  },
    { "title": "The Wild Robot", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780316381994_p0_v2_s470x700.jpg"  },
       { "title": "First Day Jitters", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781580890618_p0_v4_s560x700.jpg"  },
    { "title": "Dog Man", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781338302493_p0_v2_s473x700.jpg"  },
    { "title": "Tales of a Fourth Grade Nothing", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780142408810_p0_v2_s456x700.jpg"  },
    { "title": "The Lost Continent", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781338318500_p0_v1_s463x700.jpg"  },
    { "title": "My Mouth Is A Volcano ", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781931636858_p0_v1_s441x400.jpg"  },
    { "title": "The Girl Who Never Made Mistakes", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781402255441_p0_v1_s500x387.jpg"  },
    { "title": "Restart", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781338053807_p0_v2_s376x547.jpg"  },
    { "title": "The Most Magnificent Thing", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781554537044_p0_v2_s700x700.jpg"  },
    { "title": "Where the Red Fern Grows", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780440412670_p0_v2_s475x700.jpg"  },
    { "title": "The Day Crayone Quit", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780399255373_p0_v3_s696x700.jpg"  },
    { "title": "Charlotte's Web", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780064400558_p0_v3_s430x642.jpg"  },
    { "title": "We're All Wonders", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781524766498_p0_v2_s192x300.jpg"  },
    { "title": "The One and Only Ivan", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780061992278_p0_v1_s457x646.jpg"  },
    { "title": "Save Me a Seat ", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780545846615_p0_v3_s482x700.jpg"  },
    { "title": "Number the Stars", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780547577098_p0_v2_s473x700.jpg"  },
    { "title": "Island of the Blue Dolphins", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9780547328614_p0_v2_s470x700.jpg"  },
    { "title": "The Invisible Boy", "author": "", "section": "kids", "image": "https://prodimage.images-bn.com/pimages/9781582464503_p0_v1_s560x700.jpg"  },
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "kids") {
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

