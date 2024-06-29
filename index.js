const trendingProductsList=[
    {
        statusClass:'status-new',
        status:'New',
        imgSrc:'img/trending-section/01.jpg',
        imgAlt:'01',
        productType:'Chair',
        productName:'Minimal LCD chair',
        productNewPrice:'$180',
        productOldPrice:'$250'
    },
    {
        statusClass:'status-new',
        status:'New',
        imgSrc:'img/trending-section/02.jpg',
        imgAlt:'02',
        productType:'Chair',
        productName:'Minimal iconic chair',
        productNewPrice:' $120',
        productOldPrice:' $150'
    },
    {
        statusClass:'status-sale',
        status:'Sale',
        imgSrc:'img/trending-section/03.jpg',
        imgAlt:'03',
        productType:'Chair',
        productName:' Dining chairs',
        productNewPrice:'$100',
        productOldPrice:'$120'
    },
    {
        statusClass:'status-sale',
        status:'Sale',
        imgSrc:'img/trending-section/04.jpg',
        imgAlt:'04',
        productType:'Chair',
        productName:' Buskbo armchair',
        productNewPrice:'$130',
        productOldPrice:'$150'
    },
    {
        statusClass:'status-sale',
        status:'Sale',
        imgSrc:'img/trending-section/05.jpg',
        imgAlt:'05',
        productType:'Chair',
        productName:'Modern chairs',
        productNewPrice:'$100',
        productOldPrice:'$120'
    },
    {
        statusClass:'status-sale',
        status:'Sale',
        imgSrc:'img/trending-section/06.jpg',
        imgAlt:'06',
        productType:'Chair',
        productName:'Plastic dining chair',
        productNewPrice:'$130',
        productOldPrice:'$150'
    },
    {
        statusClass:'status-new',
        status:'New',
        imgSrc:'img/trending-section/07.jpg',
        imgAlt:'07',
        productType:'Chair',
        productName:'Minimal Wood chair',
        productNewPrice:'$180',
        productOldPrice:'$250'
    },
    {
        statusClass:'status-new',
        status:'New',
        imgSrc:'img/trending-section/08.jpg',
        imgAlt:'08',
        productType:'Chair',
        productName:' Elegent wood chair',
        productNewPrice:'$120',
        productOldPrice:'$150'
    },
]

const ulTrendingList = document.querySelector('.trending-products-list')

trendingProductsList.forEach((element)=>{
    let statusClass = 'status-new'
    if(element.status==='Sale'){
        statusClass='status-sale'
    }

    const liTendingListItem = document.createElement('li')
    liTendingListItem.className='trending-products-list-item'

    const aTrendingItemLink = document.createElement('a')
    aTrendingItemLink.href="#"

    const statusTrendingElement = document.createElement('div')
    statusTrendingElement.className=`${element.statusClass}`
    statusTrendingElement.textContent=`${element.status}`

    const divItemImg = document.createElement('div')
    divItemImg.className='item-img'

    const itemImg = document.createElement('img')
    itemImg.src=`${element.imgSrc}`
    itemImg.alt=`${element.alt}`

    const itemIcons = ` <div class="item-icons">
    <button class="item-icons-btn">
        <img src="img/trending-section/heart-icon.svg" alt="like">
    </button>
    <button class="item-icons-btn">
        <img src="img/trending-section/add-to-busket-icon.svg" alt="busket">
    </button>
    <button class="item-icons-btn">
        <img src="img/trending-section/refresh-icon.svg" alt="refresh">
    </button>
    <button class="item-icons-btn">
        <img src="img/trending-section/view-icon.svg" alt="view">
    </button>
    </div>`

    const divProductType = document.createElement('div')
    divProductType.className='product-type'
    divProductType.textContent=`${element.productType}`

    const divProductName = document.createElement('div')
    divProductName.className='item-name'
    divProductName.textContent=`${element.productName}`

    const itemWrapper = document.createElement('div')
    itemWrapper.className='item-wrapper'

    const itemPrice = document.createElement('div')
    itemPrice.className='item-price'

    const itemNewPrice = document.createElement('div')
    itemNewPrice.className='item-new-price'
    itemNewPrice.textContent=`${element.productNewPrice}`

    const itemOldPrice = document.createElement('div')
    itemOldPrice.className='item-old-price'
    itemOldPrice.textContent=`${element.productOldPrice}`

    const itemStars = document.createElement('div')
    itemStars.className='item-stars'

    const starsImg = document.createElement('img')
    starsImg.src='img/trending-section/review.svg'
    starsImg.alt='review'


    itemPrice.append(itemNewPrice)
    itemPrice.append(itemOldPrice)

    itemStars.append(starsImg)

    itemWrapper.append(itemPrice)
    itemWrapper.append(itemStars)

    divItemImg.append(itemImg)
    divItemImg.innerHTML+=itemIcons

    aTrendingItemLink.append(statusTrendingElement)
    aTrendingItemLink.append(divItemImg)
    aTrendingItemLink.append(divProductType)
    aTrendingItemLink.append(divProductName)
    aTrendingItemLink.append(itemWrapper)

    liTendingListItem.append(aTrendingItemLink)

    ulTrendingList.append(liTendingListItem)
})





