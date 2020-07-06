import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  produtos: ProdutoComponent[] = [];
  
  @Output() produtoAdicionado = new EventEmitter();

  constructor() { }

  ngOnInit() {
    var tesoura = new ProdutoComponent();
    tesoura.id = 1;
    tesoura.nome = "tesoura";

    this.produtos.push(tesoura);
    
    var sabonete = new ProdutoComponent();
    sabonete.id = 2;
    sabonete.nome = "sabonete";

    this.produtos.push(sabonete);
    
    var colher = new ProdutoComponent();
    colher.id = 3;
    colher.nome = "colher";

    this.produtos.push(colher);
  }
  
  public adicionarProduto(produto: ProdutoComponent) {
    this.produtoAdicionado.emit({produto: produto});
  }

}