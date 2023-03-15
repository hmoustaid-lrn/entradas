const myWindow = window.open('https://tickets.fcbarcelona.com/open?mode=fcb2019#/checkout/product/00-00087p9/event/00-00088jD/show/00-0001O3H')
myWindow.addEventListener('load', function () {
    const elements = document.querySelectorAll("li[ng-mouseover][ng-repeat]");
    const arrayOfElements = Array.from(elements)
    const newElements = arrayOfElements.map(function(element) {
        return element.querySelector("span.zoneInfo.price.pl-1.ng-binding");
    });

    console.log(newElements)
    newElements.sort((a, b) => {
        const priceA = Number(a.textContent.split(" ")[0]);
        const priceB = Number(b.textContent.split(" ")[0]);
        return priceA - priceB;
    })
    //newElements.forEach(element => console.log(element.textContent))
    newElements[0].click()
    const next = document.querySelector("#box_plano_ div.cart-trigger__buttons.d-none.d-lg-block.mt-auto > a"); 
    next.click();
})