import React from "react"
const ComplaintCard = () => {
   return (
      <div class="card ml-8 mt-4 rounded-2xl border-none absolute grid">
    <style>
        .card{
            background-color: #3C3644;
            width: 720px;
            height:200px;
            color: white;
            grid-template-columns: 0.1fr 0.1fr;
            
        }
        </style>

      <div class="heading mt-4 ml-10  uppercase">bullying</div>
      <div class="date text-center w-28 h-5 mt-5 ml-3 uppercase font-bold ">20 dec 2020</div>
    
    <div class="line absolute mt-11 ml-9"></div>
   
        <div class="heading2 mt-12 ml-10 absolute">Mehul Maheshwari</div>
        <div class="heading3 absolute ml-10 mt-20 mr-10">Pal Cheda is bullying me man. she is beating me to write her and her friends lab record books and even ordering me to bring delivery from KC and not giving that money also. Please, look into this problem. Please save me.</div>
    <button class="btn1 absolute mt-40  border-none rounded-lg text-center text-base h-6 w-28 uppercase font-bold">REVIEWED</button>
    
    </div>
    <style>
        .heading2{
            color: white;
        }
        .heading3{
            color: white;
            font-size: medium;
            line-height: 0.5cm;
        }
        .date{
            background-color: #C4C4C4;
            color:#3C3644;
            border-radius: 100px;
            font-size: 13px;
            
        }
        .line{
            border: 1px solid #7D4696;
            width: 200px;
        }
        .btn1{
            background-color: #C4C4C4;
            color:#3C3644;
            border-radius: 100px;
            font-size: 13px;
            float: left;
            margin-left: 83%;
        }
        
    </style>
    )
}
export default ComplaintCard 
