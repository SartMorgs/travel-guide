import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  	const options = {
  		stringsElements: '#typed-strings',

  		strings: ['Travel guide guia de roteiro', 'Inscreva-se e fique por dentro das novidades dos destinos de seu interesse','Tudo que você precisa para planejar sua viagem'],

  		typeSpeed: 100,
  		backSpeed: 100,
  		backDelay: 200,
  		smartBackspace: true,
  		fadeOut: true,
  		showCursor: false,
  		startDelay: 1000,
  		loop: true
  	};

  	const typed = new Typed('.typing-element', options);
  }

  gotoCadastroClientes() {
    this.router.navigate(['cadastro-usuarios']);
  }

}
