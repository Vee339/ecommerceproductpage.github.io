const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
var count = document.querySelector(".count")
var countVal = document.querySelector(".count").innerHTML
var thumbnailImages = document.querySelectorAll(".content .thumbnailImg")
const mainImage = document.querySelector(".content #mainImg")
const gallery = document.querySelector(".gallery")

const galleryMainImage = document.querySelector(".gallery #mainImg")
var galleryThumbnailImages = document.querySelectorAll(".gallery .thumbnailImg")
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const close = document.querySelector(".close")

const cart = document.querySelector(".cart")
const cartBox = document.querySelector(".cartBox")


for(a=0; a<thumbnailImages.length; a++){
    thumbnailImages[a].addEventListener("click",function(){
        
        for(b=0; b<thumbnailImages.length; b++){
            thumbnailImages[b].classList.remove("active")
        }  
           mainImage.src = this.children[0].src
           this.classList.add("active")
    })

}

plus.addEventListener("click",function(){
    countVal = Number(countVal) + 1
    count.innerHTML = countVal
})

minus.addEventListener("click",function(){
    if(countVal > 1){
           countVal = Number(countVal) - 1
           count.innerHTML = countVal 
    }

})

mainImage.addEventListener("click",function(){
    gallery.classList.add("active")
})


cart.addEventListener("click",function(){
    cartBox.classList.toggle("active")
})

for(a=0; a<galleryThumbnailImages.length; a++){
    galleryThumbnailImages[a].addEventListener("click",function(){
        
        for(b=0; b<galleryThumbnailImages.length; b++){
            galleryThumbnailImages[b].classList.remove("active")
        }  
           galleryMainImage.src = this.children[0].src
           this.classList.add("active")
    })

}

previous.addEventListener("click",function(){
    console.log("previous")
})



next.addEventListener("click",function(){
    var imageSrcArray = galleryMainImage.src.split("")
    var imageNum = imageSrcArray[43]
    var newImageNum = Number(imageNum) + 1
    console.log(newImageNum)
})

close.addEventListener("click",function(){
    gallery.classList.remove("active")
})