import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // router is injected here, look for details at a services example
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToJohn() {
    // straightforward navigation through the router
    this.router.navigate(['/users', 0]);

    // or use a relative path (example is a bit silly here...)
    // this.router.navigate(['../users', 0], {relativeTo: this.route});
  }

}
