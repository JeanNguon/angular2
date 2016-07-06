//metadata object that invokes Component
import { Component } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';

////////////////////////<@class Object>///////////////////////////////////////////
export class NavLi{
	id: number;
	title: string;
}

export class SubNavLi{
	title: string;
}


const NAVLIS: NavLi[] = [
{id: 1, title: 'Gestion des Ouvrages'},
{id: 2, title: 'Visite'},
{id: 3, title: 'Analyse et Restitution'},
{id: 4, title: 'Administration'},
{id: 5, title: 'Paramètres'}
];

const SUBNAVLIS: SubNavLi[] = [
{title: 'Equipement'},
{title: 'Portion d\'Intégrité'},
{title: 'Ensemble Electrique'},
{title: 'Documentation'}
];

////////////////////////<@End class Object>///////////////////////////////////////

////////////////////////<@Component>///////////////////////////////////////////
/////decorator function that takes a metadata object as argument
@Component({
	//selector is a css selector for an element that represents the component
	selector: 'section-breadcrumb',
  	//
  	template: 
  // 	'<div class="collapse navbar-collapse bs-example-js-navbar-collapse">'+
  // 	'<ul class="navLis nav navbar-nav">'+
	 //  	'<li *ngFor="let navLi of navLis" class="col-md-1 dropdown">'+
		// 	'<a class="dropdown-toggle">{{navLi.title}}</a>'+
		// '</li>'+
	 //  	// '<li class="col-md-1"></li>'+
	 //  	// '<li class="col-md-1"></li>'+
	 //  	// '<li class="col-md-1"></li>'+
	 //  	// '<li class="col-md-1"></li>'+
	 //  	// '<li class="col-md-1"></li>'+
  // 	'</ul>'
  // '<div class="dropdown">'+
  // '<a id="dLabel" data-target="#"  data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">'+
  // '    Dropdown trigger'+
  // '<span class="caret"></span>'+
  // '</a>'+

 
  // '<ul class="dropdown-menu" aria-labelledby="drop1"> <li><a href="#">Action</a></li> <li><a href="#">Another action</a></li> <li><a href="#">Something else here</a></li> <li role="separator" class="divider"></li> <li><a href="#">Separated link</a></li> </ul>'+
  // '</div>'
  // 
'<div class="bs-example">'+
  	'<nav id="navbar-example" class="navbar navbar-default navbar-static">'+
  		'<div class="container-fluid">'+
  			'<div class="navbar-header">'+
  				'<button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-collapse">'+
					'<span class="sr-only">Toggle navigation</span>'+
	  				// '<span class="icon-bar"></span>'+
	  				// '<span class="icon-bar"></span>'+
	  				// '<span class="icon-bar"></span>'+
  				'</button>'+
  				'<a class="navbar-brand" href="#">Accueil</a>'+
  			'</div>'+
	  		'<div class="collapse navbar-collapse bs-example-js-navbar-collapse">'+
		  		'<ul *ngFor="let navLi of navLis"(click)="onSelect(navLi)" class="nav navbar-nav">'+
		  			// '<li class="dropdown open">'+
		  			'<li class="dropdown"  [class.open]="navLi === selectedNavLi" >'+
		 				'<a id="{{navLi.id}}" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">'+
		  					'{{navLi.title}}'+
		  					'<span class="caret"></span>'+
		  				'</a>'+

				  		'<ul  class="dropdown-menu" aria-labelledby="drop1">'+
				 			'<li *ngFor="let subNavLi of subNavLis" >'+
				 				'<a href="#">{{subNavLi.title}}</a>'+
				 			'</li>'+
				  		'</ul>'+
				  		
		  			'</li>'+
		  		
				'</ul>'+
				'<ul class="nav navbar-nav navbar-right">'+
					'<li><a href="#">Action du Site</a></li>'+
					'<li><a href="#">F11</a></li>'+
    			'</ul>'+
				// '<div *ngIf="selectNavLi">'+
		  // 			'<p>test</p>'+
		  // 		'</div>'+
			'</div>'+
		'</div>'+
	'</nav>'+
'</div>'
})

////////////////////////<End @Component>///////////////////////////////////////////


export class AppMenu {

	navLis = NAVLIS;
	subNavLis = SUBNAVLIS;
	selectedNavLi : NavLi;

	onSelect(navLi: NavLi) { 
		if(this.selectedNavLi == null){
			this.selectedNavLi = navLi;	
		}else{
			this.selectedNavLi = null;

		}
	 	
	}
}
