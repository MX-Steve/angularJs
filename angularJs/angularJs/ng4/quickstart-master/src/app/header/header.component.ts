import { Component, OnInit } from '@angular/core';
import "./../../js/jquery-1.11.3.js";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls:['./../../css/common.css',
    './header.css',
    './../../css/font-awesome.css']
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        $("#header").on("mouseover",".nav_right>li.tri",function(){
            var This=$(this),flag=true;
            This.parent().children().not(".active").siblings().children("a").css("background","");
            This.children("a").css("background","#d68b37");
            $(".double").hide();
            $("ul.level_menu").eq(This.index()-1).stop().animate(
            {  
            top:"54px",
            opacity:"1"
            },300,function(){flag=false;});
            $("ul.level_menu").eq(This.index()-1).siblings().filter(".drop_down").hide();
            $("ul.level_menu").eq(This.index()-1).show();
        })
        .on("mouseleave",".nav_right>li.tri",function(){
            var This=$(this);
            $("ul.level_menu").eq(This.index()-1).siblings().filter(".drop_down").css("top","70px").hide();	
            $("ul.level_menu").eq(This.index()-1).siblings().filter(".drop_down").css("opacity","0");
        })
        .mouseleave(function(){
            $(".tri>a").css("background","");	
            $("ul.level_menu").hide();
            $("ul.level_menu").css("top","70px");

        });
        $("ul.level_menu").mouseleave(function(){
            var This=$(this);
            This.hide();
            $(".tri>a").css("background","");
            $("ul.level_menu").css("top","70px");
        })
        $(".linked").mouseenter(function(){
            $(this).children().show();
        })
        $(".nav_right li:last-child").mouseover(function(){
            $(".news_information").css("top","70px").hide();
            $(this).prev().children("a").css("background","");
        })
        $(".nav_right li:first-child").mouseover(function(){
            $(".about_us").css("top","70px").hide();
            $(this).next().children("a").css("background","");
        })
     }
}