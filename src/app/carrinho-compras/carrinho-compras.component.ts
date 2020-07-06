import { Component, OnInit, Input } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.css']
})
export class CarrinhoComprasComponent implements OnInit {

  produtos: ProdutoComponent[] = [];
  quantidade: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  public onProdutoAdicionado(evento) {
    this.produtos.push(evento.produto);
    this.quantidade++;
    console.log("Valor obtido no componente pai: " + evento.produto.id);
  }

}