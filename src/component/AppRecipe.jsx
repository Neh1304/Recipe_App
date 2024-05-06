import React from 'react'

const RecipeApp = () => {
  return (
    <div>
    <div className="container">
        <div className="row" style={{color:'grey'}}>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label" style={{color:'white'}}>Recipe title</label>
                    <input type="text" className="form-control" placeholder='Enter the title' />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label" style={{color:'white'}}>Creator</label>
                <input type="text" className="form-control" placeholder='Enter the creator'  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label" style={{color:'white'}}>Description</label>
                <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder='Enter the description' ></textarea>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label" style={{color:'white'}}>Upload Image</label>
                <input type="file" name="" id="" className="form-control" />
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label" style={{color:'white'}}>Recipe Type</label>
                <select name="" id="" className="form-select">
                    <option value="Select"></option>
                    <option value="Vegetarian"></option>
                    <option value="Non Vegetarian"></option>
                </select>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label" style={{color:'white'}}>Ingredients</label>
                <input type="text" className="form-control" placeholder='Enter the ingredients'  />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn-btn-light">SUBMIT</button>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default RecipeApp
