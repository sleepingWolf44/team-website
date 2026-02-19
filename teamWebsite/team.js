function Home() {
    window.location.href = "./index.html";
}
function Menu() {
    window.location.href = "./menu.html";
}
function Contacts() {
    window.location.href = "./contacts.html";
}
function Order() {
    window.location.href = "./order.html";
}
CnNum = 0;
CeNum = 0;
RNum = 0;
GNum = 0;
TNum = 0;
BNum = 0;
ONum = 0;
TeaNum = 0;
MNum = 0;
function Cn(input){
    if(input == 1 & CnNum > 0){
        CnNum-=1;
    }
    else if(input == 0){
        CnNum+=1;
    }
    document.getElementById("Cnspan").textContent = CnNum;
}
function Ce(input){
    if(input == 1 & CeNum > 0){
        CeNum-=1;
    }
    else if(input == 0){
        CeNum+=1;
    }
    document.getElementById("Cespan").textContent = CeNum;
}
function R(input){
    if(input == 1 & RNum > 0){
        RNum-=1;
    }
    else if(input == 0){
        RNum+=1;
    }
    document.getElementById("Rspan").textContent = RNum;
}
function G(input){
    if(input == 1 & GNum > 0){
        GNum-=1;
    }
    else if(input == 0){
        GNum+=1;
    }
    document.getElementById("Gspan").textContent = GNum;
}
function T(input){
    if(input == 1 & TNum > 0){
        TNum-=1;
    }
    else if(input == 0){
        TNum+=1;
    }
    document.getElementById("Tspan").textContent = TNum;
}
function B(input){
    if(input == 1 & BNum > 0){
        BNum-=1;
    }
    else if(input == 0){
        BNum+=1;
    }
    document.getElementById("Bspan").textContent = BNum;
}
function O(input){
    if(input == 1 & ONum > 0){
        ONum-=1;
    }
    else if(input == 0){
        ONum+=1;
    }
    document.getElementById("Ospan").textContent = ONum;
}
function Tea(input){
    if(input == 1 & TeaNum > 0){
        TeaNum-=1;
    }
    else if(input == 0){
        TeaNum+=1;
    }
    document.getElementById("Teaspan").textContent = TeaNum;
}
function M(input){
    if(input == 1 & MNum > 0){
        MNum-=1;
    }
    else if(input == 0){
        MNum+=1;
    }
    document.getElementById("Mspan").textContent = MNum;
}
function Ordernow(){
    Cncost = CnNum * 12.99;
    Cecost = CeNum * 13.49;
    Rcost = RNum * 14.49;
    Gcost = GNum * 7.99;
    Tcost = TNum * 8.49;
    Bcost = BNum * 6.99;
    Ocost = ONum * 3.49;
    Teacost = TeaNum * 3.99;
    Mcost = MNum * 4.99;
    cost = Cncost + Cecost + Rcost + Gcost + Tcost + Bcost + Ocost + Teacost + Mcost;
    const formatter = new Intl.NumberFormat('en-US');
    alert("your price comes to " + formatter.format(cost));
}
