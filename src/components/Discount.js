import React from 'react'

export default function Discount() {
    return (
        <>
            <div className="col-lg-6">
                <div className="shoping__continue">
                    <div className="shoping__discount">
                        <h5>Discount Codes</h5>
                        <form action="#">
                            <input type="text" placeholder="Enter your coupon code" />
                            <button type="submit" className="site-btn">APPLY COUPON</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
