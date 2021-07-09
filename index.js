const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')

const link = 'https://stocko.pro/search?page='
const pages = 4

const parseStocko = async () => {
    try {
        let arr = []
        let pageCounter = 1
        let idCounter = 1

        while(pageCounter < pages) {
            await axios.get(link + pageCounter)
                .then(res => res.data)
                .then(res => {
                    let html = res
                    $ = cheerio.load(html)
                  
                    $(html).find('.product__col').each((index, element) => {
                         console.log('Name: ' + $(element).find('.product .product__text-box a.product__title').text(), '\n' + 'LINK: ' + $(element).find('.product .product__text-box a.product__title').attr('href'), '\n\n' + "ID: " + idCounter + '\n\n')
                        let item = {
                            name: $(element).find('.product .product__text-box a.product__title').text().replace(/\s+/g, ''),
                            link: $(element).find('.product .product__text-box a.product__title').attr('href'),
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

            pageCounter++
        }
        
    } catch(e) {
        console.log('err - ', e);
    }
}

parseStocko()