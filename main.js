var sname=document.getElementById('siteName');
var surl=document.getElementById('siteUrl');
var errorName=document.getElementById('errorName');
var errorUrl=document.getElementById('errorUrl');

var list=[];
if(localStorage.getItem("list")!=null)
{
    list=JSON.parse(localStorage.getItem("list"));
    display();
}

function submit(){
    var test=0;
if(!sname.value=="" && !surl.value==""){
    errorName.innerHTML="";
    errorUrl.innerHTML="";
    var one={
        linkName:sname.value,
        link:surl.value,
    };
    for(var i=0;i<list.length;i++)
    {
        if(list[i].linkName==sname.value)
        {
            test++;
        }
        else{
            continue;
        }
    }
    if(test>0)
    {
        errorName.innerHTML=`<p class="input">this name already exist</p>`;
    }
    else{
        list.push(one);
        localStorage.setItem("list",JSON.stringify(list));
        remove();
        display();
    }
}
else if(surl.value=="" && !sname.value==""){
    errorName.innerHTML=`<p class="input">this url already exist</p>`;
    errorUrl.innerHTML=`<p class="input">Url Field is required</p>`;
}
else
{
    errorName.innerHTML=`<p class="input">Name is required</p>`;
    errorUrl.innerHTML=`<p class="input">Url Field is required</p>`;
}
}
function remove(){
    sname.value="";
    surl.value="";
}

function display(){
    var cartona="";
    for(var i=0 ;i<list.length;i++)
    {
        cartona += `
        <div class="row ms-2 me-2 mt-3 mb-3 b_g p-3">
        <div class="col-3 d-flex align-items-center">
            <div class="p-2">
                <h3>${list[i].linkName}</h3>
            </div>
        </div>
        <div class="col-9 d-flex align-items-center">
            <div class="p-3">
                <a href="${list[i].link}" class="btn btn-primary m-1" target="_blank">vist</a>
                <button class="btn btn-danger m-1" onclick="btnDelete(${i})">delete</button>
            </div>
        </div>
    </div>
        `
    }


    document.getElementById('display').innerHTML= cartona;
}
function btnDelete(index){
    list.splice(index,1);
    display();
    localStorage.setItem("list",JSON.stringify(list));
}