let books = [
    { "title": "First Day Jitters", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781580890618_p0_v4_s560x700.jpg"  },
    { "title": "Dog Man", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781338302493_p0_v2_s473x700.jpg"  },
    { "title": "Tales of a Fourth Grade Nothing", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780142408810_p0_v2_s456x700.jpg"  },
    { "title": "The Lost Continent", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781338318500_p0_v1_s463x700.jpg"  },
    { "title": "My Mouth Is A Volcano ", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781931636858_p0_v1_s441x400.jpg"  },
    { "title": "The Girl Who Never Made Mistakes", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781402255441_p0_v1_s500x387.jpg"  },
    { "title": "Restart", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781338053807_p0_v2_s376x547.jpg"  },
    { "title": "The Most Magnificent Thing", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781554537044_p0_v2_s700x700.jpg"  },
    { "title": "Where the Red Fern Grows", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780440412670_p0_v2_s475x700.jpg"  },
    { "title": "The Day Crayone Quit", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780399255373_p0_v3_s696x700.jpg"  },
    { "title": "Charlotte's Web", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9780064400558_p0_v3_s430x642.jpg"  },
    { "title": "We're All Wonders", "author": "", "section": "teens", "image": "https://prodimage.images-bn.com/pimages/9781524766498_p0_v2_s192x300.jpg"  }

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

