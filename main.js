



const renderThings = () => {

    const textArr = [
        "/images/08e1e6e59d604cf7bd8c0cd999a5c38e_edit.jpg",
        "/images/405-sub0_.jpg",
        "/images/405-sub0_invert.jpg",
        "/images/500004851-03-01_7.jpg",
        "/images/Artwork_Test_Size_A0_6 copy.jpeg",
        "/images/08e1e6e59d604cf7bd8c0cd999a5c38e_edit.jpg",
        "/images/405-sub0_.jpg",
        "/images/405-sub0_invert.jpg",
        "/images/500004851-03-01_7.jpg",
    ]

    const myContainer = document.querySelector('.render-one')
    const mySecondContainer = document.querySelector('.render-two')

    textArr.forEach(el => {
        
        const myImage = document.createElement('img')

        myImage.setAttribute('src', el)

        myContainer.appendChild(myImage)


    })

    textArr.forEach(el => {
    
    const myImage = document.createElement('img')

    myImage.setAttribute('src', el)

    mySecondContainer.appendChild(myImage)

    })


}

renderThings()





