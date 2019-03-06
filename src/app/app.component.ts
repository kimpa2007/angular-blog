import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  	title = 'Blog Angular';
  	posts = [
	    {
	    	title: "Mon premier post",
		  	content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed porta eros. Quisque in efficitur dui, eu iaculis tortor. Sed elementum ornare libero, vel euismod tellus posuere et. Aenean at consequat mauris. Curabitur nec nulla id elit commodo malesuada. Praesent interdum lacus in molestie pellentesque. Ut congue elit orci, et porta odio congue quis. Mauris eget nibh diam. Aenean vel vehicula sapien, vitae sagittis justo. Fusce eget volutpat nunc. Vestibulum pellentesque, mi at pulvinar pellentesque, nunc enim dignissim nisi, quis suscipit turpis ex nec metus. Aliquam finibus tortor risus, non facilisis leo porttitor a. Integer volutpat turpis eget feugiat sagittis. Mauris pellentesque dui vel lacus dictum, vel cursus nunc pretium. Duis et tincidunt tellus, eu sollicitudin augue. Donec auctor et leo id imperdiet.",
		  	loveIts: 1,
      		created_at: 'Wed Feb 6 2019 16:33:22'
	    },
	    {
	    	title: "Mon deuxième post",
		  	content: "Vestibulum bibendum lacus risus, et mattis odio facilisis et. Suspendisse potenti. Etiam mi dui, mollis vel purus vitae, porttitor egestas tortor. Praesent in ultrices sapien. Integer mollis, tellus id vehicula tristique, eros ex semper enim, nec imperdiet turpis lacus id nisi. In at augue porta, convallis enim vel, molestie arcu. Donec porttitor ullamcorper nisl, commodo lobortis nunc faucibus id. Nunc ex ante, molestie nec dolor sit amet, auctor consequat dolor.",
		  	loveIts: 2,
      		created_at: 'Wed Feb 28 2019 11:53:12'
	    },
	    {
	    	title: "Mon troisième post",
		  	content: "Quisque rutrum diam id lorem blandit, et sagittis elit egestas. Donec gravida a lectus vitae tempus. Duis lorem tellus, molestie at felis id, efficitur semper risus. Donec nunc quam, ullamcorper eget mi vel, egestas commodo orci. Fusce accumsan justo quis mollis commodo. Proin in tempus nisi. Integer vel magna ligula.",
		  	loveIts: 3,
		  	created_at: new Date()
	    }
  	];
}
