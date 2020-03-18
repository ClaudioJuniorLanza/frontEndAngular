import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';
import { LancamentosCadastroComponent } from './lancamentos-cadastro/lancamentos-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { PessoasLancamentoComponent } from './pessoas-lancamento/pessoas-lancamento.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasGridComponent } from './pessoas-grid/pessoas-grid.component';
import { NavbarComponent } from './navbar/navbar.component';


import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {DropdownModule} from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentosGridComponent,
    LancamentosCadastroComponent,
    LancamentosPesquisaComponent,
    PessoasLancamentoComponent,
    PessoasCadastroComponent,
    PessoasGridComponent,
    NavbarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, InputTextModule, ButtonModule, TableModule,
    TooltipModule, InputTextareaModule, CalendarModule, SelectButtonModule, DropdownModule,
    CurrencyMaskModule, FormsModule, InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
