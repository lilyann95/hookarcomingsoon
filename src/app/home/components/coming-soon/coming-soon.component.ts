import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],

  animations: [
    trigger('fadeAnimation', [
      state(
        'fade-out',
        style({
          opacity: 0,
        })
      ),
      transition('* => fade-out', animate('1500ms ease-in-out')),
    ]),
  ],
})
export class ComingSoonComponent implements OnInit {
  fadeOut: string = '';
  state = '';
  comingSoon: AnimationOptions = {
    path: 'assets/animations/test.json',
  };
  berry: AnimationOptions = {
    path: 'assets/animations/berry.json',
  };
  light: AnimationOptions = {
    path: 'assets/animations/light.json',
  };
  mobileLight: AnimationOptions = {
    path: 'assets/animations/new-light.json',
  };
  pig: AnimationOptions = {
    path: 'assets/animations/pig.json',
  };
  cow: AnimationOptions = {
    path: 'assets/animations/cow.json',
  };
  ball: AnimationOptions = {
    path: 'assets/animations/ball.json',
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
