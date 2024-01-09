// document.getElementById("abouta").style.display="none";

let home = document.getElementById("GALATO");
home.onclick = function() {
    document.getElementById("a").style.display="block";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
};
let home_bar = document.getElementById("GALATO_bar");
home_bar.onclick = function() {
    document.getElementById("a").style.display="block";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
};
let flavors = document.getElementById("FLAVORS");
flavors.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="block";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
    
};
let flavors_bar = document.getElementById("FLAVORS_bar");
flavors_bar.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="block";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
    
};
let order = document.getElementById("ORDERONLINE");
order.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="block";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
    
};
let order_bar = document.getElementById("ORDERONLINE_bar");
order_bar.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="block";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
    
};
let book = document.getElementById("BOOKANEVENT");
book.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="block";
    document.getElementById("e").style.display="none";
    
};
let book_bar = document.getElementById("BOOKANEVENT_bar");
book_bar.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="block";
    document.getElementById("e").style.display="none";
    
};
let about = document.getElementById("ABOUT");
about.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="block";
    
};
let about_bar = document.getElementById("ABOUT_bar");
about_bar.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="block";
    
};

function click_btn() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="block";
    document.getElementById("c").style.display="none";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
};

let btn_order = document.getElementById("btn_order");
btn_order.onclick = function() {
    document.getElementById("a").style.display="none";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="block";
    document.getElementById("d").style.display="none";
    document.getElementById("e").style.display="none";
};

//image
let sto = 0;
let count = -25;
let btn_right = document.getElementById('btn_right');
btn_right.onclick = function() {
    let img_pass = document.getElementsByClassName("frame_img_hover");
    // if(document.getElementById('size').clientWidth )
    if(sto == 8) return sto;
   if(sto != 8)
   {
        for(let i = 0; i < 12; i++)
        {
            img_pass[i].style.left= count+"%";
        }
        count -= 25; 
        sto++;   
   }
};

let btn_left = document.getElementById('btn_left');
btn_left.onclick = function() {
    let img_pass = document.getElementsByClassName("frame_img_hover");
    if(sto != -1)
    {
        sto--;
        count += 25;
        for(let i = 0; i < 12; i++)
        {
            img_pass[i].style.left= count+"%";
        }
    }
};


let v = 0;
function show(v){
    if(v % 2 == 0)
    {
        document.getElementById("box").style.display = "block";
        document.getElementById("frame_login").style.display = "none";
    }
    else
    {
        document.getElementById("box").style.display = "none";
        document.getElementById("frame_login").style.display = "block";
    }
}
function click_in()
{
    v++;
    show(v);
}

function ktEmail(email)
{
    let temp = "";
    if(email.length >= 8)
    {
        for(let i = 0; i < email.length; i++)
        {
            if(email[i] == '@')
            {
                for(let j = i; j < email.length; j++)
                {
                    temp += email[j];
                }
            }     
        }
        if(temp == "@gmail.com")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    return false;
}

let k = 0;
function show_ver(){
    k++;
        let u = document.getElementById("req").value;
        if(ktEmail(u))
        {
            if(k % 2 == 0)
            {
                document.getElementById("verification").style.display = "none";
            }
            else
            {
                document.getElementById("verification").style.display = "block";
            }
        }
}

let count_menu = 0;
function menu_click()
{
    count_menu++;
        if(count_menu % 2 == 0)
        {
            document.getElementById("slide_bar").style.display = "none";
        }
        else
        {
            document.getElementById("slide_bar").style.display = "block";
        }
}

let h = 1;
let text;
let str2 = "";
function click_bar(str) {
    text = document.getElementById(str);
    str2 = text.innerText;
    if(str2 == "DAIRY FREE FLAVORS")
    {
        document.getElementById("aa").style.left = "42%";
    }
    else
    {
        document.getElementById("aa").style.left = "2%";
    }
}