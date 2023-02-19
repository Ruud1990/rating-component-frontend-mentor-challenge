



    const rankingContainer = document.querySelector('.ranking-container');
    const thanksContainer = document.querySelector('.thanks-container');
    const submitBtn = document.querySelector('.submit-btn');
    const allRates = document.querySelector('ul');
    const choosenRate = document.querySelector('.choice-container');
    const rates = document.querySelectorAll('.rate');
    liArr = Array.from(rates);
    console.log(liArr)
    
    
    
    
    allRates.addEventListener('click', (e) => {
        
        const value = e.target.value;
        e.target.classList.add('active');
        
        for(let i = 0; i < rates.length; i++){
            rates[i].addEventListener('click', function() {
                let activeBtn = document.querySelectorAll('.active');
                activeBtn[0].classList = activeBtn[0].className.replace('active', '');
                this.className += ' active';
            })
        }
        
        submitBtn.addEventListener('click', () => {
                rankingContainer.classList.add('hide');
                thanksContainer.classList.add('show');
                choosenRate.textContent = `You selected ${value} out of 5`;
            
            //  selectRate()
        })
    })