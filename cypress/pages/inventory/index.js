import { elements } from "./elements";

class Inventory {

    logo() {
        return elements.logo();
    }

    adicionarProduto(produto){
        elements.produto(produto).click()
    }
    
    abrirCarrinho() {
        elements.carrinho().click()
    }

}

export default new Inventory();