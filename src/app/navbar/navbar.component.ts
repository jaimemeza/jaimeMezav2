import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { routerTransition } from './animation'
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [routerTransition]
})

export class NavbarComponent implements OnInit {
  isAnimate = [false, false, false, false];
  progressBar = 0;
  //Technology skills array
  tSkills = [
    {
      name: 'Angular',
      amount: 75,
      temp: 0
    },
    {
      name: 'Javascript',
      amount: 80,
      temp: 0
    },
    {
      name: 'HTML',
      amount: 90,
      temp: 0
    },
    {
      name: 'Node',
      amount: 75,
      temp: 0
    },
    {
      name: 'SQL',
      amount: 80,
      temp: 0
    },
  ];
  //Soft skills array
  sSkills = [
    {
      name: 'Problem solving',
      amount: 90,
      temp: 0
    },
    {
      name: 'Teamwork/collaboration',
      amount: 100,
      temp: 0
    },
    {
      name: 'Research',
      amount: 100,
      temp: 0
    },
    {
      name: 'Communication skills',
      amount: 90,
      temp: 0
    },
    {
      name: 'Adaptability and flexibility',
      amount: 80,
      temp: 0
    },
  ];
  //Navbar menu items
  navItems = ['Home', 'Skills', 'Portfolio', 'About'];
  //Portfolio info array
  portfolios = [
    {
      id: 1,
      title1: "Search ",
      title2: "Movies App",
      text1: "This App make a API call to retrive the movie, serie or episode title and poster, when you click the movie you will get more information like year, rated, release date, etc.",
      text2: "Also you can navigate with the navigation bar between pages.",
      img: "./assets/img/movieSearchApp.png",
      href: "https://jaimemeza.github.io/movieSearchApp/",
      show: true
    },
    {
      id: 2,
      title1: "To ",
      title2: "Do App",
      text1: "This App store the things that need to be done in a easy way, just write your stuff and hit enter. If you want to edit a task just hover it a click it and you will have more information about that specific task",
      text2: "You can also delete 1 task a the time, delete all, show and hide the completed tasks and sort by priority and due date.",
      img: "./assets/img/todoApp.png",
      href: "https://jaimemeza.github.io/todoApp/",
      show: false
    },
    {
      id: 3,
      title1: "Jaime ",
      title2: "Meza V1",
      text1: "This is my first personal page, make a parallax effect with simple SavaScript and jQuery and some animations in the beginning,",
      text2: "Also i used bootstrap for the grid and CSS3",
      img: "./assets/img/jaimeMeza.png",
      href: "https://jaimemeza.github.io/jaimeMeza/",
      show: false
    },
    {
      id: 4,
      title1: "Play ",
      title2: "Famous Page",
      text1: "Play Famous was our first group project emulating a e-commerce site",
      text2: "Here you will see little more positioning, color, responsive display, etc.",
      img: "./assets/img/playFamous.png",
      href: "https://jaimemeza.github.io/playFamous/",
      show: false
    },
    {
      id: 5,
      title1: "Hotels ",
      title2: "Page",
      text1: "Hotels was my very first page using Bootstrap and CSS3 with focusing in  position, display, color, etc.",
      text2: "",
      img: "./assets/img/hotels.png",
      href: "https://jaimemeza.github.io/hotels/",
      show: false
    }
  ];

  //Scroll Event Listener to animate progress bar
  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    var Id = document.getElementById('Skills');
    if ($event.path[1].scrollY >= Id.offsetTop - 89 && this.progressBar == 0) {
      for (let i = 0; i < this.tSkills.length; i++) {
        var elem1 = document.getElementById(this.sSkills[i].name);
        var elem2 = document.getElementById(this.tSkills[i].name);
        elem1.style.width = this.sSkills[i].amount + "%";
        this.sSkills[i].temp = this.sSkills[i].amount;
        elem2.style.width = this.tSkills[i].amount + "%";
        this.tSkills[i].temp = this.tSkills[i].amount;
      }
      this.progressBar = 1;
    }
  }


  constructor() {
  }

  ngOnInit() {
  }


  //Navbar smooth jump and trigger animation
  navTo(index) {
    this.isAnimate[index] = !this.isAnimate[index];
    var Id = document.getElementById(this.navItems[index]);
    var x = '#' + this.navItems[index];
    $("html, body").animate({ scrollTop: $(x).offset().top - 85 }, 800);
  }

  //Portfolio show more information
  showMore(index) {
    var Id = document.getElementById('Portfolio');
    for (let i = 0; i < this.portfolios.length; i++) {
      this.portfolios[i].show = false;
    }
    window.scrollTo(Id.offsetLeft, Id.offsetTop - 89);
    this.portfolios[index].show = !this.portfolios[index].show;
  }


}
