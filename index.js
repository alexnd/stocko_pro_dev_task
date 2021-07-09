const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
let link = 'https://stocko.pro/search?page='

const parseStocko = async () => {
    try {
        let arr = []
        let i = 1
        let idCounter = 1

        while(i < 4) {
            await axios.get(link + i)
                .then(res => res.data)
                .then(res => {
                    let html = res
                    $ = cheerio.load(html)
                  
                    $(html).find('.product__row').each((index, element) => {
                        // console.log('>>>>>', $(element).find('.product .product__text-box a.product__title').text())
                        let item = {
                            name: $(element).find('.product .product__text-box a.product__title').text().replace(/\s+/g, ''), //output full page names but not one by one
                            link: $(element).find('.product .product__text-box a.product__title').attr('href'), //output only one link for first item but not for all
                            id: idCounter
                        }
                        arr.push(item)
                        idCounter++
                    })
                })
                .catch(err => console.log(err))

            fs.writeFile('stocko.json', JSON.stringify(arr), function(err) {
                if (err) throw err
                console.log('Saved stocko json successfully');
            })

            i++
        }
        
    } catch(e) {
        console.log('err - ', e);
    }
}

parseStocko()