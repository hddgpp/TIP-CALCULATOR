const inputTip = document.querySelector('.js-input-tip')
        const btnTip1 = document.querySelector('.js-btn-tip1')
        const btnTip2 = document.querySelector('.js-btn-tip2')
        const btnTip3 = document.querySelector('.js-btn-tip3')
        const result = document.querySelector('.result')

        function tipLogic(tip) {
            const tipValue = Number(inputTip.value)
            if(!tipValue) {
                return alert('you need pay first')
            }

            inputTip.value = ''

            result.textContent = tipValue + (tipValue * tip)

            const wsp = {
                tipV: tipValue,
                tip1: tip
            }

            localStorage.setItem('wsp', JSON.stringify(wsp))
        }

        btnTip1.addEventListener('click', () => {
            tipLogic(0.1)
        })

         btnTip2.addEventListener('click', () => {
            tipLogic(0.2)
        })

         btnTip3.addEventListener('click', () => {
            tipLogic(0.3)
        })

        const tipStorage = JSON.parse(localStorage.getItem('wsp'))

        if(tipStorage) {
            result.textContent = tipStorage.tipV + (tipStorage.tipV * tipStorage.tip1)
        }