import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './../content/content.component';
import { CadastroUsuariosComponent } from './../cadastro-usuarios/cadastro-usuarios.component';

const routes: Routes = [
	{ path: '', component: ContentComponent},
	{ path: 'cadastro-usuarios', component: CadastroUsuariosComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
  	RouterModule
  ]
})
export class AppRoutingModule { }
