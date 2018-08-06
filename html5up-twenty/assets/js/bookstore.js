let books = [
    
    { "title": "Admission Assessment Exam Review / Edition 4", "author": "HESI", "section": "medicineTextbooks", "image": "https://prodimage.images-bn.com/pimages/9780323353786_p0_v1_s192x300.jpg" },
    
    
    { "title": "Mosby's Essential Sciences for Therapeutic Massage: Anatomy, Physiology, Biomechanics, and Pathology / Edition 5", "author": "Sandy Fritz", "section": "medicineTextbooks", "image": "https://prodimage.images-bn.com/pimages/9780323393058_p0_v1_s192x300.jpg" },
    
    { "title": "Public Health Nursing: Population Centered Health Care in the Community", "author": "Marcia Stanhope", "section": "medicineTextbooks", "image": "https://prodimage.images-bn.com/pimages/9780323321532_p0_v2_s192x300.jpg" },
     
    { "title": "The Anatomy Coloring Book / Edition 4", "author": "Wynn Kapit, Lawrence M. Elson", "section": "medicineTextbooks", "image": "https://prodimage.images-bn.com/pimages/9780321832016_p0_v2_s192x300.jpg" },
    
    
    
]

//link image
books.forEach(book => {
    let bookHolder= document.querySelector("#bookHolder")
    if (book["section"] == "medicineTextbooks") {
        //   sectionDiv.innerHTML+=`${book["src"]}`
        bookHolder.innerHTML += `<div id='bookHolder'>
                                    <div class="book">
                    					<img src ="${book.image}"</>
                    				</div>
                    				</div>`
    }
})
// document.getElementById("cartButton").addEventListener("click", (e)=>{
//     alert("Item has been sucessfully added to your cart!")
// })

