import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  imports: [DatePipe],
  templateUrl: './boas-vindas.html',
  styleUrl: './boas-vindas.scss',
})
export class BoasVindas {
  dataAtual = new Date();
}
