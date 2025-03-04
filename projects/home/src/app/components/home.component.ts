import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'home-root',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.homeForm = this.fb.group({
      username: ['', Validators.required],
    });
  }
}
