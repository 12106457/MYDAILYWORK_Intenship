import React from 'react'
import {computerData} from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const ComputerPage = () => {
  return (
    <>
    <Navbar/>
    <div className="pagesection">
        { 
        computerData.map((item)=>{
                return(
                    <div>
                        <Link to={`/computers/${item.id}`}>
                            <div className="pageimg">
                                <img src={item.image} alt="not found" />
                            </div>
                        </Link>
                    <div className="productdetail">
                        {item.company},{item.model}
                    </div>
                    </div>
                )
            })

        }
    </div>
    </>
  )
}

export default ComputerPage
