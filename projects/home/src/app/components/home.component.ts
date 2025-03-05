import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.homeForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  login() {
    if (this.homeForm.valid) {
      const username = this.homeForm.value.username;
      sessionStorage.setItem('username', username);
      this.router.navigate(['/clientes']);
    }
  }
}
