import React from "react"
const Complaint = () => {
   return (
       <div><div class="mainCard  shadow rounded-none sm:rounded-lg max-w-3xl">
        <div class="closeBtn px-2 py-2 sm:px-3 sm:py-4">
            <button type="button" class="close bg-#fffff p-1 inline-flex items-center justify-center text-white-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
             <span class="sr-only">Close menu</span>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line></svg>
           </button>
        </div>
            <div class="px-10 py-9 sm:px-15 sm:py-0">
                <div class="grid-rows-1">
                    <input class="Box px-3" type="text" size="30" placeholder="Subject">
                </div>
                <div class="grid-rows-1">
                 <textarea class="Box px-3" type="text" rows="5" cols="50" placeholder="Write your Complaint here..."></textarea>
                </div>
                <div  class="grid-rows-1">
                 <button class="btn-complain text-white font-weight:900 py-2 px-6 text-l mr-4">COMPLAIN</button>
            </div>

        </div>
    </div></div>
    )
}
export default Complaint 
