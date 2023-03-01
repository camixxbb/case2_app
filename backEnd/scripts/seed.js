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
    page.title = 'Conheça o Aplicativo'
    page.text = 'O GameInto é uma plataforma que armazena inúmeras listas de jogos criadas por empresas e fãs. Quer ver uma lista dos melhores jogos do ano? Sem problemas! No GameInto você encontra não só listas globais como listas de grandes empresas de games, como a Epic Games, e plataformas, como a Steam. É um mundo vasto de infomrações sobre o universo gamer.'
    const pages = [page]

    const products = []

    const funcionalidade = [{
        id: 1,
        title: 'Listagens oficiais de criadores',
        description: 'Seja criadores indies, como a 666 Games, ou empresas de renome, como a Eletronic Arts, o GameInto irá armazenar listas oficiais criadas, por esses criadores (rs)!'},
        {id: 2,
        title: 'Fórum de debate',
        description: 'Isso mesmo! Um fórum onde será possível debater sobre as listas e os games que estão bombando no momento.'},
        {id: 3,
        title: 'Listas de melhores momentos',
        description: 'Listas de vídeos de jogadores (amadores e profissionais) poderão ser criadas e favoritadas!'},
        {id: 4,
        title: 'Atualização dinâmica',
        description: 'A API conta com a nossa equipe coruja que a deixa sempre atualizada e de pé para receber, visualizar, atualizar e apagar as suas listas!'},
        {id: 5,
        title: 'Conexão com empresas',
        description: 'Você mais conectado do que nunca com as empresas, agora que poderá encontrar suas listas!'},
        {id: 6,
        title: 'Bônus Parceiro',
        description:'Seja um dos primeiros a receber atualizações com a aquisição de uma chave de administração da API. Coisa chique!'}
    ]
    
    for (let i=0; i< funcionalidade.length; i++) {
      const prod = new Product()
       prod.title = funcionalidade[i].title
      prod.description = funcionalidade[i].description
      products.push(prod)
    }

    const admin = new User()
    admin.email = "gameintoadm@back.com"
    admin.encryptedPassword = hashSync('12345678', 10)
    const users = [admin]
    
    await Page._seed(pages)
    await Product._seed(products)
    await User._seed(users)
}

seed()