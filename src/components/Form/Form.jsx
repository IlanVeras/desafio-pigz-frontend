import React from 'react'
import styles from './Form.module.css'
import ContentDefault from './ContentDefault/ContentDefault'
import ContentSecond from './ContentSecond/ContentSecond'
import ContentThird from './ContentThird/ContentThird'

export default function Form() {
  const [currentForm,setCurrentForm] = React.useState(2)
  React.useEffect(() => {
    console.log(currentForm)
  }, [currentForm])

function renderForm(){
  switch(currentForm){
    case 0:
      return <ContentDefault currentForm={currentForm} setCurrentForm={setCurrentForm}/>
    case 1:
      return <ContentSecond currentForm={currentForm} setCurrentForm={setCurrentForm}/>
    
    case 2:
      return <ContentThird currentForm={currentForm} setCurrentForm={setCurrentForm}/>
    default:
      return null
  }
}

  return (
    <div className={styles.container}>
      {renderForm()}
    </div>
  )
}
