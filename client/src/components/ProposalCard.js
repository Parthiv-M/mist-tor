import React from "react"
const ProposalCard = () => {
    return (
        <div>

    <div class="card ml-8 mt-4 rounded-2xl border-none absolute grid">
    <style>
        .card{
            background-color: #3C3644;
            width: 700px;
            height:190px;
            color: white;
            grid-template-columns: 0.25fr 0.25fr;
            
        }
        </style>

      <div class="heading mt-2 ml-4"> PROPOSAL SUBJECT</div>
      <div class="date text-center w-40 h-6 mt-2 ml-2 ">20 MARCH 2020</div>
    </div>
    <div class="line absolute mt-14 ml-12"></div>
   
        <div class="heading2 mt-16 ml-12 absolute">John Doe 2.0</div>
        <div class="heading3 absolute ml-12 mt-28">Lets hack into slcm and change our grades and steal all info from their database</div>
    <button class="btn1 absolute mt-40 ml-12 font-bold border-none rounded-lg text-center text-base h-8 w-24"> REJECT</button>
    <button class="btn2 absolute ml-52 mt-40 rounded-lg border-none font-bold text-center h-8 w-24 text-base">ACCEPT</button>
    <style>
        .heading2{
            color: white;
        }
        .heading3{
            color: white;
        }
        .date{
            background-color: #C4C4C4;
            color:#3C3644;
            border-radius: 100px;
            font-size: 15px;
            
        }
        .line{
            border: 1.5px solid #7D4696;
            width: 325px;
        }
        .btn1{
            color: white;
            background-color: #221F26;
        }
        .btn2{
    color: white;
    background-color:  #7D4696;
        }
    </style>
  </div>
  )
}
export default ProposalCard 
