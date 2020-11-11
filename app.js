const express = require('express')
const chalk = require('chalk')
const hbs = require("hbs")

const app = express()
const PORT = 3000

//1.Indicamos a nuestro servidor donde esta la carpeta de vistas (views) \\ "__dirname" equivale a "./" 
app.set("views", __dirname + "/views");

//2.Indicamos a nuestro servidor que el motor de vistas que vamos a utilizar es HBS
app.set("view engine", "hbs") 

app.get ('/', (req, res, next)=>{

    const shoppingCart = [
        'Macarrones',
        'Tomate',
        'Queso'
    ]
    const userInfo = {
        name: 'Adria',
        lastName: 'Salvador',
        age: 28,
        alive: true,
        shoppingCart: shoppingCart,
        numberOfItems: shoppingCart.length,
        favouriteBook: {
            name: 'El niño con el pijama de rayas',
            author: 'Michelle Gonzalez',
            year: 2007
        }
    }

    res.render('index', userInfo)
})

app.get ('/about', (req, res, next)=>{
    res.render('about')
})


app.listen (PORT, ()=>{
    console.log(chalk.green.inverse.bold(`Server listening in Port ${PORT}`))
})