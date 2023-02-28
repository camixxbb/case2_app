import { hashSync } from "bcrypt"

import Page from "../src/DAO/Page.js"
import Product from "../src/DAO/Product.js"
import User from "../src/DAO/User.js"

const models = [
    Page, Product, User
]

const seed = async () => {
    models.forEach(model => model.configurar())

    const page = new Page()
    page.title = 'Sobre'
    page.text = 'O GameInto é um aplicativo pensando em você gamer que joga diversos jogos diferentes durante o seu dia-a-dia. Já pensou o quão maravilhoso seria ter uma lista de todos os jogos que você já jogou na sua vida? Ou já ter uma lista dos lançamentos do ano que você pretende jogar? O GameInto é o lugar para você criar suas listas de jogos! Não importa o motivo, o GameInto monta para você a sua lista do jeitinho que você quiser!'
    const pages = [page]

    const products = []
    for (let i=1; i<=4; i++) {
        const prod = new Product()
        prod.title = `Produto ${i}`
        prod.description = `Descrição do produto ${i}`
        products.push(prod)
    }

    const admin = new User()
    admin.email = "game@into.com"
    admin.encryptedPassword = hashSync('12345678', 10)
    const users = [admin]
    
    await Page._seed(pages)
    await Product._seed(products)
    await User._seed(users)
}

seed()