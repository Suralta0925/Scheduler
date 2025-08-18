import "../../style/TodoTabStyles/Header.css";

function Header(){

    return(
        <div id="holder">
            <div id="tracker">
                <h3>Assigments</h3>
                <p>Keep it up!</p>
                <div id="progressBar">
                    <div></div>
                </div>
            </div>
            <div id="trackerDisplay">
                <div id="display">4/7</div>
            </div>
        </div>
    );
}

export default Header;