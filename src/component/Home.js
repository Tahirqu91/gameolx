import React  from 'react';
//  import Cardui from './Cardui'
import Header from './Header'

  import { connect } from 'react-redux';
//  import { set_name } from './Redux/action';
 import  image  from './logo/image.webp'
//   import  image1  from './logo/image1.webp'
//  import  image2  from './logo/image2.jpg'
//  import  image3   from './logo/image3.webp'
//  import  image4   from './logo/image4.webp'
//  import  image5  from './logo/image5.webp'
//  import  image6  from './logo/image6.webp'
//  import  image7  from './logo/image7.webp'
//  import  image8  from './logo/image8.webp'
//  import  image9  from './logo/image9.webp'
//  import  image10  from './logo/image10.webp'
//  import  image11  from './logo/image11.webp'
//  import  image12  from './logo/image12.webp'
//  import  image13  from './logo/image13.jpg'
//  import  image14  from './logo/image14.jpg'
//  import  image15  from './logo/image15.jpg'
//  import  image16  from './logo/image16.webp'
//  import  image17  from './logo/image17.webp'
//  import  image18  from './logo/image18.webp' 
//  import  image19  from './logo/image19.webp'

 import Footer from './Footer'
 import Ads from './Ads'
 

class Home extends React.Component{
    render(){
        let userr= this.props.current_card
 console.log("proppppppp", this.props)
        return(
       <>     
      

           <div>
         
           <Header />
           
          <br />
      <Ads/>

<div className="container-fluid">
    <div className="row">
<div className="col-md-12 ">
          <h4>Fresh recommendations</h4> 
    </div>
</div>
</div>
 
<div className="container-fluid  ">
    <div className="row">
    <div className="col-md-12 ">
    <div className="cards">
    <div className="card">
      
<img src={userr.image}   className="card-img"/>
<h4 className="card-tittle">Rs {}</h4>
<div className="card-info">{} <br/>
<span className="card-category">{}</span>  
  
</div>  

  </div>
 </div> 






















{/* <Cardui  imgsrc={image2} price="960,000-7 Years" tittle="Get Honda Civc 2020"   location="HYDERABAD , SINDH" />
<Cardui  imgsrc={image3} price="95,000" tittle="Brand New Bridal Dress"  location="UNIVERSITY ROAD, Karachi" />
<Cardui  imgsrc={image4} price="185" tittle="Men shirts"  location="SAADI TOWN, Karachi" />
<Cardui  imgsrc={image5} price="30,500" tittle="HP Pro Book 6570b Core i5"   location="Gulshan-e-Jauhar  Karachi" />
<Cardui  imgsrc={image6} price="5,499" tittle="Xcited offer T9 4/64 smart"   location="SADDAR TOWN, Karachi" />
<Cardui  imgsrc={image7} price="10,999" tittle="Infinix Note 3 pro dual sim" location="DHA PHASE 1, KARACHI" />
<Cardui  imgsrc={image8} price="9,500" tittle="Motorolla Z Force 4gb 32gb"   location="SADDAR Karachi" />
<Cardui  imgsrc={image9} price="120,000" tittle="Suzuki Alto "   location="Gulshan-e-jauhar Karachi" />
<Cardui  imgsrc={image10} price="45,000" tittle="3bds-3ba - 500 square Yards" location="Pakistan"    />
<Cardui  imgsrc={image11} price="379" tittle="Sofa Elastic Covers"   location="FEDERAL B AREA, KARACHI" />
<Cardui  imgsrc={image12} price="300,000" tittle="SUZUKI Wagon R Hasil"   location="Gulshan-e-iqbal, KARACHI" />
<Cardui  imgsrc={image13} price="379" tittle="Sofa Elastic Covers"   location="FEDERAL B AREA, KARACHI" />
<Cardui  imgsrc={image14} price="379" tittle="Sofa Elastic Covers"   location="FEDERAL B AREA, KARACHI" />
<Cardui  imgsrc={image15} price="379" tittle="Sofa Elastic Covers"   location="FEDERAL B AREA, KARACHI" />
<Cardui  imgsrc={image16} price="15,000" tittle="HPZ200Corei3,Gaming,6GB Ram"   location="Tench Bhata, Rawalpindi, Punjab" />
<Cardui  imgsrc={image17} price="149" tittle="Eyebrow Razor "   location="Shahra-e-Faisal, Karachi, Sindh" />
<Cardui  imgsrc={image18} price="Rs 28,500" tittle="wheel balance hover board new"   location="DHA City, Lahore, Punjab" />
<Cardui  imgsrc={image19} price="1,950" tittle="Redmi BluetoothEarphoneWireless"   location="Allama Iqbal Town, Lahore, Punjab" /> */}
 
 


</div>
</div>
</div>

 

 
<br/><br/><br/><br/><br/><br/>
<Footer/>
       </div>
    
       
      

        </>
        )
    }
 } 



 const mapStateToProps =(state)=>({
    current_card:state.current_card,
         
     })
  
  
//   const mapDispatchToProps = (dispatch) => {
//      return{
//   set_name: () => dispatch(set_name()),
//   }
  
//   }
   
  
  
  
  export default connect(mapStateToProps, null)(Home);
  
  