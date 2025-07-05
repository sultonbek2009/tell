

function FooterCard() {
  return (
    <div className="py-40">
             <h1 className=' ml-[30px] text-[20px] font-extralight'>SHOP BY COLLECTION</h1>
        <div className="flex justify-around gap-3 w-[1900px] mt-[30px] ">
            <div className="ml-[20px]">
                <img 
                className='w-[609px] h-[520px] relative'
                src="https://static.wixstatic.com/media/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg/v1/fill/w_610,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_7407d6560448416a996712cac8ce5c9c~mv2.jpg" alt="" />
               <button className='absolute mt-[-40px] border border-black w-[180px] text-center font-medium ml-[27px] text-[14px] rounded-[22px] hover:bg-black hover:text-yellow-600'>PREFORMENCE  SERIES</button>
            </div>
             <div>
                <img 
                className='w-[609px] h-[520px] relative'
                src="https://static.wixstatic.com/media/c837a6_a5a5863d6d7341958148ce678ac1a49a~mv2.jpg/v1/fill/w_612,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a5a5863d6d7341958148ce678ac1a49a~mv2.jpg" alt="https://static.wixstatic.com/media/c837a6_a5a5863d6d7341958148ce678ac1a49a~mv2.jpg/v1/fill/w_612,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a5a5863d6d7341958148ce678ac1a49a~mv2.jpg" />
               <button className='absolute border mt-[-40px] border-black text-[14px  w-[180px] text-center font-medium ml-[27px] rounded-[22px] hover:bg-black hover:text-yellow-600'>LIMITED EDITION</button>
            </div> 
            <div>
                <img 
                className='w-[609px] h-[520px] relative'
                src="https://static.wixstatic.com/media/c837a6_d70089b44d104fc59d5366f6ff53851b~mv2.jpg/v1/fill/w_612,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_d70089b44d104fc59d5366f6ff53851b~mv2.jpg" alt="" />
               <button className='absolute border mt-[-40px] border-black text-[14px w-[180px] text-center font-medium ml-[27px] rounded-[22px] hover:bg-black hover:text-yellow-600'>KIDS COLLECTION</button>
            </div> 
        </div>
    </div>
  )
}

export default FooterCard 