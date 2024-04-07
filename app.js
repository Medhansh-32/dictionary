let url="https://api.dictionaryapi.dev/api/v2/entries/en/";


const btn=document.querySelector("button");

async function mean(word){
    try{
        let meaning= await axios.get(url+word);
       
        return meaning.data[0].meanings[0].definitions[0].definition;
        }
        catch(e){
            return  "Incorrect Word";
        }
    }

async function showMean(ans,word){
    const str=document.querySelector("#mean");
    const show=document.querySelector("#show");
if(ans=="Incorrect Word"){
    str.innerText=" ";
    show.innerText= "Incorrect Word";
    show.style.Color="red";
    
}else{
    str.innerText="Meaning : ";
    show.innerText=  ans;
  

    
}

}
btn.addEventListener("click",async ()=>{
    const word=document.querySelector("input").value;
   
    let ans=await mean(word);
   await showMean(ans,word);
})
