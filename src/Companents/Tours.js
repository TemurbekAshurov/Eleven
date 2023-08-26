import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
  const Remove = (a)=>{
  props.DelFun(a)
  }
  return (
    <section>
        <div className='title'>
            <h2>
                Out Tours
            </h2>
            <div className='underline'></div>
            </div>
            <div style={{textAlign:"center"}} className='tours'>
              {props.Malumot.length===0?
             (
               <button onClick={()=> props.Ref()} className='btn'>Refresh</button>
             ):(
              props.Malumot.map((item)=>{
                return (
                  <Tour id={item.id} 
                  key={item.name}
                  name={item.name}
                  info={item.info}
                  price={item.price}
                  image={item.image}
                  Fun={Remove}
                  />
                )
               })
             )}
             
             
    
            </div>
    </section>
  )
}

export default Tours