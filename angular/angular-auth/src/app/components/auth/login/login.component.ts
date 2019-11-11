import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../auth/auth.service'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup
  subs: Subscription

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, this.validEmail.bind(this)]),
      password: new FormControl(null, [Validators.required, this.validPassword.bind(this)])
    })

    this.subs = this.authService.userIsLoggedIn.subscribe(alreadyLoggedIn => {
      if (alreadyLoggedIn) {
        console.log('User already logged in > to dashboard')
        this.router.navigate(['/dashboard'])
      }
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value['email']
      const password = this.loginForm.value['password']
      this.authService.login(email, password)
    } else {
      console.error('loginForm invalid')
    }
  }

  validEmail(control: FormControl): { [s: string]: boolean } {
    const email = control.value
    const regexp = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    if (regexp.test(email) !== true) {
      return { email: false }
    } else {
      return null
    }
  }

  validPassword(control: FormControl): { [s: string]: boolean } {
    const password = control.value
    const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}')
    const test = regexp.test(password)
    if (regexp.test(password) !== true) {
      return { password: false }
    } else {
      return null
    }
  }
}
