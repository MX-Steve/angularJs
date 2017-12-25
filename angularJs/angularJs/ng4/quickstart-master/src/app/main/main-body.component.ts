import { Component, OnInit } from '@angular/core';
import  "./../../js/jquery-1.11.3.js";
import"./index.js";
import { PrintService } from "../service/test-print.service"

@Component({
    selector: 'mainBody',
    templateUrl: './main-body.component.html',
    styleUrls:['./../../css/common.css',
    './index.css',
    './../../css/font-awesome.css'],
    providers:[PrintService]
})

export class MainBodyComponent implements OnInit {
    constructor(private testLog:PrintService) { }
    
    ngOnInit() { 
        (function(){
            const LIWIDTH=1330; var n=0,TRANS=300,INTERVAL=2000,
            timer:any=null;
            var bannerImgs=$("[data-load=bannerImgs]");
            var bannerInds=$("[data-load=bannerInds]");
            $.get('../data/banner.php?timeStamp='+new Date().getTime(),function(data:any){
                var html="";
                // data.push(data[0]);
                console.log(data);
                data[data.length]= data[0];
                console.log(1);
                for(var img of data ){
                    html+=
                    `	<li>
                        <div class="progress_bar"></div>
                        <img src="${img.href}" alt="">
                        </li>`	
                }
                $("[data-load=bannerImgs]").html(html).css("width",LIWIDTH*data.length);
                $("[data-load=bannerInds]").html("<a href='javascript:;'></a>".repeat(data.length-1))
                    .children().first().addClass("hover");
            })
            .then(()=>{
                        function moveOnce(){
                            n++;
                            var left=LIWIDTH*n;
                            bannerImgs.css("left",-left);
                            bannerInds.children().eq(n-1).removeClass("hover");
                            if(n==bannerImgs.children().size()-1){
                                bannerInds.children().first().addClass("hover");
                                setTimeout(function(){
                                    bannerImgs.css("transition","0s all linear");
                                    n=0;
                                    bannerImgs.css("left",0);	
                                    setTimeout(()=>{
                                        bannerImgs.css("transition","all 0.3s linear");
                                    },100);
                                },TRANS);
                            }else{
                            bannerInds.children().eq(n).addClass("hover");
                            }   
                        }
                            timer=setInterval(moveOnce,INTERVAL+TRANS);

                        $("#round_pic").on({
                            "mouseover":function(){
                                clearInterval(timer);
                                timer=null;
                            },
                            "mouseout":function(){
                                clearInterval(timer);
                                timer=null;
                                timer=setInterval(moveOnce,INTERVAL+TRANS);
                            }
                        })

                        $("[data-move=right]").click(function(e:any){
                            e.preventDefault;
                            if(n<bannerInds.children().size()-1){
                                n++;
                                bannerImgs.css("left",-n*LIWIDTH);
                                bannerInds.children().eq(n-1).removeClass("hover");
                                bannerInds.children().eq(n).addClass("hover");
                            }else{
                                n++;
                                bannerImgs.css("left",-n*LIWIDTH);
                                bannerInds.children().eq(0).siblings().removeClass("hover");
                                bannerInds.children().eq(0).addClass("hover");
                                setTimeout(()=>{
                                    bannerImgs.css("transition","");
                                    bannerImgs.css("left",0);
                                    n=0;
                                    setTimeout(()=>{
                                    bannerImgs.css("transition","all .3s linear");
                                    },100)
                                },TRANS)
                            }

                        })
                    
                        $("[data-move=left]").click(function(e:any){
                            e.preventDefault;
                        if(n>0){
                            n--;
                            bannerImgs.css("left",-n*LIWIDTH);
                            bannerInds.children().eq(n+1).removeClass("hover");
                            bannerInds.children().eq(n).addClass("hover"); 
                        }else{
                            bannerImgs.css("transition","");
                            n=bannerImgs.children().size()-1;
                            bannerImgs.css("left",-n*LIWIDTH);
                            setTimeout(()=>{
                                bannerImgs.css("transition","all 0.3s linear");
                                n--;
                                bannerImgs.css("left",-n*LIWIDTH);
                                bannerInds.children().eq(0).removeClass("hover");
                                bannerInds.children().eq(n).addClass("hover");
                            },100)
                        }
                        })	

                        $("[data-load=bannerInds]").on("click","a",function(e:any){
                            e.preventDefault;
                            clearInterval(timer);
                            timer=null;
                            n=$(this).index();
                            bannerImgs.css("left",-n*LIWIDTH);
                            $("[data-load=bannerInds]").find(".hover").removeClass("hover");
                            $(this).addClass("hover");
                        })
                    })
        })();	
    }
}