const offersWrapper = document.querySelector('.offers-wrapper')
const offersWrapperInner = document.querySelector('.offers-wrapper2')

const offer1 = `<a href="#" class="offer-01">
<div class="offer-01-img">
    <img src="img/collections-section/01.jpg" alt="01">
</div>
<div class="offer-desc01">
    <div class="desc-header">
        Modern Furniture Collections
    </div>
    <div class="price-info">
        Starting from $500
    </div>
    <div class="read-more">
        Read more
    </div>
</div>    
</a>`

const offer2=`<a href="#" class="offer-02">
<div class="offer-01-img">
    <img src="img/collections-section/02.jpg" alt="02">
</div>
<div class="offer-desc02">
    <div class="desc-header">
        Geometric Bookcase
    </div>
    <div class="price-info">
        Up to 20% discount
    </div>
    <div class="read-more">
        Read more
    </div>
</div>    
</a>`

const offer3 = `<a href="#" class="offer-03">
<div class="offer-03-img">
    <img src="img/collections-section/03.jpg" alt="03">
</div>
<div class="offer-desc03">
    <div class="desc-header">
        Minimal Sofa collections
    </div>
    <div class="price-info">
        Sale upto 40% discount
    </div>
    <div class="read-more">
        Read more
    </div>
</div>    
</a>`


offersWrapper.innerHTML=offer1

offersWrapper.append(offersWrapperInner)

offersWrapperInner.innerHTML+=offer2
offersWrapperInner.innerHTML+=offer3






const ourProductsList = [
    {
        statusClass:'our-products-status-sale',
        status:'Sale',
        imgSrc:'img/our-products-section/01.jpg',
        imgAlt:'01',
        productType:'Sofa',
        productName:'Minimal LCD chair',
        oldPrice:'$180',
        newPrice:'$250',
    },
    {
        statusClass:'our-products-status-new',
        status:'New',
        imgSrc:'img/our-products-section/02.jpg',
        imgAlt:'02',
        productType:'Sofa',
        productName:'Modern Sofa',
        oldPrice:'$120',
        newPrice:'$150',
    },
    {
        statusClass:'our-products-status-discount',
        status:'-30%',
        imgSrc:'img/our-products-section/03.jpg',
        imgAlt:'03',
        productType:'Sofa',
        productName:'Microfiber Sofa',
        oldPrice:'$100',
        newPrice:'$120',
    },
    {
        statusClass:'our-products-status-sale',
        status:'Sale',
        imgSrc:'img/our-products-section/04.jpg',
        imgAlt:'04',
        productType:'Table',
        productName:'Wood Coffee Tables',
        oldPrice:'$130',
        newPrice:'$150',
    },
    {
        statusClass:'our-products-status-discount',
        status:'-30%',
        imgSrc:'img/our-products-section/04.jpg',
        imgAlt:'05',
        productType:'Chair',
        productName:'Acacia Wood Club Chairs',
        oldPrice:'$180',
        newPrice:'$666',
    },
    {
        statusClass:'our-products-status-sale',
        status:'Sale',
        imgSrc:'img/our-products-section/08.jpg',
        imgAlt:'06',
        productType:'Bench',
        productName:'Amalia Cowhide Bench',
        oldPrice:'$130',
        newPrice:'$150',
    },
    {
        statusClass:'our-products-status-new',
        status:'New',
        imgSrc:'img/our-products-section/01.jpg',
        imgAlt:'07',
        productType:'Storage',
        productName:'Juno-Hinged Lid Storage',
        oldPrice:'$1',
        newPrice:'$10000',
    },
    {
        statusClass:'our-products-status-new',
        status:'New',
        imgSrc:'img/our-products-section/08.jpg',
        imgAlt:'08',
        productType:'Furniture',
        productName:'Delicia 3 Piece Living Room',
        oldPrice:'$1890',
        newPrice:'$2873',
    },
]



const ulOurProductsList = document.querySelector('.our-products-list')

