function updatePricing(){
    const currency=document.getElementById('currency').value;
    const unit=document.getElementById('unit').value;
    const currencySymbols={
        'USD':'$',
        'EUR':'€',
        'GBP':'£'
    };
    const cards=document.querySelectorAll('.pricing-card');

    cards.forEach(card =>{
        const priceMonth=parseFloat(card.getAttribute('data-price-month'));
        const priceYear=parseFloat(card.getAttribute('data-price-year'));
        let price;
        if(unit==='month'){
            price=priceMonth;
        }
        else{
            price=priceYear;
        }
        card.querySelector('.price'))}${unit}';
        });

    }
    updatePricing();