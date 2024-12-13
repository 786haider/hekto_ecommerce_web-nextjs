import React from 'react'
import bulbImag from '../../../../public/bulb.png'
import sofaImage from '../../../../public/herosofa.png'
import Image from "next/image"

const HeroPage = () => {
  return (
    <div style={{backgroundColor:'rgba(242, 240, 255, 1)',width:'1920px',height:'764px',top:'122px'}} className='flex'>
     <div>
     <Image src={bulbImag} alt="Bulb" width={387} height={387} style={{top:'122px' , left:'70px'}}/>
     </div>
      <div style={{width:'644px',height:'248px',top:'325px',left:'375px'}}  className='mt-48'>
      
      <p style={{color:'rgba(251, 46, 134, 1)',fontWeight:'700px',fontSize:'16px',lineHeight:'28px',width:'230px',height:'28px',top:'325px',left:'378'}} className=''>
      
      Best Furniture For Your Castle....
      </p>
      <h1 style={{width:'644px',height:'140px',top:'365px',left:'375px',font:'josefin sans',fontSize:'53px',lineHeight:'81.98px',color:'rgba(0, 0, 0, 1)',letterSpacing:'1.5%'}} className='font josefin sans font-bold '>
      New Furniture Collection
      Trends in 2020
      </h1>
      <p style={{color:'rgba(138, 143, 185, 1)',fontWeight:'700px',fontSize:'16px',lineHeight:'28px',width:'559px',height:'56px',top:'517px',left:'375'}} className='mt-8'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
      in phasellus non in justo.
      </p>
    <button className='mt-6 text-white text-center' style={{backgroundColor:'rgba(251, 46, 134, 1)',borderRadius:'2px',width:'163px',height:'50px',top:'600px',left:'375px'}}>
      Shop Now
    </button>
      </div>
      
       <div style={{color:'rgba(236, 210, 250, 0.35)',width:'706px',height:'689px',top:'161px',left:'1041px'}}>
       <Image 
       src={sofaImage}
       alt="Sofa"
       width={706}
       height={689}

       />
       </div>
      
      </div>
  )
}

export default HeroPage