import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CarrinhoComprasComponent } from './carrinho-compras/carrinho-compras.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { ProdutoComponent } from './produto/produto.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent, CarrinhoComprasComponent, ListaProdutosComponent, ProdutoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