ourProductsList.forEach((element)=>{
    let statusClass = 'our-products-status-new'
    if(element.status==='Sale'){
        statusClass='our-products-status-sale'
    }
    if(element.status==='-30%'){
        statusClass='our-products-status-discount'
    }
    const item =` <li class="our-products-list-item">
    <a href="#">
        <div class=${element.statusClass}>
            ${element.status}
        </div>
        <div class="item-img">
            <img src=${element.imgSrc} alt=${element.imgAlt}>
            <div class="item-icons">
                <button class="item-icons-btn">
                    <img src="img/trending-section/heart-icon.svg" alt="like">
                    <img src="img/our-products-section/like-white.svg" alt="like">
                </button>
                <button class="item-icons-btn">
                    <img src="img/trending-section/add-to-busket-icon.svg" alt="busket">
                    <img src="img/our-products-section/add-to-busket-white.svg" alt="busket">
                </button>
                <button class="item-icons-btn">
                    <img src="img/trending-section/refresh-icon.svg" alt="refresh">
                    <img src="img/our-products-section/refresh-white.svg" alt="refresh">
                </button>
                <button class="item-icons-btn">
                    <img src="img/trending-section/view-icon.svg" alt="view">
                    <img src="img/our-products-section/eye-white.svg" alt="view">
                </button>
            </div>
        
        </div>
        <div class="product-type">
            ${element.productType}
        </div>
        <div class="item-name">
            ${element.productName}
        </div>
        <div class="item-wrapper">
            <div class="item-price">
                <div class="item-new-price">
                    ${element.newPrice}
                </div>
                <div class="item-old-price">
                    ${element.oldPrice}
                </div>
            </div>
            <div class="item-stars">
                <img src="img/trending-section/review.svg" alt="review">
            </div>
        </div>
    </a>
    </li>`

    ulOurProductsList.innerHTML+=item
})




const ulLatesArticles = document.querySelector('.articles-list')

const latestArticles =[
    {
        imgSrc:'img/latest-articles-section/01.jpg',
        imgAlt:'01',
        tag:'Furniture',
        date:'23 September 2022',
        header:'Begineer guide buying minimal sofa',
    },
    {
        imgSrc:'img/latest-articles-section/02.jpg',
        imgAlt:'02',
        tag:'Table',
        date:'23 October 2022',
        header:'Buying best minimal computer table',
    },
    {
        imgSrc:'img/latest-articles-section/03.jpg',
        imgAlt:'03',
        tag:'Bench',
        date:'23 November 2022',
        header:'How to choose best modern bench',
    },
    {
        imgSrc:'img/latest-articles-section/04.jpg',
        imgAlt:'04',
        tag:'Chair',
        date:'30 February 1998',
        header:'Best Summer Outfit Style in this Country',
    },
]

latestArticles.forEach((element)=>{
    const liLatestArticlesItem = document.createElement('li')
    liLatestArticlesItem.className='articles-list-item'

    const aLatestArticles = document.createElement('a')
    aLatestArticles.href='#'

    const latestArticlesItemImg = document.createElement('div')
    latestArticlesItemImg.className='item-img'

    const itemImgInner = document.createElement('img')
    itemImgInner.src=`${element.imgSrc}`
    itemImgInner.alt=`${element.imgAlt}`

    const divDescWrapper = document.createElement('div')
    divDescWrapper.className='desc-wrapper'

    const divTopPartWrapper = document.createElement('div')
    divTopPartWrapper.className='top-part-wrapper'

    const divTag = document.createElement('div')
    divTag.className='tag'
    divTag.textContent=`${element.tag}`

    const divDate = document.createElement('div')
    divDate.className='date'
    divDate.textContent=`${element.date}`

    const divItemHeader = document.createElement('div')
    divItemHeader.className='item-header'
    divItemHeader.textContent=`${element.header}`

    const divRedMore = document.createElement('div')
    divRedMore.className='read-more'
    divRedMore.textContent='Read more'


    divTopPartWrapper.append(divTag)
    divTopPartWrapper.append(divDate)
    console.log(divTopPartWrapper)

    divDescWrapper.append(divTopPartWrapper)
    divDescWrapper.append(divItemHeader)
    divDescWrapper.append(divRedMore)

    latestArticlesItemImg.append(itemImgInner)

    aLatestArticles.append(latestArticlesItemImg)
    aLatestArticles.append(divDescWrapper)

    liLatestArticlesItem.append(aLatestArticles)

    ulLatesArticles.append(liLatestArticlesItem)
})


//ураа я закончила