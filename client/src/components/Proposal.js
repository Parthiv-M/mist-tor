import React from "react"
const Proposal = () => {
   return (
       <div><div class="mainCard  rounded-none sm:rounded-lg max-w-3xl m-auto h-auto bg-gray-800 text-white mt-10">
        <div class="closeBtn px-2 py-2 sm:px-3 sm:py-4">
            <button type="button" class="close bg-#fffff px-2">
             <span class="sr-only">Close menu</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line></svg>
           </button>
        </div>
            <div class="px-10 py-9 sm:px-15 sm:py-0">
                <div class="grid-rows-1">
                    <input class="Box rounded-lg px-3 mt-5 mb-5 ml-auto mr-auto border-2 w-full p-2" type="text" size="30" placeholder="Subject">
                </div>
                <div class="grid-rows-1">
                 <textarea class="Box px-3 rounded-lg mt-5 mb-5 ml-auto mr-auto border-2 w-full p-2" type="text" rows="5" cols="50" placeholder="Write your Proposal here..."></textarea>
                </div>
               
                <div class="px-5 py-3 sm:px-0 sm:py-0">
                    <button class="btn-upload text-white py-1  px-1 rounded-xl text-l mr-4 mt-auto ml-0 fixed">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line></svg>
                    </button>
                </div>
                <div class="px-10 py-6 sm:px-8 sm:py-0">
                    <span class="upload inline mt-auto p-1 text-base text-gray-400">Related files (if any)</span>
                </div> 
                <div  class="grid-rows-1">
                 <button class="btn-propose text-white rounded-lg shadow-2xl mb-10 font-extrabold mr text-white font-weight:900 py-2 px-6 text-l mr-4">Post</button>
            </div>

        </div>
    </div>
  </div>
    )
}
export default Proposal
