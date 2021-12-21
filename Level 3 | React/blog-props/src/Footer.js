import React from "react"

function Footer() {
    return (
        <footer className="footerContainer">
            <div className="icons">
                <i className="fab fa-twitter" id="twitter"></i>
                <i className="fab fa-facebook-f" id="fb"></i>
                <i className="fab fa-github" id="git"></i>
            </div>
            <p id="copyright">Copyright <span>&#169;</span> Your Website 2021</p>
        </footer>
    )
}

export default Footer